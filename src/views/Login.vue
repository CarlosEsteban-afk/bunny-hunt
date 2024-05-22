<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');

const handleSubmit = () => {

    console.log(username.value, password.value);
    if (username.value === 'admin' && password.value === 'admin') {
        router.push({ name: 'Game' });
    } else {
        alert('Invalid credentials');
    }

}
</script>

<template>
  <div class="flex">
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <label for="username">Username:</label>
      <input type="text" v-model="username" name="username" required />
      <br />
      <label for="password">Password:</label>
      <input type="password" v-model="password" name="password" required />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
