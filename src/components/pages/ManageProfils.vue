<template>
    <div class="container p-4 flex flex-col items-center h-[90vh] justify-center">
        <!-- Titre -->
        <h1 class="text-3xl font-bold mb-6 text-white">
            {{ editMode ? "Gérer les Profils" : "Liste des Profils" }}
        </h1>

        <!-- Grille des cartes utilisateurs -->
        <div class="grid grid-cols-5 gap-4">
            <!-- Cartes utilisateurs -->
            <UserCard v-for="user in users" 
            :key="user.id" :user="user"
             :editMode="editMode" 
             @edit="OpenModal"
                class="max-w-xs mx-auto" />

            <!-- Bouton Ajouter un Profil -->
            <div class="flex flex-col items-center justify-center">
                <button
                    class="bg-gray-400 text-black font-bold text-5xl p-1 rounded-full h-20 w-20 flex items-center justify-center">
                    +
                </button>
                <p class="text-gray-400 pt-2">Ajouter un Profil</p>
            </div>
        </div>

        <!-- Modale -->
        <Modal v-if="isModalOpen" @close="closeModal" :data="data" class="h-screen"/>
        <!-- Bouton "Gérer les profils" -->
        <div class="mt-4">
            <button @click="toggleEditMode" class="border hover:bg-yellow-600 text-white font-bold py-2 px-4">
                {{ editMode ? "Terminer" : "Gérer les Profils" }}
            </button>
        </div>
    </div>
</template>



<script setup>

import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import UserCard from "./UserCard.vue";
import Modal from "./Modal.vue";

const router = useRouter();
const route = useRoute();

// Détecte si on est en mode édition via la route
const editMode = computed(() => route.name === "ManageProfils");

// Liste des utilisateurs
const users = ref([
    { id: 1, name: "Ad", avatar: "/images/user1.jpg" },
    { id: 2, name: "Lin", avatar: "/images/user2.jpg" },
    { id: 3, name: "Url", avatar: "/images/user3.jpg" },
    { id: 4, name: "Url", avatar: "/images/user4.jpg" },
]);

// Modal visible ou non
const isModalOpen = ref(false);
const data=ref(null)

const OpenModal = (user) => {
    isModalOpen.value = true; // Ouvre la modale
    data.value = user; // Assigne les données de l'utilisateur à data
};
const closeModal = ()=>{
    isModalOpen.value = false
    data.value= null
    
}

// Bascule entre les modes normal et édition
const toggleEditMode = () => {
    if (editMode.value) {
        router.push({ name: "Browse" });
    } else {
        router.push({ name: "ManageProfils" });
    }
    
};
   
</script>