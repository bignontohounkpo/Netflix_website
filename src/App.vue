<script setup>
import Management from './components/pages/management.vue'
</script>

<template>
  <div class="bg-black text-white ">
    <Management />
  </div>
  <main class="container mx-auto py-6">
      <router-view></router-view>
    </main>
</template>
