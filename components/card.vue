<template>
  <div class="card">
    <img :src="image" alt="Card Image" class="card-image" />
    <h2 class="card-title">{{ title }}</h2>
    <p class="card-subhead">{{ subhead }}</p>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subhead: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
}

.card-image {
  width: 100%;
  height: auto;
  margin-bottom: 8px;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
}

.card-subhead {
  font-size: 14px;
  color: #666;
}
</style>
