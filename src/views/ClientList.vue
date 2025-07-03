<template>
  <div class="client-list">
    <h1>Lista de Clientes (Painel Administrativo)</h1>
    <p>Aqui virá a tabela de clientes com opções de CRUD.</p>
    <router-link to="/admin/clients/new" class="new-client-button-link">
      <button class="new-client-button">Novo Cliente</button>
    </router-link>

    <table class="clients-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Telefone</th>
          <th>E-mail</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in clientStore.clients" :key="client.id">
          <td>{{ client.id }}</td>
          <td>{{ client.name }}</td>
          <td>{{ client.phone }}</td>
          <td>{{ client.email }}</td>
          <td>
            <button
              @click="editClient(client.id)"
              class="action-button edit-button"
            >
              Editar
            </button>
            <button
              @click="confirmDeleteClient(client.id)"
              class="action-button delete-button"
            >
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import clientStore from "../store/clientStore"; // Importa o store

export default {
  name: "ClientList",
  // Remova a propriedade 'data' que atribuía 'clients: clientStore.clients'
  // Pois vamos acessar diretamente no template.
  setup() {
    // Usando Composition API para expor o store diretamente
    return {
      clientStore, // Torna o clientStore disponível no template
    };
  },
  methods: {
    editClient(id) {
      console.log("Editar cliente com ID:", id);
      this.$router.push(`/admin/clients/edit/${id}`);
    },
    confirmDeleteClient(id) {
      if (confirm(`Tem certeza que deseja excluir o cliente com ID ${id}?`)) {
        clientStore.deleteClient(id); // Chama o método de exclusão do store
        alert(`Cliente com ID ${id} excluído!`);
      }
    },
  },
};
</script>

<style scoped>
/* (Seu CSS permanece o mesmo) */
.client-list {
  padding: 20px;
  text-align: center;
}

.new-client-button-link {
  display: inline-block;
  margin-bottom: 20px;
}

.new-client-button {
  padding: 10px 20px;
  background-color: #4caf50; /* Verde */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.new-client-button:hover {
  background-color: #45a049; /* Verde mais escuro no hover */
}

.clients-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.clients-table th,
.clients-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.clients-table th {
  background-color: #f2f2f2;
  font-weight: bold;
  color: #333;
}

.clients-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.clients-table tr:hover {
  background-color: #f1f1f1;
}

.action-button {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 5px;
  transition: background-color 0.3s ease;
}

.edit-button {
  background-color: #008cba; /* Azul */
  color: white;
}

.edit-button:hover {
  background-color: #007bb5;
}

.delete-button {
  background-color: #f44336; /* Vermelho */
  color: white;
}

.delete-button:hover {
  background-color: #da190b;
}
</style>
