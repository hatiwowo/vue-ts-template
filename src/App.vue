<script setup lang="ts">
import { useRequest } from 'alova'
import { mockApi } from '@/api'

const { data } = useRequest(mockApi)
</script>

<template>
  <div>{{ data?.toString() }}</div>
  <router-view />
</template>

<style scoped>

</style>
