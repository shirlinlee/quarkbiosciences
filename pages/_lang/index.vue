<template>
  <div class="kv">
    <div class="container">
      <h1 class="title">{{ $t('home.title') }}</h1>
      <p>{{ $t('home.introduction') }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  async fetch({app,store}) {
    await store.dispatch('GET_DATA')
  },
  head() {
    return { title: this.$t('home.title') }
  },
  
  // asyncData ({ params }) {
  //     return axios.get(`http://219.87.143.101/API/Location/`)
  //     .then((res) => {
  //       return { testMsg: res.data }
  //     })
  //  },
  
}
</script>
<style>
.kv{
  padding-top: 80px;
}
</style>


