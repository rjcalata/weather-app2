<template>
  <div>
    <div
      class="bg-gray-600 p4 flex justify-content-center align-items-center h-5rem text-3xl"
    >
      <a
        class="p-2"
        href="https://www.facebook.com/groundgurus"
        target="_blank"
      >
        <i class="fab fa-facebook"></i>
      </a>
      <a
        class="p-2"
        href="https://www.instagram.com/groundgurus/"
        target="_blank"
      >
        <i class="fab fa-instagram"></i>
      </a>
      <a
        class="p-2"
        href="https://www.youtube.com/channel/UC6smZWj3DaIXxp53sFe_56A"
        target="_blank"
      >
        <i class="fab fa-youtube"></i>
      </a>
      <a
        class="p-2"
        href="https://gitlab.com/ground-gurus-training"
        target="_blank"
      >
        <i class="fab fa-gitlab"></i>
      </a>
    </div>
    <div
      class="bg-gray-800 p-4 flex flex-column lg:flex-row justify-content-between align-items-center"
    >
      <div class="pb-2 lg:pb-0">
        <router-link
          class="font-medium text-200 no-underline cursor-pointer hover:text-0 pr-2"
          :to="{ name: 'home' }"
        >
          Home
        </router-link>
        <router-link
          class="font-medium text-200 no-underline cursor-pointer hover:text-0"
          :to="{ name: 'about' }"
        >
          About
        </router-link>
      </div>
      <div class="font-medium text-100">&copy; 2022 Copyright Ground Gurus</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
.fab {
  color: var(--surface-200);
}
</style>
