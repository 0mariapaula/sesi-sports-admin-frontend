<template>
  <div class="register-container">
    <h1 class="register-title">CADASTRO</h1>

    <div class="card-wrapper">
      <div class="register-card" v-if="currentStep === 1">
        <div class="step-indicator">
          <span :class="{ active: currentStep === 1 }">1</span>
          <div class="line"></div>
          <span :class="{ active: currentStep === 2 }">2</span>
        </div>
        <h2>Dados Pessoais*</h2>
        <form @submit.prevent="nextStep">
          <label for="cpf_reg">CPF*</label>
          <input
            type="text"
            id="cpf_reg"
            v-model="form.cpf"
            placeholder="000.000.000-00"
            required
          />

          <label for="name_reg">Nome Completo*</label>
          <input type="text" id="name_reg" v-model="form.name" required />

          <label for="phone_reg">Celular* (Whatsapp)</label>
          <input
            type="tel"
            id="phone_reg"
            v-model="form.phone"
            placeholder="82 9 9999-9999"
            required
          />

          <label for="email_reg">Melhor e-mail*</label>
          <input
            type="email"
            id="email_reg"
            v-model="form.email"
            placeholder="exemplo@email.com"
            required
          />

          <button type="submit" class="btn next-btn">Próximo</button>
        </form>
      </div>

      <div class="register-card" v-if="currentStep === 2">
        <div class="step-indicator">
          <span :class="{ active: currentStep === 1 }">1</span>
          <div class="line"></div>
          <span :class="{ active: currentStep === 2 }">2</span>
        </div>
        <h2>Endereço*</h2>
        <p class="subtitle">Preencha os dados corretamente!</p>
        <form @submit.prevent="handleSubmit">
          <label for="cep_reg">CEP*</label>
          <input
            type="text"
            id="cep_reg"
            v-model="form.address.cep"
            @blur="fetchAddressByCep"
            placeholder="57000-000"
            required
          />

          <label for="number_reg">Número*</label>
          <input
            type="text"
            id="number_reg"
            v-model="form.address.number"
            required
          />

          <label for="street_reg">Rua</label>
          <input
            type="text"
            id="street_reg"
            v-model="form.address.street"
            readonly
          />

          <label for="complement_reg">Complemento</label>
          <input
            type="text"
            id="complement_reg"
            v-model="form.address.complement"
          />

          <label for="neighborhood_reg">Bairro</label>
          <input
            type="text"
            id="neighborhood_reg"
            v-model="form.address.neighborhood"
            readonly
          />

          <label for="city_reg">Cidade</label>
          <input
            type="text"
            id="city_reg"
            v-model="form.address.city"
            readonly
          />

          <label for="state_reg">Estado</label>
          <input
            type="text"
            id="state_reg"
            v-model="form.address.state"
            readonly
          />

          <button type="submit" class="btn submit-btn">Cadastrar-se</button>
        </form>
      </div>

      <div class="register-card success-card" v-if="currentStep === 3">
        <img
          src="@/assets/mail-success-icon.png"
          alt="Email Icon"
          class="success-icon"
        />
        <h2>Cadastro Realizado</h2>
        <p>Acesse o seu e-mail para concluir o cadastro.</p>
        <button @click="goToLogin" class="btn ok-btn">OK</button>
      </div>

      <div class="register-card success-card" v-if="currentStep === 4">
        <img
          src="@/assets/mail-success-icon.png"
          alt="Email Icon"
          class="success-icon"
        />
        <h2>Cadastro Realizado</h2>
        <p>Acesse o seu e-mail e verifique o código para o primeiro acesso.</p>
        <div class="code-inputs">
          <input
            type="text"
            v-for="n in 4"
            :key="n"
            maxlength="1"
            class="code-input"
          />
        </div>
        <button @click="verifyCode" class="btn ok-btn">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      currentStep: 1,
      form: {
        cpf: "",
        name: "",
        phone: "",
        email: "",
        address: {
          cep: "",
          number: "",
          street: "",
          complement: "",
          neighborhood: "",
          city: "",
          state: "",
        },
      },
    };
  },
  methods: {
    nextStep() {
      // Validação básica para ir para a próxima etapa
      if (this.currentStep === 1) {
        if (
          this.form.cpf &&
          this.form.name &&
          this.form.phone &&
          this.form.email
        ) {
          this.currentStep = 2;
        } else {
          alert("Por favor, preencha todos os campos obrigatórios da Etapa 1.");
        }
      }
    },
    async fetchAddressByCep() {
      if (this.form.address.cep.replace(/\D/g, "").length === 8) {
        console.log("Buscando CEP para cadastro:", this.form.address.cep);
        try {
          // Simulação da resposta do ViaCEP
          const data = {
            cep: "57038-000",
            logradouro: "Avenida Jatiúca",
            complemento: "Lado ímpar",
            bairro: "Jatiúca",
            localidade: "Maceió",
            uf: "AL",
            ibge: "2704302",
            gia: "",
            ddd: "82",
            siafi: "2783",
          };

          if (data && !data.erro) {
            this.form.address.street = data.logradouro;
            this.form.address.neighborhood = data.bairro;
            this.form.address.city = data.localidade;
            this.form.address.state = data.uf;
            alert("Endereço preenchido automaticamente (Simulado)!");
          } else {
            alert("CEP não encontrado ou formato inválido (Simulado).");
            this.clearAddressFields();
          }
        } catch (error) {
          console.error("Erro ao buscar CEP (Simulado):", error);
          alert("Erro ao buscar CEP. Tente novamente (Simulado).");
          this.clearAddressFields();
        }
      }
    },
    clearAddressFields() {
      this.form.address.street = "";
      this.form.address.neighborhood = "";
      this.form.address.city = "";
      this.form.address.state = "";
    },
    handleSubmit() {
      // Validação básica para cadastro final
      if (
        this.form.address.cep &&
        this.form.address.number &&
        this.form.address.street &&
        this.form.address.neighborhood &&
        this.form.address.city &&
        this.form.address.state
      ) {
        console.log("Dados completos para cadastro:", this.form);
        alert("Cadastro enviado! (Simulado)");
        this.currentStep = 3; // Mover para a tela de sucesso de e-mail
        // No futuro, aqui você faria a chamada API para registrar o cliente
      } else {
        alert("Por favor, preencha todos os campos obrigatórios de endereço.");
      }
    },
    goToLogin() {
      this.$router.push("/login"); // Volta para a tela de login
    },
    verifyCode() {
      alert("Código verificado! (Simulado)");
      this.$router.push("/login"); // Redireciona para login após verificar código
    },
  },
};
</script>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #2c3e50; /* Fundo escuro igual ao login */
  font-family: Arial, sans-serif;
}

