<template>
  <div class="technician-form-container">
    <h1 class="form-title">Cadastrar Novo Técnico</h1>
    <div class="form-card">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="fullName">Nome Completo*</label>
          <input type="text" id="fullName" v-model="form.fullName" required />
          <span v-if="errors.fullName" class="error-message">{{
            errors.fullName
          }}</span>
        </div>

        <div class="form-group">
          <label for="email">E-mail*</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            @blur="validateEmail"
          />
          <span v-if="errors.email" class="error-message">{{
            errors.email
          }}</span>
        </div>

        <div class="form-group">
          <label for="password">Senha*</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            required
            @blur="validatePassword"
          />
          <span v-if="errors.password" class="error-message">{{
            errors.password
          }}</span>
        </div>

        <div class="form-group">
          <label for="phone">Telefone de Contato (Opcional)</label>
          <input
            type="tel"
            id="phone"
            v-model="form.phone"
            placeholder="(99) 99999-9999"
          />
        </div>

        <input type="hidden" v-model="form.type" />

        <button type="submit" class="btn submit-btn">Cadastrar Técnico</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechnicianForm",
  data() {
    return {
      form: {
        fullName: "",
        email: "",
        password: "",
        phone: "",
        type: "tecnico", // Define o tipo como 'técnico' por padrão
      },
      errors: {
        fullName: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    validateEmail() {
      this.errors.email = "";
      if (!this.form.email) {
        this.errors.email = "E-mail é obrigatório.";
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = "Formato de e-mail inválido.";
      }
      // Simulação de verificação de e-mail já cadastrado (futura integração com backend)
      // if (this.form.email === "tecnico@sesi.com" && this.form.email !== "") { // Exemplo de um e-mail já existente
      //   this.errors.email = "Este e-mail já está cadastrado.";
      // }
    },
    validatePassword() {
      this.errors.password = "";
      if (!this.form.password) {
        this.errors.password = "Senha é obrigatória.";
      } else if (this.form.password.length < 8) {
        this.errors.password = "A senha deve ter no mínimo 8 caracteres.";
      } else if (!/\d/.test(this.form.password)) {
        this.errors.password = "A senha deve conter pelo menos 1 número.";
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(this.form.password)) {
        this.errors.password =
          "A senha deve conter pelo menos 1 caractere especial.";
      }
    },
    isValidEmail(email) {
      // Regex simples para validação de e-mail
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    formIsValid() {
      this.validateEmail();
      this.validatePassword();
      this.errors.fullName = this.form.fullName
        ? ""
        : "Nome completo é obrigatório.";

      return (
        !this.errors.fullName && !this.errors.email && !this.errors.password
      );
    },
    handleSubmit() {
      if (this.formIsValid()) {
        console.log("Dados do Técnico para cadastro:", this.form);
        alert("Cadastro de Técnico simulado com sucesso!");
        // Aqui você faria a chamada API para cadastrar o técnico
        // Exemplo: this.$axios.post('/api/technicians', this.form)
        // Após o sucesso, você pode redirecionar para a lista de técnicos ou dar um feedback
        this.$router.push("/admin/dashboard"); // Redireciona para o dashboard após o cadastro
        // Limpa o formulário após o envio simulado
        this.form = {
          fullName: "",
          email: "",
          password: "",
          phone: "",
          type: "tecnico",
        };
      } else {
        alert(
          "Por favor, preencha todos os campos obrigatórios e corrija os erros."
        );
      }
    },
  },
};
</script>

<style scoped>
.technician-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f2f5; /* Um fundo mais claro para o painel */
  padding: 30px;
  font-family: Arial, sans-serif;
}

.form-title {
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 2.2em;
  font-weight: bold;
  text-align: center;
}

.form-card {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px; /* Largura ajustada para o formulário */
  text-align: left;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"] {
  width: calc(100% - 22px); /* Ajusta a largura para o padding */
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
  box-sizing: border-box; /* Garante que padding não aumente a largura total */
}

.error-message {
  color: #e74c3c; /* Vermelho para mensagens de erro */
  font-size: 0.9em;
  margin-top: 5px;
  display: block; /* Garante que a mensagem fique em uma nova linha */
}

.btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.submit-btn {
  background-color: #28a745; /* Um verde um pouco diferente para este botão */
  color: white;
}

.submit-btn:hover {
  background-color: #218838;
}
</style>
