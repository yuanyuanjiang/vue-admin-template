<template>
  <!-- 子商户管理 -->
  <div class="merchant-container">
    <PageCard title="查询条件">
      <el-form
        :model="formData"
        label-position="right"
        ref="searchForm"
        label-width="100px"
      >
        <el-row>
          <el-col :md="12" :lg="8">
            <el-form-item label="子商户名称" prop="merchantName">
              <el-input
                v-model.number="formData.merchantName"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8">
            <el-form-item label="联系人" prop="releation">
              <el-input
                v-model="formData.releation"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8">
            <el-form-item label="联系人手机" prop="mobile">
              <el-input
                v-model="formData.mobile"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :md="12" :lg="8">
            <el-form-item label="注册时间" prop="createTime">
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
      title="子商户管理列表"
      :hasCreate="true"
      btnText="创建子商户"
      icon_type="list"
      @create="handleAdd()"
    >
      <PageTable
        :data="data"
        :currentPage="currentPage"
        :pageSize="pageSize"
        :total="total"
        @handleChange="handleSearch"
      >
        <el-table-column prop="merchantName" label="子商户名称">
          <template slot-scope="scope">
            <el-button type="text">
              <router-link :to="{ path: `/merchant/detail/${scope.row.id}` }">
                {{ scope.row.merchantName }}
              </router-link>
            </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="relation" label="联系人"> </el-table-column>
        <el-table-column prop="mobile" label="联系人手机"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column prop="createTime" label="注册时间"> </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button type="text" @click.stop="handleEdit(scope.row)"
              >编辑</el-button
            >
            &nbsp;
            <el-button type="text" @click.stop="handleDel(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </PageTable>
    </PageCard>
    <EditForm ref="child" @handleSearch="handleSearch" />
  </div>
</template>

<script>
import PageTable from "../../components/PageTable";
import EditForm from "./edit";
import PageCard from "@/components/PageCard";
export default {
  name: "Merchant",
  components: {
    PageTable: PageTable,
    EditForm: EditForm,
    PageCard: PageCard
  },
  data() {
    return {
      formData: {
        mobile: "",
        releation: "",
        merchantName: "",
        createTime: ""
      },
      currentPage: 1,
      pageSize: 20,
      total: 88,
      data: [
        {
          id: "0",
          merchantName: "子商户1",
          relation: "王小虎",
          mobile: "15215215215",
          address: "上海市长宁区",
          createTime: "2016-05-03 11:12:13"
        },
        {
          id: "1",
          merchantName: "子商户2",
          relation: "王小虎",
          mobile: "15215215215",
          address: "上海市长宁区",
          createTime: "2016-05-03 11:12:13"
        },
        {
          id: "2",
          merchantName: "子商户3",
          relation: "王小虎",
          mobile: "15215215215",
          address: "上海市长宁区",
          createTime: "2016-05-03 11:12:13"
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
        pageSize: limit || 20
      };
      // 调接口查询
    },
    // 重置
    handleReset() {
      this.$refs["searchForm"].resetFields();
    },
    handleEdit({ merchantName, address, relation, mobile }) {
      const params = {
        name: merchantName,
        address,
        relation,
        mobile
      };
      console.log("编辑--", params);
      this.$refs.child.showModal(params);
    },

    handleDel(item) {
      console.log("删除--", item);
    },
    handleAdd() {
      this.$router.push("/merchant/create");
    }
  }
};
</script>

<style lang="scss" scoped>
.merchant-container {
  .btns {
    text-align: right;
  }
}
</style>
