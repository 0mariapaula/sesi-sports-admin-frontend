<template>
  <div class="client-form">
    <h1>{{ isEditMode ? "Editar Cliente" : "Novo Cliente" }}</h1>
    <p>Aqui virá o formulário de cadastro/edição de clientes.</p>
    <form @submit.prevent="handleSubmit">
      <h2>Dados Pessoais</h2>
      <label for="name">Nome Completo*</label>
      <input type="text" id="name" v-model="client.name" required />

      <label for="phone">Telefone*</label>
      <input
        type="tel"
        id="phone"
        v-model="client.phone"
        required
        placeholder="(99) 99999-9999"
      />

      <label for="cpf">CPF*</label>
      <input
        type="text"
        id="cpf"
        v-model="client.cpf"
        required
        placeholder="999.999.999-99"
      />

      <label for="email">E-mail*</label>
      <input
        type="email"
        id="email"
        v-model="client.email"
        required
        placeholder="exemplo@email.com"
      />

      <h2>Endereço*</h2>
      <label for="cep">CEP*</label>
      <input
        type="text"
        id="cep"
        v-model="client.address.cep"
        @blur="fetchAddressByCep"
        required
        placeholder="99999-999"
      />

      <label for="street">Logradouro*</label>
      <input type="text" id="street" v-model="client.address.street" required />

      <label for="number">Número*</label>
      <input type="text" id="number" v-model="client.address.number" required />

      <label for="complement">Complemento</label>
      <input type="text" id="complement" v-model="client.address.complement" />

      <label for="neighborhood">Bairro*</label>
      <input
        type="text"
        id="neighborhood"
        v-model="client.address.neighborhood"
        required
      />

      <label for="city">Cidade*</label>
      <input type="text" id="city" v-model="client.address.city" required />

      <label for="state">Estado*</label>
      <input type="text" id="state" v-model="client.address.state" required />

      <button
        type="submit"
        style="
          padding: 10px 20px;
          background-color: #008cba;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 20px;
        "
      >
        Salvar
      </button>
      <router-link to="/admin/clients">
        <button
          type="button"
          style="
            padding: 10px 20px;
            background-color: #f44336;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-left: 10px;
          "
        >
          Cancelar
        </button>
      </router-link>
    </form>
  </div>
</template>

<script>
import clientStore from "../store/clientStore"; // Importa o store

export default {
  name: "ClientForm",
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isEditMode: false,
      client: {
        name: "",
        phone: "",
        cpf: "",
        email: "",
        address: {
          cep: "",
          street: "",
          number: "",
          complement: "",
          neighborhood: "",
          city: "",
          state: "",
        },
      },
    };
  },
  created() {
    if (this.id) {
      this.isEditMode = true;
      console.log(`Modo de Edição para o cliente ID: ${this.id}`);
      // Busca o cliente real do store
      const existingClient = clientStore.getClientById(parseInt(this.id));
      if (existingClient) {
        // Usa uma cópia do objeto para evitar mutação direta do store antes de salvar
        this.client = JSON.parse(JSON.stringify(existingClient));
      } else {
        alert("Cliente não encontrado para edição.");
        this.$router.push("/admin/clients"); // Redireciona se não encontrar
      }
    }
  },
  methods: {
    handleSubmit() {
      if (this.isEditMode) {
        clientStore.updateClient(this.client); // Atualiza no store
        alert("Cliente editado com sucesso (simulado)!");
      } else {
        clientStore.addClient(this.client); // Adiciona ao store
        alert("Novo cliente cadastrado com sucesso (simulado)!");
      }
      this.$router.push("/admin/clients");
    },
    async fetchAddressByCep() {
      if (this.client.address.cep.replace(/\D/g, "").length === 8) {
        console.log("Buscando CEP:", this.client.address.cep);
        try {
          // SIMULAÇÃO DE RESPOSTA DO VIA CEP
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
            this.client.address.street = data.logradouro;
            this.client.address.neighborhood = data.bairro;
            this.client.address.city = data.localidade;
            this.client.address.state = data.uf;
            alert("Endereço preenchido automaticamente!");
          } else {
            alert("CEP não encontrado ou formato inválido.");
            this.clearAddressFields();
          }
        } catch (error) {
          console.error("Erro ao buscar CEP:", error);
          alert("Erro ao buscar CEP. Tente novamente.");
          this.clearAddressFields();
        }
      }
    },
    clearAddressFields() {
      this.client.address.street = "";
      this.client.address.number = "";
      this.client.address.complement = "";
      this.client.address.neighborhood = "";
      this.client.address.city = "";
      this.client.address.state = "";
    },
  },
};
</script>

<style scoped>
.client-form {
  padding: 20px;
  text-align: center;
}
form {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}
h2 {
  margin-top: 30px;
  margin-bottom: 15px;
  color: #333;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}
input {
  width: calc(100% - 22px);
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
