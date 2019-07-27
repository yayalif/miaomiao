<template>
  <div class="cename">
    <Header title="喵喵影院"></Header>
    <div id="content">
      <div class="cinema_menu">
        <div class="city_switch">
          全城
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="brand_swtich">
          品牌
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="feature_switch">
          特色
          <i class="iconfont icon-lower-triangle"></i>
        </div>
      </div>
      <ci-list></ci-list>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import Header from "@/components/header";
import TabBar from "@/components/TabBar";
import CiList from "@/components/CiList";

export default {
  name: "Ciname",
  components: {
    Header,
    TabBar,
    CiList
  }
};
</script>

<style scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>
