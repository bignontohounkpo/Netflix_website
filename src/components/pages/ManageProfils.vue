<template>
    <div>
        <div class="container p-4 flex flex-col items-center h-[90vh] justify-center">
            <!-- Titre -->
            <h1 class="text-3xl font-bold mb-6 flex justify-center text-white">
                {{ editMode ? "Modifier les profils" : "Qui est-ce ?" }}
            </h1>
    
            <!-- Grille des cartes utilisateurs -->
            <div class="grid grid-cols-5 gap-4">
                <UserCard
                    v-for="user in users"
                    :key="user.id"
                    :user="user"
                    :editMode="editMode"
                    @edit="editUser"
                    class="max-w-xs mx-auto"
                />
                <!-- Bouton Ajouter un Profil -->
                <div class="flex flex-col items-center justify-center">
                    <button
                        @click="addNewUser"
                        class="bg-gray-400 text-black font-bold text-5xl p-1 rounded-full h-20 w-20 flex items-center justify-center"
                    >
                        +
                    </button>
                    <p class="text-gray-400 pt-2">Ajouter un Profil</p>
                </div>
            </div>
    
            <!-- Bouton "Gérer les profils" -->
            <div class="flex justify-center mt-4">
                <button @click="toggleEditMode " class="border hover:bg-yellow-600 text-white font-bold py-2 px-4">
                    {{ editMode ? "Terminer" : "Gérer les profils" }}
                </button>
            </div>
        </div>
    </div>
    </template>
    <script>
    const isModalOpen = ref(false);
    // Enregistre un nouveau profil (simulation)
const saveProfile = () => {
    isModalOpen.value = false; // Ferme la modal
};
 </script>
    