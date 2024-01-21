<template>
  <div class="grid">
    <Card v-for="item in items" :key="item.id" :item="item"  :image="item.image" :title="item.title" :subhead="item.subhead"/>
  </div>
</template>

<script setup lang="ts">

async function loadArticles() {
   return useFetch('/api/articles');
}

const items = [
  { id: 1, image: 'path/to/image1.jpg', title: 'Card 1', subhead: 'Subhead 1' },
  { id: 2, image: 'path/to/image2.jpg', title: 'Card 2', subhead: 'Subhead 2' },
  { id: 3, image: 'path/to/image3.jpg', title: 'Card 3', subhead: 'Subhead 3' },
  // Add more items as needed
]

</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
</style>
