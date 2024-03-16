<script setup>
import {ref} from 'vue';

const formData = ref({
  email: '',
  password: '',
});

const isAuth = ref(false)

const errorData = []
let errorExist = ref(false);



const submitForm = async () => {
  try {
    errorData.value = [];
    isAuth.value = false;
    errorExist.value = false;

    const response = await fetch('http://cloud-storage-new.api/api-file/authorization', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    });
    if (!response.ok) {
      let errorMessage = 'Произошла ошибка при авторизации';

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
    console.log('Успешная авторизация:', responseData);
  } catch (errorData) {
    console.error('Ошибка при авторизации:', errorData.message);
  }
};
</script>

<template>
  <div class="authorization-form">
    <form class="form" @submit.prevent="submitForm">
      <p v-if="isAuth">Вы успешно авторизированы</p>

      <label for="email">Email</label>
      <input v-model="formData.email" type="email" placeholder="Введите email">
      <p class="error-block" v-if="errorExist">{{errorData['value']['message']['email']}}</p>

      <label for="password">Пароль</label>
      <input v-model="formData.password" type="password" placeholder="Введите пароль">
      <p class="error-block" v-if="errorExist">{{errorData['value']['message']['password']}}</p>

      <button type="submit">Авторизироваться</button>
    </form>
  </div>
</template>

<style scoped>
  .error-block {
    color: red;
  }
</style>