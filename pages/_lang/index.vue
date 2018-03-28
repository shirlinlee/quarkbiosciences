<template>
  <transition name="fade">
    <div id="kv">
      <div class="container f_white W50">
        <h1 class="title f55" v-html="$t('home.kv_title')">{{ $t('home.kv_title') }}</h1>
        <h3 class="kv_des f15">{{ $t('home.kv_des') }}</h3>
        <!-- <img v-bind:src="imgPc" v-bind:alt="$t('home.kv_title')" width="100%"> -->
      </div>
      <div class="kv_slide">
          <img v-for="(kv_slide,index) in kv_slides" :src="kv_slide" :key="`kv_slide_${index}`"/>
      </div>
    </div>
  </transition>
</template>

<script>
  // import $ from "jquery"
  // import slick from 'slick-carousel'
  // import 'slick-carousel'
  
  export default {
    name: 'index',
    async fetch({
      app,
      store
    }) {
      await store.dispatch('GET_DATA')
    },
    data() {
      const storeData = this.$store.state;
      return {
        imgMb: storeData[storeData.locale].mobile,
        imgPc: storeData[storeData.locale].desktop,
        imgDefault: 'http://www.bomb01.com/upload/news/original/a29af7ee95d9cf379049b44016d1cd4f.jpg',
        kv_slides:[
          '~assets/images/kv_01.jpg',
          '~assets/images/kv_02.jpg'
          ]
      }
    },
    head() {
      return {
        title: this.$t('home.kv_title')
      }
    },
    mounted: function() {
      // console.log(this.$store.state.locale)
      this.$nextTick(function() {

      })
      
      // $(".kv_slide").slick({
      //     initialSlide:0,
      //     dots: true,
      //     autoplay: true,
      //     // autoplay: false,
      //     autoplaySpeed: 4000,
      //     infinite: true,
      //     speed: 800,
      //     vertical:true,
      //     arrows: false,
      //     pauseOnHover:true,
      //     pauseOnDotsHover:false,
      //     verticalSwiping:true,
      //     appendDots:'.work',
      //     responsive: [{
      //         breakpoint: 1100,
      //         settings: {
      //           vertical:false,
      //           verticalSwiping:false,
      //         }
      //       }]
      //   });
    }
  
  
  }
</script>

<style>
  #kv {
      padding-top: 80px;
  }
  #kv h1{
      white-space: nowrap;
      padding-bottom: 15px;
  }
  #kv .container{
      padding-left: 25px;

  }
  .kv_des{

  }
</style>


