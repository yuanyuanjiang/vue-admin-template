<template>
  <!-- 角色管理 -->
  <div class="role-container">
    <PageCard title="查询条件">
      <el-form
        :model="formData"
        label-position="right"
        ref="searchForm"
        label-width="100px"
      >
        <el-row>
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
      title="角色列表"
      icon_type="list"
      :hasCreate="true"
      btnText="创建角色"
      @create="handleAdd()"
    >
      <PageTable
        :data="data"
        :currentPage="currentPage"
        :pageSize="pageSize"
        :total="total"
        @handleChange="handleSearch"
      >
        <el-table-column prop="roleName" label="角色名"> </el-table-column>
        <el-table-column prop="description" label="角色描述"> </el-table-column>
        <el-table-column prop="authority" label="角色权限"> </el-table-column>
        <el-table-column prop="createTime" label="创建时间"> </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button type="text" v-if="checkPermission(['role_edit'])">
              <router-link :to="{ path: `/account/role/edit/${scope.row.id}` }">
                编辑
              </router-link></el-button
            ><el-button type="text" @click.stop="handleDel(scope.row)"
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
import checkPermission from "@/utils/permission"; // 权限判断函数
export default {
  name: "Account",
  components: {
    PageTable: PageTable,
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
          roleName: "管理员",
          description: "商户管理员",
          authority: [
            "仪表盘",
            "设备列表",
            "报告列表",
            "记录列表",
            "账户列表",
            "角色列表"
          ],
          createTime: "2016-05-03 11:12:13"
        },
        {
          id: "1",
          roleName: "操作人员",
          description: "商户操作人员",
          authority: ["仪表盘", "设备列表", "报告列表"],
          createTime: "2016-05-03 11:12:13"
        },
        {
          id: "2",
          roleName: "运营人员",
          description: "商户运营人员",
          authority: ["仪表盘", "设备列表", "报告列表", "记录列表"],
          createTime: "2016-05-03 11:12:13"
        }
      ]
    };
  },
  methods: {
    checkPermission,
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
    handleDel(item) {
      console.log("删除--", item);
    },
    handleAdd() {
      this.$$router.push("/account/role/create");
    }
  }
};
</script>

<style lang="scss" scoped>
.role-container {
  .btns {
    text-align: right;
  }
}
</style>
