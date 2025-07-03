// src/store/clientStore.js
import { reactive } from "vue";

// ID para simular o auto-incremento
let nextId = 4; // Começamos com 4, já que temos 3 clientes mockados inicialmente

const clientStore = reactive({
  clients: [
    {
      id: 1,
      name: "João Silva",
      phone: "(11) 98765-4321",
      email: "joao.silva@example.com",
      address: {
        cep: "11111-111",
        street: "Rua A",
        number: "1",
        complement: "",
        neighborhood: "Bairro A",
        city: "Cidade A",
        state: "AA",
      },
    },
    {
      id: 2,
      name: "Maria Oliveira",
      phone: "(21) 99876-5432",
      email: "maria.oliver@example.com",
      address: {
        cep: "22222-222",
        street: "Rua B",
        number: "2",
        complement: "",
        neighborhood: "Bairro B",
        city: "Cidade B",
        state: "BB",
      },
    },
    {
      id: 3,
      name: "Carlos Souza",
      phone: "(31) 97654-3210",
      email: "carlos.souza@example.com",
      address: {
        cep: "33333-333",
        street: "Rua C",
        number: "3",
        complement: "",
        neighborhood: "Bairro C",
        city: "Cidade C",
        state: "CC",
      },
    },
  ],

  addClient(clientData) {
    const newClient = { ...clientData, id: nextId++ };
    this.clients.push(newClient);
    console.log("Cliente adicionado ao store:", newClient);
  },

  updateClient(updatedClientData) {
    const index = this.clients.findIndex((c) => c.id === updatedClientData.id);
    if (index !== -1) {
      this.clients[index] = { ...updatedClientData };
      console.log("Cliente atualizado no store:", updatedClientData);
    }
  },

  getClientById(id) {
    return this.clients.find((client) => client.id === id);
  },

  deleteClient(id) {
    this.clients = this.clients.filter((client) => client.id !== id);
    console.log("Cliente excluído do store. Nova lista:", this.clients);
  },
});

export default clientStore;
