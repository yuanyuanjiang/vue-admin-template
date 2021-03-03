<template>
  <!-- 记录管理 -->
  <div class="record-container">
    <PageCard title="查询条件">
      <el-form
        :model="formData"
        label-position="right"
        ref="searchForm"
        label-width="100px"
      >
        <el-row>
          <el-col :md="12" :lg="8">
            <el-form-item label="手机号" prop="mobile">
              <el-input
                v-model.number="formData.mobile"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8">
            <el-form-item label="设备名称" prop="deviceCode">
              <el-input
                v-model="formData.deviceCode"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8">
            <el-form-item label="设备型号" prop="productCode">
              <el-select
                v-model="formData.productCode"
                placeholder="请选择"
                style="width: 100%;"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :md="12" :lg="8">
            <el-form-item label="检测时间">
              <el-date-picker
                v-model="formData.createTime"
                type="datetimerange"
                align="center"
                unlink-panels
                range-separator="~"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd HH:mm:ss"
                style="width: 100%;"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <div class="btns">
          <el-form-item>
            <el-button type="primary" @click="handleSearch()">查询</el-button>
            <el-button @click="handleReset()">重置</el-button>
          </el-form-item>
        </div>
      </el-form>
    </PageCard>
    <PageCard
      title="记录列表"
      icon_type="list"
      :hasExport="true"
      @export="handleExport()"
    >
      <el-tabs
        v-model="tabKey"
        @tab-click="handleChangeTab"
        class="tabs-content"
      >
        <el-tab-pane
          v-for="item in tabList"
          :label="item.tabName"
          :name="item.value"
          ><PageTable
            :data="data"
            :currentPage="currentPage"
            :pageSize="pageSize"
            :total="total"
            @handleChange="handleChange"
          >
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column prop="mobile" label="手机号"> </el-table-column>
            <el-table-column prop="target" :label="item.tabName">
            </el-table-column>
            <el-table-column prop="merchantName" label="商户名称">
            </el-table-column>
            <el-table-column prop="productCode" label="设备型号">
            </el-table-column>
            <el-table-column prop="deviceCode" label="设备名称">
            </el-table-column>
            <el-table-column prop="time" label="检测时间">
            </el-table-column> </PageTable
        ></el-tab-pane>
      </el-tabs>
    </PageCard>
  </div>
</template>

<script>
import PageTable from "../../components/PageTable";
import PageCard from "@/components/PageCard";
export default {
  name: "Record",
  components: {
    PageTable: PageTable,
    PageCard: PageCard
  },
  data() {
    return {
      tabKey: "0",
      tabList: [
        { tabName: "健康指数", value: "0" },
        { tabName: "肌肤年龄", value: "1" },
        { tabName: "BMI", value: "2" },
        { tabName: "高压", value: "3" },
        { tabName: "低压", value: "4" },
        { tabName: "甘油三酯", value: "5" },
        { tabName: "血糖", value: "6" },
        { tabName: "胆固醇", value: "7" },
        { tabName: "高密度脂蛋白胆固醇", value: "8" },
        { tabName: "低密度脂蛋白胆固醇", value: "9" }
      ],
      formData: {
        mobile: "",
        deviceCode: "",
        productCode: "",
        time: ""
      },
      currentPage: 1,
      pageSize: 10,
      total: 12,
      data: [
        {
          id: "0",
          mobile: "15215215215",
          target: "23",
          merchantName: "王小虎222",
          productCode: "Biglan",
          deviceCode: "DB42-23-1300",
          time: "2016-05-03 11:12:13"
        },
        {
          id: "1",
          mobile: "15215215215",
          target: "23",
          merchantName: "王小虎333",
          productCode: "Biglan",
          deviceCode: "DB42-23-1300",
          time: "2016-05-03 11:12:13"
        },
        {
          id: "2",
          mobile: "15215215215",
          target: "23",
          merchantName: "王小虎555",
          productCode: "Biglan",
          deviceCode: "DB42-23-1300",
          time: "2016-05-03 11:12:13"
        },
        {
          id: "0",
          mobile: "15215215215",
          target: "23",
          merchantName: "王小虎222",
          productCode: "Biglan",
          deviceCode: "DB42-23-1300",
          time: "2016-05-03 11:12:13"
        },
        {
          id: "1",
          mobile: "15215215215",
          target: "23",
          merchantName: "王小虎333",
          productCode: "Biglan",
          deviceCode: "DB42-23-1300",
          time: "2016-05-03 11:12:13"
        },
        {
          id: "2",
          mobile: "15215215215",
          target: "23",
          merchantName: "王小虎555",
          productCode: "Biglan",
          deviceCode: "DB42-23-1300",
          time: "2016-05-03 11:12:13"
        }
      ]
    };
  },
  methods: {
    // 查询
    handleSearch(current, limit) {
      console.log("valid--", this._data.formData);
      const params = {
        ...this._data.formData,
        pageNumber: current || 1,
        pageSize: limit || 10
      };
      // 调接口查询
    },
    // 重置
    handleReset() {
      this.$refs["searchForm"].resetFields();
    },
    // tab切换
    handleChangeTab(tab) {
      this.tabKey = tab.name;
    },
    // 页码改变
    handleChange({ current, limit }) {
      console.log("current：", current, limit);
      this.handleSearch(current, limit);
    },
    handleExport() {
      console.log("导出");
    }
  }
};
</script>

<style lang="scss" scoped>
.record-container {
  .btns {
    text-align: right;
  }
}
.tabs-content {
  background: #fff;
}
</style>
