<template>
  <div>
    <NuxtLayout>
      <Navbar nav={nav} />
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
//https://cdn.ckeditor.com/ckeditor5/40.2.0/decoupled-document/ckeditor.js
const router = useRouter()

const nav = [
  { label: 'Home', to: '/', submenu: []},
  { label: 'About', to: '/about', submenu: []},
  { label: 'Contact', to: '/contact', submenu: []},
  { label: 'Portfolio', to: '/portfolio', submenu: [
    { label: 'Green Thermique', to: '/portfolio/greenthermique', submenu: []},
    { label: 'CaribFood Restaurant', to: '/portfolio/caribfood', submenu: [] },
    { label: 'Paw Patrol', to: '/portfolio/pawpatrol', submenu: [] },
  ]},
  { label: 'Keyed child', onClick: () => router.push(`/parent/reload-${(Math.random() * 100).toFixed()}`) },
  { label: 'Non-Keyed child', onClick: () => router.push(`/parent/static-${(Math.random() * 100).toFixed()}`) },
]
</script>


<style scoped>

</style>