<template>
    <div class="modal ">
        <div class=" bg-[#161616] p-10 rounded-sm shadow-lg max-w-4xl mx-auto">
            <h2 class="text-white text-6xl fw-bold">Modifier le Profil</h2>
            <div class="border-1 border-t border-white w-full"></div>
            <div class="flex mt-4 gap-x-4">
                <div class="w-3/12">
                    <img :src="data.avatar" alt="avatar " class=" w-full h-40">
                </div>
                <div class="w-3/4">
                    <input class="bg-[#666666] border text-white outline-none w-full mb-4 p-2" type="text"
                        :value="data.name">
                    <div class="mt-2">
                        <label for="langue" class="text-lg">Langue</label> <br>
                        <select class="bg-[#161616]  border p-1 border-1 border-white" id="langue">
                            <option value="">-- Choisir une Langue --</option>
                            <option v-for="(langue, index) in langues" :key="index" :value="langue">
                                {{ langue }}
                            </option>
                        </select>
                    </div>
                    <h4 class="text-lg mt-5 mb-2">Alias:</h4>
                    <p class="">Votre alias est un identifiant unique qui sera utilisé lorsque vous jouerez aux jeux
                        Netflix avec d'autres abonnés. En savoir plus</p>
                    <div class="mt-2 w-full p-2 bg-[#666666] text-lg">
                        Créer un alias
                    </div>
                     <div class="  border-b  border-1 border-white">
                        <!-- <label for="alias"></label> -->
                         <input id="alias" type="text" class="outline-none border-none w-full bg-transparent  p-2">
                    </div> 
                     <h3 class="text-white text-xl mt-3 mb-3">Categories d'age:</h3> 
                     <button class="fw-semibold p-2 bg-[#666666]">Tout les âges </button>
                     <p class=" mt-3 mb-2">Proposer les titres pour tous les ages à ce profil</p>
                     <button class=" bg-[#161616] border border-white text-xl p-2 pt-2 " > Modifier</button>
                     <div class="  border-b  border-1 border-white">
                        <!-- <label for="alias"></label> -->
                         <input id="alias" type="text" class="outline-none border-none w-full bg-transparent  p-2">
                    </div>
                    <p class=" mt-3 mb-2">Commandes de lecture automatique</p>
                    <div class=" flex gap-3 mb-3">
                        <input type="checkbox ">
                        <p>Lecture automatique de l'episode suivante d'une serie sur tous les appareils</p>
                    </div>
                    <div class=" flex gap-3 mb-3">
                        <input type="checkbox">
                        <p>Lecture automatique de l'episode suivante d'une serie sur tous les appareils</p>
                    </div>
                    <div class="flex gap-4">
                        <button class="bg-white" > Enregistrer</button>
                        <button class="bg-white" >Annuler</button>

                    </div>

                </div>
            </div>

            <button class=" text-white" @click="$emit('close')">Fermer</button>

        </div>
    </div>
</template>

<script setup>

defineEmits(['close'])

const { data } = defineProps([
    'data'
])
const langues = ["Français", "Anglais", "Arabe",]
console.log(data)

</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    background: #161616;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
}
</style>