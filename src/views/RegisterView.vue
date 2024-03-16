<script setup>
import { ref, reactive } from 'vue';

const formData = ref({
  email: '',
  password: '',
  first_name: '',
  last_name: ''
});

const errorData = reactive([]);
let errorExist = ref(false);
const isAuth = ref(false);

const submitForm = async () => {
  try {
    errorData.value = [];
    errorExist.value = false;
    isAuth.value = false;

    const response = await fetch('http://cloud-storage-new.api/api-file/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    });
    if (!response.ok) {
      let errorMessage = 'Произошла ошибка при регистрации';

      if (response.status === 422) {
        errorData.value = await response.json();
        console.log(errorData)
        errorExist.value = true;
        errorMessage = errorData.message || 'Некорректные данные';
        return
      }
    }

    const responseData = await response.json();
    isAuth.value = true;
    console.log('Успешная регистрация:', responseData);
  } catch (errorData) {
    console.error('Ошибка при регистрации:', errorData.message);
  }
};
</script>

<template>
  <div class="register-form">
    <form class="form" @submit.prevent="submitForm">
      <p v-if="isAuth">Вы успешно зарегистрированы</p>

      <label for="email">Email</label>
      <input v-model="formData.email" type="email" placeholder="Введите email">
      <p class="error-block" v-if="errorExist">{{errorData['value']['message']['email']}}</p>

      <label for="password">Пароль</label>
      <input v-model="formData.password" type="password" placeholder="Введите пароль">
      <p class="error-block" v-if="errorExist">{{errorData['value']['message']['password']}}</p>

      <label for="name">Имя</label>
      <input v-model="formData.first_name" type="text" placeholder="Введите имя">
      <p class="error-block" v-if="errorExist">{{errorData['value']['message']['first_name']}}</p>

      <label for="surname">Фамилия</label>
      <input v-model="formData.last_name" type="text" placeholder="Введите фамилию">
      <p class="error-block" v-if="errorExist">{{errorData['value']['message']['last_name']}}</p>

      <button type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<style scoped>
  .error-block {
    color: red;
  }
</style>
