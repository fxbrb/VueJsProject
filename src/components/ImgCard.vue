<template>
  <div class="hello">

  <b-card
    :title="title"
    :img-src="img"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-button href="#" variant="primary">En savoir plus</b-button>
  </b-card>
</div>
</template>

<script>
export default {
  name: 'ImgCard',
  props: {
        img: String,
        title: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello{
  margin: 20px;
}


</style>
