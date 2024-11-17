<template>
    <div class="flex items-center">
      <button
        @click="toggle"
        :class="[
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
          isOn ? 'bg-blue-500' : 'bg-gray-400'
        ]"
        role="switch"
        :aria-checked="isOn"
      >
        <span
          :class="[
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
            isOn ? 'translate-x-5' : 'translate-x-0'
          ]"
        ></span>
      </button>
      <span class="ml-3 text-sm font-medium text-gray-900">
        {{ isOn ? 'On' : 'Off' }}
      </span>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isOn = ref(false)
  
  const toggle = () => {
    isOn.value = !isOn.value
  }
  </script>