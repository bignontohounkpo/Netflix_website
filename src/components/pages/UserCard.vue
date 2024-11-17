<template>
  <div class=" p-2 relative ">
    <div class="class">
      <img :src="user.avatar" :alt="user.name"
      class="w-15 h-15  mx-auto mb-2 rounded-md  border border-gray-500 hover:border-white   transition duration-300">
    <p class="text-sm font-semibold text-center">{{ user.name }}</p>
    </div>

    <button v-if="editMode" @click="edit"
      class="absolute top-12 right-12 text-white-300 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
      aria-label="Modifier l'utilisateur">
      <PencilIcon class="w-6 h-6 flex justify-center" />
    </button>
  </div>

</template>

<script setup>
import { PencilIcon } from 'lucide-vue-next'


 const {user,editMode}=defineProps({
user: {
  type: Object,
  required: true
},
editMode: {
  type: Boolean,
  default: false
}
})
const userData =user

 const emit = defineEmits(['edit'])
 const edit=()=>{
  console.log(user)
  emit("edit",user)
 }
</script>