<template>
  <div class="page-Box">
    <div class="app-containers">
      <el-card class="box-card">
        <div>累计注册人数</div>
        <div class="number">12000</div></el-card
      >
      <el-card class="box-card">
        <div>新增用户</div>
        <div class="number">123</div></el-card
      >
      <el-card class="box-card"
        ><div>日活跃用户</div>
        <div class="number">1200</div>
        <div class="Proportion">
          <div>日环比 11%</div>
          <div>占比 11%</div>
        </div>
      </el-card>
      <el-card class="box-card"
        ><div>月活跃用户</div>
        <div class="number">123500</div>
        <div class="Proportion">
          <div>日环比 11%</div>
          <div>占比 11%</div>
        </div></el-card
      >
    </div>
    <div class="mapDesc">
      <div id="myChartChina"></div>
      <div class="mapData">
        <div>各地区设备数量排名</div>
        <div class="ranking" v-for="item in rankingData">
          <div class="rankingNumber">{{ item.ranking }}</div>
          <div class="place">{{ item.place }}</div>
          <div class="numbers">{{ item.number }}</div>
        </div>
      </div>
    </div>

    <gender :male="male" :female="female" />
    <div class="barChart">
      <bar-chart
        :chartData="barChartData"
        :className="barTitle"
        :style="barStyle"
      />
      <div class="barDesc">
        <div v-for="item in barDesc" class="barDescItem" :key="item.age">
          <div class="barCell">{{ item.age }}</div>
          <div class="barCell">{{ item.user }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "../../components/Echarts/barChart.vue";
import Gender from "../userStatistics/gender";
import MapChart from "../../components/Echarts/mapChat";
export default {
  data() {
    return {
      rankingData: [
        { ranking: 1, place: "上海", number: "20000" },
        { ranking: 2, place: "北京", number: "10000" },
        { ranking: 3, place: "南京", number: "5000" },
        { ranking: 4, place: "青岛", number: "4000" },
        { ranking: 5, place: "上海", number: "20000" },
        { ranking: 6, place: "北京", number: "10000" },
        { ranking: 7, place: "南京", number: "5000" },
        { ranking: 8, place: "青岛", number: "4000" },
        { ranking: 9, place: "南京", number: "5000" },
        { ranking: 10, place: "青岛", number: "4000" },
      ],
      // 柱状图数据
      barChartData: {
        days: [
          "0-18岁",
          "18-23岁",
          "24-30岁",
          "31-40岁",
          "41-50岁",
          "50岁以上",
        ],
        data1: [1000, 3900, 1610, 1340, 1050, 1600, 1650],
        // data2: [120, 82, 91, 154, 162, 140, 145],
      },
      barTitle: "年龄分布",
      barStyle: {
        height: "300px",
        width: "75%",
      },
      barDesc: [
        { age: "年龄段", user: "用户占比" },
        { age: "0-18岁", user: "10%" },
        { age: "18-23岁", user: "20%" },
        { age: "24-30岁", user: "34%" },
        { age: "31-40岁", user: "10%" },
        { age: "41-50岁", user: "50%" },
        { age: "50岁以上", user: "23%" },
      ],
      male: "30%",
      female: "70%",
    };
  },
  components: {
    BarChart,
    Gender,
  },
  mounted() {
    this.drawLine();
  },
  created() {},
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChartContainer = document.getElementById("myChartChina");
      var resizeMyChartContainer = function () {
        myChartContainer.style.width = document.body.offsetWidth / 2 + "px"; //页面一半的大小
      };
      resizeMyChartContainer();
      var myChartChina = this.$echarts.init(myChartContainer);

      function randomData() {
        return Math.round(Math.random() * 500);
      }
      // 绘制图表
      var optionMap = {
        tooltip: {},
        legend: {
          orient: "vertical",
          left: "left",
          data: [""],
        },
        // visualMap: {
        //   min: 0,
        //   max: 1500,
        //   left: "10%",
        //   top: "bottom",
        //   text: ["高", "低"],
        //   calculable: true,
        //   color: ["#0b50b9", "#c3e2f4"],
        // },
        selectedMode: "single",
        series: [
          {
            name: "",
            type: "map",
            mapType: "china",
            itemStyle: {
              normal: {
                borderColor: "rgba(0, 0, 0, 0.2)",
              },
              emphasis: {
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            showLegendSymbol: true,
            label: {
              normal: {
                show: true,
              },
              emphasis: {
                show: true,
              },
            },
            data: [
              { name: "北京", value: randomData() },
              { name: "天津", value: randomData() },
              { name: "上海", value: randomData() },
              { name: "重庆", value: randomData() },
              { name: "河北", value: randomData() },
              { name: "河南", value: randomData() },
              { name: "云南", value: randomData() },
              { name: "辽宁", value: randomData() },
              { name: "黑龙江", value: randomData()},
              { name: "湖南", value: randomData() },
              { name: "安徽", value: randomData() },
              { name: "山东", value: randomData() },
              { name: "新疆", value: randomData() },
              { name: "江苏", value: randomData() },
              { name: "浙江", value: randomData() },
              { name: "江西", value: randomData() },
              { name: "湖北", value: randomData() },
              { name: "广西", value: randomData() },
              { name: "甘肃", value: randomData() },
              { name: "山西", value: randomData() },
              { name: "内蒙古", value: randomData() },
              { name: "陕西", value: randomData() },
              { name: "吉林", value: randomData() },
              { name: "福建", value: randomData() },
              { name: "贵州", value: randomData() },
              { name: "广东", value: randomData() },
              { name: "青海", value: randomData() },
              { name: "西藏", value: randomData() },
              { name: "四川", value: randomData() },
              { name: "宁夏", value: randomData() },
              { name: "海南", value: randomData() },
              { name: "台湾", value: randomData() },
              { name: "香港", value: randomData() },
              { name: "澳门", value: randomData() },
            ],
          },
        ],
      };

      myChartChina.setOption(optionMap);
      window.onresize = function () {
        resizeMyChartContainer();
        myChartChina.resize();
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.app-containers {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 24%;
  margin-bottom: 20px;
  height: 140px;
  text-align: center;
  background: linear-gradient(to bottom, #f0f7ff 0%, #fff 20%, #fff 80%);
}

.number {
  font-size: 30px;
  font-weight: 500;
  margin-top: 10px;
}

.Proportion {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
}

.barChart {
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 25px;
  box-sizing: border-box;
}

.barDesc {
  width: 25%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
}

.barDescItem {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 1;
  font-size: 14px;
  color: #aaa;
  font-weight: 500;
}

.barCell {
  text-align: center;
  width: 50%;
}

.mapDesc {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
}

#myChartChina {
  height: 500px;
  background-color: #fff;
  flex: 1;
}

.mapData {
  height: 500px;
  width: 30%;
  margin: 0 2%;
  background-color: #fff;
  border: 1px solid #aaa;
  padding: 10px;
}

.ranking {
  display: flex;
  width: 80%;
  flex-direction: row;
  height: 25px;
  line-height: 25px;
  margin-top: 20px;
}

.rankingNumber {
  height: 25px;
  width: 25px;
  line-height: 25px;
  text-align: center;
  border-radius: 25px;
  background-color: #000;
  color: #fff;
}

.place {
  padding-left: 10px;
  flex: 1;
}
</style>
