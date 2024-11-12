<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-6">Ajouter un utilisateur</h1>
      <form @submit.prevent="addUser" class="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nom</label>
          <input v-model="newUser.name" id="name" type="text" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input v-model="newUser.email" id="email" type="email" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label for="avatar" class="block text-gray-700 text-sm font-bold mb-2">Avatar URL</label>
          <input v-model="newUser.avatar" id="avatar" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="flex items-center justify-between">
          <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Ajouter
          </button>
          <button @click="goBack" type="button" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Annuler
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const newUser = ref({
    name: '',
    email: '',
    avatar: '/placeholder.svg?height=100&width=100'
  })
  
  const addUser = () => {
    // Ici, vous feriez un appel API pour ajouter le nouvel utilisateur
    console.log('Ajout d\'un nouvel utilisateur:', newUser.value)
    goBack()
  }
  
  const goBack = () => {
    router.push('/')
  }
  </script>