<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-6">Détails de l'utilisateur</h1>
      <form @submit.prevent="saveUser" class="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nom</label>
          <input v-model="user.name" id="name" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input v-model="user.email" id="email" type="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label for="avatar" class="block text-gray-700 text-sm font-bold mb-2">Avatar URL</label>
          <input v-model="user.avatar" id="avatar" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="flex items-center justify-between">
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sauvegarder
          </button>
          <button @click="goBack" type="button" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Retour
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  
  const route = useRoute()
  const router = useRouter()
  
  const user = ref({
    id: null,
    name: '',
    email: '',
    avatar: ''
  })
  
  onMounted(() => {
    // Dans une vraie application, vous feriez un appel API ici
    // Pour cet exemple, nous allons simuler la récupération des données
    const userId = parseInt(route.params.id)
    user.value = {
      id: userId,
      name: `Utilisateur ${userId}`,
      email: `user${userId}@example.com`,
      avatar: `/placeholder.svg?height=100&width=100`
    }
  })
  
  const saveUser = () => {
    // Ici, vous feriez un appel API pour sauvegarder les modifications
    console.log('Sauvegarde de l\'utilisateur:', user.value)
    goBack()
  }
  
  const goBack = () => {
    router.push('/')
  }
  </script>