<template>
  <!-- 账户管理 -->
  <div class="account-container">
    <PageCard title="查询条件">
      <el-form
        :model="formData"
        label-position="right"
        ref="searchForm"
        label-width="100px"
      >
        <el-row>
          <el-col :md="12" :lg="8">
            <el-form-item label="用户名" prop="userName">
              <el-input
                v-model.number="formData.userName"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8">
            <el-form-item label="手机号" prop="mobile">
              <el-input
                v-model="formData.mobile"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8">
            <el-form-item label="角色名" prop="roleId">
              <el-select v-model="formData.roleId" placeholder="请选择">
                <el-option label="管理员" value="admin"></el-option>
                <el-option label="运营人员" value="operator"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :md="12" :lg="8">
            <el-form-item label="创建时间" prop="createTime">
              <el-input placeholder="请输入"></el-input>
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
      title="账户列表"
      icon_type="list"
      :hasCreate="true"
      btnText="创建账户"
      @create="handleAdd()"
    >
      <PageTable
        :data="data"
        :currentPage="currentPage"
        :pageSize="pageSize"
        :total="total"
        @handleChange="handleSearch"
      >
        <el-table-column prop="userName" label="用户名" width="80px">
          <template slot-scope="scope">
            <el-button type="text">
              <router-link :to="{ path: `/account/detail/${scope.row.id}` }">
                {{ scope.row.userName }}
              </router-link>
            </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="手机号"> </el-table-column>
        <el-table-column prop="roleName" label="角色名"> </el-table-column>
        <el-table-column prop="merchantName" label="指定商户">
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间"> </el-table-column>
        <el-table-column prop="lastTime" label="上次登录时间">
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button type="text" @click.stop="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button type="text" @click.stop="handleResetPwd(scope.row)"
              >重置密码</el-button
            ><el-button type="text" @click.stop="handleResetPwd(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </PageTable>
    </PageCard>
    <CreateEditForm ref="child" @handleSearch="handleSearch" />
  </div>
</template>

<script>
import PageTable from "../../components/PageTable";
import PageCard from "@/components/PageCard";
import CreateEditForm from "./createAndEdit";
export default {
  name: "Account",
  components: {
    PageTable: PageTable,
    CreateEditForm: CreateEditForm,
    PageCard: PageCard
  },
  data() {
    return {
      formData: {
        mobile: "",
        roleId: "",
        userName: "",
        createTime: ""
      },
      currentPage: 1,
      pageSize: 20,
      total: 88,
      data: [
        {
          id: "0",
          merchantName: "子商户1",
          userName: "王小虎",
          mobile: "15215215215",
          roleName: "上海市长宁区",
          createTime: "2016-05-03 11:12:13",
          lastTime: "2016-05-03 11:12:13"
        },
        {
          id: "1",
          merchantName: "子商户2",
          userName: "王小虎",
          mobile: "15215215215",
          roleName: "上海市长宁区",
          createTime: "2016-05-03 11:12:13",
          lastTime: "2016-05-03 11:12:13"
        },
        {
          id: "2",
          merchantName: "子商户3",
          userName: "王小虎",
          mobile: "15215215215",
          roleName: "上海市长宁区",
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
    handleAdd() {
      this.$refs.child.showModal("add");
    },
    handleEdit({ merchantName, roleName, userName, mobile }) {
      const params = {
        name: merchantName,
        roleName,
        userName,
        mobile
      };
      console.log("编辑--", params);
      this.$refs.child.showModal("edit", params);
    },

    handleDel(item) {
      console.log("删除--", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.account-container {
  .btns {
    text-align: right;
  }
}
</style>
