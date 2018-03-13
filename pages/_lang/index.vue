<template>
  <transition name="fade">
    <div class="kv">
      <div class="container">
        <h1 class="title">{{ $t('home.title') }}</h1>
        <p>{{ $t('home.introduction') }}</p>
        <img v-bind:src="imgPc" v-bind:alt="$t('home.title')" width="100%">
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'index',
  async fetch({app,store}) {
    await store.dispatch('GET_DATA')
  },
  data () {
    const storeData = this.$store.state;
    return {
        imgMb: storeData[storeData.locale].mobile,
        imgPc: storeData[storeData.locale].desktop,
        imgDefault:'http://www.bomb01.com/upload/news/original/a29af7ee95d9cf379049b44016d1cd4f.jpg'
    }
  },
  head() {
    return { 
      title: this.$t('home.title') 
    }
  },
  mounted: function () {
    // console.log(this.$store.state)
    this.$nextTick(function () {
    })
  }

  
}
</script>
<style>
.kv{
  padding-top: 80px;
}
</style>


