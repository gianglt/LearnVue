<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required>

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>

      <button type="submit">Login</button>
    </form>

 <el-button type="primary" loading>Loading</el-button>
  <el-button type="primary" :loading-icon="Eleme" loading>Loading</el-button>
 <el-button type="primary" loading>
    <template #loading>
      <div class="custom-loading">
        <svg class="circular" viewBox="-10, -10, 50, 50">
          <path
            class="path"
            d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
          "
            style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"
          />
        </svg>
      </div>
    </template>
    Loading
  </el-button>    
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Eleme } from '@element-plus/icons-vue'

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const error = ref('');

    const handleSubmit = async () => {
      // In a real app, you'd have API logic here to authenticate
      // For this example, we'll just simulate a login
      if (username.value === 'admin' && password.value === 'password') {
        error.value = '';
        alert('Login successful!');
        // Redirect or update app state as needed
      } else {
        error.value = 'Invalid credentials.';
      }
    };

    return {
      username,
      password,
      error,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
.login-container {
  max-width: 600px;
  margin: 10px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  /* Background image */
  background-image: url('/images/danang.jpg'); /* Replace with your image URL */
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the image */
  background-repeat: repeat; /* Prevent image repetition */
  /* Optional: Add a background color as a fallback if the image fails to load */
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.error {
  color: red;
}

.el-button .custom-loading .circular {
  margin-right: 6px;
  width: 18px;
  height: 18px;
  animation: loading-rotate 2s linear infinite;
}
.el-button .custom-loading .circular .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--el-button-text-color);
  stroke-linecap: round;
}


</style>