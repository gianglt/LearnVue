<script setup>
import { ref } from 'vue'

const name = ref('')
const greetingMessage = ref('')

const showGreeting = () => {
  if (name.value.trim()) {
    greetingMessage.value = `Chào mừng, ${name.value}!`
  } else {
    greetingMessage.value = 'Vui lòng nhập tên của bạn.'
  }
}
</script>

<template>
  <div class="welcome-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Chào mừng đến với trang Welcome!</span>
        </div>
      </template>
      <p>Đây là trang chào mừng được xây dựng bằng Vue.js và Element Plus.</p>

      <el-divider />

      <el-form label-position="top">
        <el-form-item label="Tên của bạn:">
          <el-input v-model="name" placeholder="Nhập tên của bạn ở đây" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="showGreeting">Hiển thị lời chào</el-button>
        </el-form-item>
      </el-form>

      <div v-if="greetingMessage" class="greeting-message">
        <el-alert :title="greetingMessage" type="success" show-icon :closable="false" />
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.welcome-container {
  max-width: 600px;
  margin: 20px auto;
}
.greeting-message {
  margin-top: 20px;
}
</style>