<template>
    <div class="container p-4 flex flex-col items-center h-[90vh] justify-center">
        <!-- Titre -->
        <h1 class="text-3xl font-bold mb-6 text-white">
            {{ editMode ? "Gérer les Profils" : "Liste des Profils" }}
        </h1>

        <!-- Grille des cartes utilisateurs -->
        <div class="grid grid-cols-5 gap-4">
            <!-- Cartes utilisateurs -->
            <UserCard v-for="user in users" :key="user.id" :user="user" :editMode="editMode" @edit="editUser"
                class="max-w-xs mx-auto" />

            <!-- Bouton Ajouter un Profil -->
            <div class="flex flex-col items-center justify-center">
                <button @click="isModalOpen = true"
                    class="bg-gray-400 text-black font-bold text-5xl p-1 rounded-full h-20 w-20 flex items-center justify-center">
                    +
                </button>
                <p class="text-gray-400 pt-2">Ajouter un Profil</p>
            </div>
        </div>

        <!-- Modale -->
        <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-[#161616] p-10 rounded-sm shadow-lg w-[40%]  mx-auto border border-gray-100 relative ">
        <!-- Bouton "X" -->
        <button
            class="absolute top-2 right-2 text-white-400 hover:text-gray text-2xl font-bold"
            @click="isModalOpen = false"
        >
            &times;
        </button>

        <h2 class="font-bold text-2xl mb-4 text-center text-white">Ajouter un profil</h2>
        <p class="mb-4 text-white">Ajouter un profil pour un nouvel utilisateur Netflix</p>

        <div class="flex gap-4 items-center mb-4">
            <img src="/images/user5.jpg" alt="profil" class="w-14 h-14 " />
                <input
                    type="text"
                    placeholder="Nom"
                    class="w-full border bg-[#161616] border-gray-300 p-2 rounded"
                />
        </div>

        <hr class="mb-4 text-gray-100" />

        <div class="flex items-center mb-4 gap-5">
            <div class="flex-1">
                <h3 class="font-bold text-white">Profil Jeunesse</h3>
                <p class="text-sm text-gray-400">
                    N'affiche que les séries et films adaptés aux enfants
                </p>
            </div>
            <div
                class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
            >
                <input
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-gray-500 border-4 appearance-none cursor-pointer"
                />
                <label
                    for="toggle"
                    class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
            </div>
        </div>

        <button class="bg-white text-black fw-bold py-2 px-4 rounded w-full" @click="saveProfile">
            Enregistrer
        </button>

        <div class="flex gap-4">
            <button class="text-white py-2 px-4 rounded w-full" @click="isModalOpen = false">
                Annuler
            </button>
        </div>
    </div>
</div>


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

// Bascule entre les modes normal et édition
const toggleEditMode = () => {
    if (editMode.value) {
        router.push({ name: "Browse" });
    } else {
        router.push({ name: "ManageProfils" });
    }
};

// Fonction appelée lors de l'édition d'un utilisateur
const editUser = (userId) => {
    router.push(`/user/${userId}`);
};

// Enregistre un nouveau profil (simulation)
const saveProfile = () => {
    isModalOpen.value = false; // Ferme la modal
};
</script>
