<template>
  <div class="login-container">
    <h1 class="login-title">LOGIN</h1>
    <div class="login-card">
      <img
        src="@/assets/sesi-sports-logo.png"
        alt="SESI Sports Logo"
        class="logo"
      />
      <form @submit.prevent="handleLogin">
        <label for="cpf">CPF</label>
        <input
          type="text"
          id="cpf"
          v-model="cpf"
          placeholder="999.999.999-99"
        />

        <label for="password">Senha</label>
        <input type="password" id="password" v-model="password" />
        <a href="#" class="forgot-password">Esqueceu sua senha</a>

        <button type="submit" class="btn primary-btn">ENTRAR</button>
      </form>

      <div class="divider">ou</div>

      <button class="btn secondary-btn" @click="goToRegister">
        CADASTRAR-SE
      </button>
      <button class="btn google-btn">
        <img
          src="@/assets/google-icon.png"
          alt="Google Icon"
          class="google-icon"
        />
        ENTRE COM O GOOGLE
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      cpf: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      console.log(
        "Tentativa de login com CPF:",
        this.cpf,
        "e Senha:",
        this.password
      );
      // SIMULAÇÃO DE LOGIN: APENAS PARA TESTE
      if (this.cpf === "admin" && this.password === "admin") {
        alert("Login bem-sucedido! Redirecionando para o painel.");
        // ESTA LINHA É CRÍTICA: REDIRECIONA PARA O DASHBOARD ADMINISTRATIVO
        this.$router.push("/admin/dashboard");
      } else {
        alert("CPF ou senha inválidos.");
      }
    },
    goToRegister() {
      console.log("Indo para a tela de cadastro");
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #2c3e50; /* Fundo escuro */
  font-family: Arial, sans-serif;
}

.login-title {
  color: white;
  margin-bottom: 30px;
  font-size: 2.5em;
  font-weight: bold;
}

.login-card {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.logo {
  max-width: 180px;
  margin-bottom: 30px;
}

form {
  text-align: left;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

input {
  width: calc(100% - 20px);
  padding: 12px 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
}

.forgot-password {
  display: block;
  text-align: right;
  font-size: 0.9em;
  color: #007bff; /* Azul padrão para links */
  text-decoration: none;
  margin-top: -10px; /* Ajuste para alinhar com o input */
  margin-bottom: 20px;
}

.forgot-password:hover {
  text-decoration: underline;
}

.btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;
}

.primary-btn {
  background-color: #4caf50; /* Verde do Figma */
  color: white;
}

.primary-btn:hover {
  background-color: #45a049;
}

.divider {
  text-align: center;
  margin: 20px 0;
  color: #555;
  font-weight: bold;
  position: relative;
}

.divider::before,
.divider::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 40%;
  height: 1px;
  background-color: #ccc;
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.secondary-btn,
.google-btn {
  background-color: #007bff; /* Azul do Figma */
  color: white;
}

.secondary-btn:hover,
.google-btn:hover {
  background-color: #0056b3;
}

.google-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.google-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>
