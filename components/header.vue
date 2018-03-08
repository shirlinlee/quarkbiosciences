<template>
  <div class="VueToNuxtLogo">
    <nav class="Header__Menu">
        <nuxt-link class="Header__Link" :to="$i18n.path('')" exact>
          {{ $t('links.home') }}
        </nuxt-link>
        <nuxt-link class="Header__Link" :to="$i18n.path('about')" exact>
          {{ $t('links.about') }}
        </nuxt-link>
        <nuxt-link class="Header__Link" v-if="$i18n.locale === 'en'" :to="`/fr` + $route.fullPath" active-class="none" exact>
          {{ $t('links.french') }}
        </nuxt-link>
        <nuxt-link class="Header__Link" v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact>
          {{ $t('links.english') }}
        </nuxt-link>
      </nav>
  </div>
  
</template>

<style>
  .Header__Menu {
    float: right;
  }
  .Header__Link {
    font-size: 16px;
    color: #fff;
    border: 1px solid #fff;
    padding: 7px 12px;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 5px;
    margin-left: 10px;
  }
  .Header__Link:hover {
    color: #2e2f30;
    background-color: #fff;
  }
  .nuxt-link-active {
    color: cyan;
  }
  .Content {
    padding: 50px 0;
    text-align: center;
  }
  .Content__Title {
    font-weight: 300;
    padding-bottom: 30px;
  }
  
</style>
