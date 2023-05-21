<template>
    <div>
      <div id="gradient-background"></div>
      <div class="container">
        <h1>ChatGPT Login</h1>
        <form>
          <label for="password">请输入密钥：</label>
          <input type="password" id="password" v-model="password">
          <button @click="checkPassword">登录</button>
        </form>
        <p>关注公众号：智汇创见免费获取密钥</p>
        <div class="error-message" id="error-message">{{ errorMessage }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        password: '',
        errorMessage: ''
      };
    },
    mounted() {
      let attempts = 0;
  
      this.checkPassword = function () {
        const password = this.password;
  
        // 密码验证逻辑
        // 假设密码文件的路径为 ./password.txt
        const fs = require('fs');
        const file = fs.readFileSync('./password.txt', 'utf-8');
        if (password === file) {
          this.$router.push('/chat'); // 密码验证通过，跳转到聊天室页面
        } else {
          attempts++;
          if (attempts < 3) {
            const remainingAttempts = 3 - attempts;
            this.errorMessage = `无效的密钥。还剩 ${remainingAttempts} 次尝试机会。`;
          } else {
            document.getElementById('password').disabled = true;
          }
        }
      };
    },
  };
  </script>
  
  <style scoped>
  body {
    background-color: #ffffff;
    color: #222222;
    font-family: Arial, sans-serif;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  h1 {
    font-size: 60px;
    text-align: center;
    margin-top: 0;
    text-shadow: 3px 3px 0px rgba(255, 255, 255, 0.7);
  }
  
  p {
    font-size: 20px;
    text-align: center;
    margin-top: 30px;
    text-shadow: 2px 2px 0px rgba(255, 255, 255, 0.7);
  }
  
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
  
  label {
    font-size: 20px;
    margin-bottom: 10px;
    text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.5);
  }
  
  input {
    width: 300px;
    height: 40px;
    border: none;
    margin: 10px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
    background-color: #eeeeee;
    outline: none;
  }
  
  input:focus {
    transform: scale(1.05);
    box-shadow: 2px 2px 20px rgba(0, 0, 
    0, 0, 0.3);
  background-color: #ffffff;
}

button {
  width: 300px;
  height: 40px;
  background-color: #3498db;
  color: white;
  border: none;
  margin: 10px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  outline: none;
}

button:hover {
  transform: translateY(-5px);
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.3);
}

.error-message {
  font-size: 16px;
  color: red;
  margin-top: 10px;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.5);
}

/* 过渡颜色的渐变 */
#gradient-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: linear-gradient(
    to bottom,
    rgba(52, 152, 219, 1) 0%,
    rgba(46, 204, 113, 1) 100%
  );
  opacity: 0.25;
}
</style>
