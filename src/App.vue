<script setup lang="ts">
import { useRequest } from 'alova'
import { mockApi } from '@/api'

const { data } = useRequest(mockApi)
</script>

<template>
  <div>{{ data?.toString() }} huskey</div>
  <p class="text-10">
    <span class="i-custom:camera" /><span>123</span>
  </p>
  <router-view />
</template>

<style scoped>

</style>
