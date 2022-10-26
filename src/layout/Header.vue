<template>
  <div class="bg-blue-900 p-4">
    <div
      class="flex align-items-start flex-column lg:justify-content-between lg:flex-row"
    >
      <div class="font-medium text-3xl text-0">
        <i class="fas fa-cloud"></i>
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      title: 'Weather App',
    }
  },
}
</script>

<style scoped></style>
