<template>
  <div>
    <iframe width="560" height="315" referrerpolicy="origin-when-cross-origin" src="https://www.youtube.com/embed/lI-HcSv-3CY?si=H8psV9bm9b8k9VNm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div v-if="articles.content_5 !== undefined" v-html="articles.content_5"></div>
  </div>
</template>

<script lang="ts" setup>
const articles : Ref<any>= ref({});
const routes = useRoute();

async function loadArticles() {
   return useFetch('/api/article/'+routes.params.id[0]);
}

onNuxtReady(async () => {
  const { data: fetchdata, refresh, error } = await loadArticles();
  if(error.value) {
      useToast().error("Bad request");
  } else {
    if((fetchdata as any).value.data.length == 0) {
      articles.value = {};
      useToast().info("No data found");
    } else {
      console.log((fetchdata as any).value.data[0].attributes);
      articles.value = (fetchdata as any).value.data[0].attributes;
    }
  }

  watchEffect(() => {
    refresh();
  });

})

</script>

<style scoped>

</style>