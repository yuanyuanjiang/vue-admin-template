<template>
  <!-- 用户管理 -->
  <div class="consumer-container">
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
              <el-select v-model="formData.productCode" placeholder="请选择">
                <el-option label="魔镜-A" value="a"></el-option>
                <el-option label="魔镜-B" value="b"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8">
            <el-form-item label="创建时间" prop="createTime">
              <el-input
                placeholder="请输入"
                v-model="formData.deviceCode"
              ></el-input>
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
    <PageCard title="用户列表" :hasExport="true" icon_type="list">
      <PageTable
        :data="data"
        :currentPage="currentPage"
        :pageSize="pageSize"
        :total="total"
        @handleChange="handleSearch"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="mobile" label="手机号"> </el-table-column>
        <el-table-column prop="deviceCode" label="设备名称">
          <template slot-scope="scope">
            <el-button type="text">
              <router-link
                :to="{ path: `/device/detail/${scope.row.deviceCode}` }"
              >
                {{ scope.row.deviceCode }}
              </router-link>
            </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="productCode" label="设备型号"> </el-table-column>
        <el-table-column prop="createTime" label="创建时间"> </el-table-column>
        <el-table-column prop="lastTime" label="最近登录时间">
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button type="text" @click.stop="handleEdit(scope.row)"
              ><router-link :to="{ path: `/consumer/detail/${scope.row.id}` }"
                >详情</router-link
              ></el-button
            >
            &nbsp;
            <el-button type="text" @click.stop="handleDel(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </PageTable>
    </PageCard>
  </div>
</template>

<script>
import PageTable from "../../components/PageTable";
import PageCard from "@/components/PageCard";
export default {
  name: "Consumer",
  components: {
    PageTable: PageTable,
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
          mobile: "15215215215",
          deviceCode: "magic-a",
          productCode: "Magic",
          createTime: "2016-05-03 11:12:13",
          lastTime: "2016-05-03 11:12:13"
        },
        {
          id: "1",
          mobile: "15215215215",
          deviceCode: "magic-b",
          productCode: "Magic",
          createTime: "2016-05-03 11:12:13",
          lastTime: "2016-05-03 11:12:13"
        },
        {
          id: "2",
          mobile: "15215215215",
          deviceCode: "magic-c",
          productCode: "Magic",
          createTime: "2016-05-03 11:12:13",
          lastTime: "2016-05-03 11:12:13"
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
    }
  }
};
</script>

<style lang="scss" scoped>
.consumer-container {
  .btns {
    text-align: right;
  }
}
</style>
