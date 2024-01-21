<template>
  <div>    
    <div v-if="articles.content_5 !== undefined" v-html="articles.content_5"></div>
  </div>
</template>

<script lang="ts" setup>

const articles : Ref<any>= ref({});

async function loadArticles() {
   return useFetch('/api/articles');
}

onNuxtReady(async () => {
  const { data: fetchdata, refresh, error } = await loadArticles();
  if(error.value) {
    console.log(error.value);
  } else {
    articles.value = (fetchdata as any).value.data[0].attributes;
  }
  watchEffect(() => {
    refresh();
  });

})

</script>

<style scoped>

</style>