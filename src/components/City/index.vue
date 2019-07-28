<template>
  <div class="city_body">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="clearfix" v-for="(item,index) in hotList" :key="index">
          <li>{{ item.nm }}</li>
        </ul>
      </div>
      <div class="city_sort" ref="city_sort">
        <div v-for="( item,index ) in citiList" :key="index">
          <h2>{{ item.index }}</h2>
          <ul v-for="(list,key) in item.list" :key="key">
            <li>{{ list.nm }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="city_index">
      <ul>
        <li
          @touchstart="handleToIndex(index)"
          v-for="( item,index ) in citiList"
          :key="index"
        >{{ item.index }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { debuglog } from "util";
export default {
  name: "city",
  data() {
    return {
      citiList: [],
      hotList: []
    };
  },
  mounted() {
    this.$axios.get("/api/cityList").then(res => {
      console.log(res);
      var msg = res.data.msg;
      if (msg === "ok") {
        var cities = res.data.data.cities;
        this.formatCityList(cities);
        console.log(this.citiList, "this.");
      }
    });
  },
  methods: {
    formatCityList(cities) {
      for (var i = 0; i < cities.length; i++) {
        var firstLetter = cities[i].py.substring(0, 1).toUpperCase();
        if (this.hasCity(this.citiList, firstLetter)) {
          for (var j = 0; j < this.citiList.length; j++) {
            if (this.citiList[j].index === firstLetter) {
              this.citiList[j].list.push({
                nm: cities[i].nm,
                id: cities[i].id
              });
              break;
            }
          }
        } else {
          this.citiList.push({
            index: firstLetter,
            list: [{ nm: cities[i].nm, id: cities[i].id }]
          });
        }
        this.citiList = this.citiList.sort((n1, n2) => {
          if (n1.index > n2.index) return 1;
          else if (n1.index < n2.index) return -1;
          else return 0;
        });
        //热门城市
        if (cities[i].isHot === 1) {
          this.hotList.push(cities[i]);
        }
      }
    },
    sort(citiList) {
      return;
    },
    hasCity(citiList, firstLetter) {
      return citiList.some((item, i) => {
        return item["index"] === firstLetter;
      });
      return false;
    },
    handleToIndex(index) {
      console.log(this.$refs.city_sort);
      var h2 = this.$refs.city_sort.getElementsByTagName("h2");
      console.log(this.$refs.city_sort.parentNode.scrollTop, "parent");
      console.log(h2[index].offsetTop);
      this.$nextTick(() => {
        // this.$refs.city_sort.parentNode.scrollTop = this.$refs.city_sort.parentNode.scrollTop
        // console.log(this.$refs.city_sort.parentNode.scrollTop)
        document.documentElement.scrollTop = h2[index].offsetTop;
        document.body.scrollTop = h2[index].offsetTop;
      });
    }
  }
};
</script>
<style scoped>
.city_body {
  margin-top: 45px;
  display: flex;
  width: 100%;
}
.city_body .city_list {
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}
.city_body .city_list::-webkit-scrollbar {
  background-color: transparent;
  width: 0;
}
.city_body .city_hot {
  margin-top: 20px;
}
.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}
.city_body .city_sort div {
  margin-top: 20px;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
  line-height: 30px;
}
.city_body .city_index {
  position: fixed;
  right: 0;
  top: 20%;
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px #e6e6e6 solid;
}
</style>
