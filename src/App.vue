<script setup lang="ts">
import { useRequest } from 'alova'
import { defineComponent, h } from 'vue'
import { mockApi } from '@/api'

const { data } = useRequest(mockApi)
const comp = defineComponent({
  render() {
    return h('span', null, { default: () => 'vnode' })
  },
})
</script>

<template>
  <div>{{ data?.toString() }} huskey</div>
  <p class="text-10">
    <span class="i-custom:camera" /><span>123</span>
  </p>
  <comp />
  <router-view />
</template>

<style scoped>

</style>
