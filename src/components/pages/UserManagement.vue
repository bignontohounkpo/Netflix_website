<template>
<div class="">
    <div class="container p-4 flex flex-col items-center h-[90vh] justify-center">
        <!-- Titre centré -->
        <h1 class="text-3xl font-bold mb-6 flex justify-center text-white">Qui est-ce ?</h1>

        <!-- Grille des cartes utilisateurs et du bouton Ajouter un Profil -->
        <div class="grid grid-cols-5 gap-4">
            <!-- Cartes utilisateurs -->
            <UserCard v-for="user in users" :key="user.id" :user="user" :editMode="editMode" @edit="editUser"
                class="max-w-xs mx-auto" />

            <!-- Bouton ajouter un profil centré -->
            <div class="flex flex-col items-center justify-center">
                <button @click="addNewUser"
                    class="bg-gray-400 text-black font-bold text-5xl p-1 rounded-full h-20 w-20 flex items-center justify-center">
                    +
                </button>
                <p class="text-gray-400 pt-2">Ajouter un Profil</p>
            </div>
        </div>

        <!-- Bouton "Gérer les profils" centré -->
        <div class="flex justify-center mt-4">
            <button @click="toggleEditMode" class="border hover:bg-yellow-600 text-white font-bold py-2 px-4 ">
                {{ editMode ? "Terminer" : "Gérer les profils" }}
            </button>
        </div>
    </div>
</div>


</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import UserCard from "./UserCard.vue";

const router = useRouter();
const editMode = ref(false);

const users = ref([
    {
        id: 1,
        name: "Ad",
        avatar: "/images/user1.jpg"
    },
    {
        id: 2,
        name: "Lin",
        avatar: "/images/user2.jpg"
    },
    {
        id: 3,
        name: "Url",
        avatar: "/images/user3.jpg"
    },
    {
        id: 4,
        name: "Url",
        avatar: "/images/user4.jpg"
    },

    // { id: 3, name: 'Charlie Leclerc', avatar: '/placeholder.svg?height=100&width=100' },
]);

const toggleEditMode = () => {
    editMode.value = !editMode.value;
};

const editUser = (userId) => {
    router.push(`/user/${userId}`);
};

const addNewUser = () => {
    router.push("/user/new");
};
</script>
