<template>
  <transition name="fade">
    <div class="about">
      <div class="container">
        <h1 class="Content__Title">{{ $t('about.title') }}</h1>
        <p>{{ $t('about.introduction') }}</p>
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
        
    }
  },
  head() {
    return { title: this.$t('about.title') }
  }
}
</script>
<style>
  .about{
    padding-top: 80px;
  }
</style>

