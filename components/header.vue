<template>
  <div id="top" class="W100">
    <nav class="headerMenu W100">
      <nuxt-link class="headerLink f15" :to="$i18n.path('')" exact>
        {{ $t('links.home') }}
      </nuxt-link>
      <nuxt-link class="headerLink f15" :to="$i18n.path('about')" exact>
        {{ $t('links.about') }}
      </nuxt-link>
  
    </nav>
    <ul class="langMenu">
      <li class="langLink">
        <!-- <nuxt-link v-bind:class="{ 'active': $i18n.locale === 'en' }" :to="`/en` + $route.fullPath" active-class="none" exact> -->
        <nuxt-link v-bind:class="{ 'active': $i18n.locale === 'en' }" :to="`/en`" active-class="none" exact>
  
          {{ $t('links.english') }}
        </nuxt-link>
      </li>
      <li class="langLink">
        <nuxt-link v-bind:class="{ 'active': $i18n.locale === 'tw' }" :to="`/tw`" active-class="none" exact>
          {{ $t('links.tradition') }}
        </nuxt-link>
      </li>
      <li class="langLink">
        <nuxt-link v-bind:class="{ 'active': $i18n.locale === 'cn' }" :to="`/cn`" active-class="none" replace>
          {{ $t('links.simple') }}
        </nuxt-link>
      </li>
  
    </ul>
  </div>
</template>

<script>
  export default {
  
    // mounted() {
    //   console.log(this.$store)
    // }
  }
</script>

<style>
  #top {
    position: fixed;
    height: 80px;
    border-bottom: 5px solid #f57f42;
    background: #fff;
  }
  
  .headerMenu {
    float: left;
  }
  
  .headerLink {
    font-size: 16px;
    color: #666;
    padding: 7px 12px;
    margin-left: 10px;
  }
  
  .headerLink:hover {
    color: #2e2f30;
    background-color: #fff;
  }
  
  .nuxt-link-active {
    /* color: cyan; */
  }
  
  h1 {
    color: green;
  }
  
  ul.langMenu {
    background: #f57f42;
    position: absolute;
    right: -20px;
    display: inline-block;
    height: 35px;
    padding: 0 35px 0 20px;
    transform: skewX(30deg);
  }
  
  ul.langMenu li {
    float: left;
    line-height: 35px;
    transform: skewX(-30deg);
  }
  
  ul.langMenu li a {
    color: #fff;
    line-height: 1;
    padding: 0 5px;
    margin: 0 5px;
    font-size: 12px;
    line-height: 35px;
    display: inline-block;
  }
  
  ul.langMenu li a.active {
    color: #999;
    cursor: default;
  }
</style>