.register-title {
  color: white;
  margin-bottom: 30px;
  font-size: 2.5em;
  font-weight: bold;
}

.card-wrapper {
  display: flex;
  justify-content: center; /* Centraliza cards se houver mais de um */
  width: 100%;
}

.register-card {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px; /* Largura similar ao card de login */
  text-align: center;
  position: relative; /* Para o step-indicator */
}

.step-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.step-indicator span {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ccc;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 0 5px;
}

.step-indicator span.active {
  background-color: #4caf50; /* Verde ativo */
}

.step-indicator .line {
  width: 50px;
  height: 2px;
  background-color: #ccc;
}

h2 {
  color: #333;
  margin-bottom: 20px;
  font-size: 1.8em;
}

.subtitle {
  color: #555;
  margin-bottom: 25px;
  font-size: 0.9em;
}

form {
  text-align: left;
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

.btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  margin-top: 20px; /* Espaçamento antes do botão */
  transition: background-color 0.3s ease;
}

.next-btn,
.submit-btn,
.ok-btn {
  background-color: #4caf50; /* Verde do Figma */
  color: white;
}

.next-btn:hover,
.submit-btn:hover,
.ok-btn:hover {
  background-color: #45a049;
}

/* Estilos para as telas de sucesso */
.success-card {
  padding-top: 60px; /* Mais espaço para o ícone */
  padding-bottom: 60px;
}

.success-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 25px;
}

.success-card h2 {
  font-size: 2em;
  margin-bottom: 15px;
}

.success-card p {
  color: #555;
  font-size: 1.1em;
  margin-bottom: 30px;
}

.code-inputs {
  display: flex;
  justify-content: center;
  gap: 10px; /* Espaçamento entre os inputs de código */
  margin-bottom: 30px;
}

.code-input {
  width: 50px; /* Largura para cada input de código */
  height: 50px;
  text-align: center;
  font-size: 1.5em;
  border: 2px solid #ddd;
  border-radius: 5px;
}
</style>
