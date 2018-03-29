<template>
  <transition name="fade">
    <div id="index">
      <div id="kv">
        <div class="kv_slide W100">
            <div class="kv_slide_item" v-for="(kv_slide,index) in $t('home.kv_slides')" :key="`kv_slide_${index}`">
              <img :src="kv_slide.imgPath" width="100%"/>
              <div class="kv_text f_white W50 poA">
                <h1 class="title f55" v-html="kv_slide.title">{{ kv_slide.title }}</h1>
                <h3 class="kv_des f15">{{ kv_slide.des }}</h3>
              </div>
            </div>
        </div>
      </div>
       <!-- kv -->
      <div id="home_intro">
          <h4 class="title_sec">What We Do</h4>
          <p class="f_grey f15 W1120 t_left">
            Gene expression profiles have played important roles in the guidance of treatment. PanelChip™, a multi-gene expression analysis platform, provides a clinical-friendly solution to validate RNA classifiers. From translational research to clinical studies, we provide an unparalleled tool that is faster, simpler and more economical.
            <img src="/images/index_bg_02.png" class="poA" width="80%" alt="">
          </p>
          
          <a href="#" class="btn"><span class="f_grey">Discover</span><span class="f_orange">PanelChips™</span></a>
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
        
      }
    },
    head() {
      return {
        // title: this.kv_slide.des
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
      height: 100vh;
      overflow: hidden;
  }
  #kv h1{
      white-space: nowrap;
      padding-bottom: 15px;
  }
  .kv_slide_item{
      position: relative;
  }

  .kv_text {
      top: 50%;
      left: 5%;
      margin-top: -110px;
  }
  .kv_des{

  }
  #home_intro{
    padding: 70px 0;
    text-align: center;
    background-image: url(/images/index_bg_01.png);
    background-repeat: repeat-x;
    /* background-size: contain; */
    margin-top: -22vh;
    z-index: 50;
    position: relative;
    overflow: visible;
  }
  #home_intro:after{
      content: "";
      display: block;
      width: 60%;
      height: 100%;
      transform: skewX(50deg);
      opacity: 0.75;
      background-color: #f57f42; 
  }
  #home_intro p{
    padding-bottom: 20px;
  }
   #home_intro img{
     bottom: 0;
     left: 10%;
   }
</style>


