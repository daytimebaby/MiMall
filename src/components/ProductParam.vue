<template>
  <div class="nav-bar" :class="{ 'is_fixed': isFixed }">
    <div class="container">
      <div class="pro-title">
        小米8
      </div>
      <div class="pro-param">
        <a href="javascript:;">概述</a><span>｜</span>
        <a href="javascript:;">参数</a><span>｜</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'productParam',
  data() {
    return {
      isFixed: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
  },
  methods: {
    initHeight() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.isFixed = scrollTop >= 152 ? true : false;
    }
  },
  destroyed() {
    window.removeEventListener('scroll',this.initHeight)
  },
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';

.nav-bar {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid $colorH;
  background-color: $colorG;
  z-index: 9;
  &.is_fixed {
    width: 100%;
    position: fixed;
    top: 0;
    box-shadow: 0px 5px 5px $colorE;
  }

  .container {
    @include flex();

    .pro-title {
      font-size: $fontH;
      color: $colorB;
      font-weight: bold;

    }

    .pro-param {
      font-size: $fontJ;

      span {
        margin: 0px 10px;
      }

      a {
        color: $colorC;

      }

      color:$colorC;
      font-weight: bold;

    }
  }
}
</style>