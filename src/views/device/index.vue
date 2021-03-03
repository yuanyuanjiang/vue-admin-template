<template>
  <!-- 设备列表 -->
  <div class="record-container">
    <el-card class="searchForm">
      <div slot="header">
        <span>查询条件</span>
      </div>
      <el-form
        :inline="true"
        :model="formData"
        label-position="right"
        ref="searchForm"
        label-width="100px"
      >
        <el-row>
          <el-col :md="12" :lg="8">
            <el-form-item label="设备名称" prop="productName" style="width: 100%;">
              <el-input
                v-model="formData.productName"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8">
            <el-form-item label="设备型号" prop="productCode">
              <el-select v-model="formData.productCode" placeholder="请选择" style="width: 100%;">
                <el-option label="魔镜-A" value="a"></el-option>
                <el-option label="魔镜-B" value="b"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8">
            <el-form-item label="设备状态" prop="productStatus">
              <el-select v-model="formData.productStatus" placeholder="请选择" style="width: 100%;">
                <el-option label="在线" value="在线"></el-option>
                <el-option label="离线" value="离线"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <template v-if="expandForm">
            <el-col :md="12" :lg="8">
              <el-form-item label="设备SN" prop="deviceSN">
                <el-input
                  v-model="formData.deviceSN"
                  placeholder="请输入"
                  style="width: 100%;"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8">
              <el-form-item label="创建时间" prop="createTime">
                <el-date-picker
                  v-model="formData.createTime"
                  type="datetimerange"
                  align="center"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  style="width: 100%;"
                  placeholder="请选择日期"
                />
              </el-form-item>
            </el-col>
          </template>
        </el-row>
        <div class="btns">
          <el-form-item>
            <el-button type="primary" @click="handleSearch()">查询</el-button>
            <el-button @click="handleReset()">重置</el-button>
            <span v-if="expandForm" class="link-type" style="margin-left: 10px;" @click="expandForm=false">
              收起<i class="el-icon-arrow-up" />
            </span>
            <span v-else class="link-type" style="margin-left: 10px;" @click="expandForm=true">
              展开<i class="el-icon-arrow-down" />
            </span>
          </el-form-item>
        </div>
      </el-form>
    </el-card>
    <el-card>
      <div slot="header">
        <span>设备列表</span>
      </div>
      <PageTable
        :data="data"
        :currentPage="currentPage"
        :pageSize="pageSize"
        :total="total"
        @handleChange="handleSearch"
      >
        <el-table-column prop="deviceSN" label="设备SN号" align="center"></el-table-column>
        <el-table-column prop="productCode" label="设备型号" align="center"></el-table-column>
        <el-table-column label="设备名称">
          <template slot-scope="{row}">
            <span class="link-type" @click="$router.push(`device/detail/${row.id}`)">{{row.productName}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column prop="productStatus" label="设备状态"></el-table-column>
        <el-table-column prop="address" label="地区"></el-table-column>
        </el-table-column>
        <el-table-column label="操作"  width="300">
          <template slot-scope="{row}">
            <span class="link-type"  @click.stop="handleEdit(row)" style="margin-right: 16px;"
              >编辑</span>
            <el-dropdown trigger="click" @command="handleCommand($event,row)">
              <span class="link-type el-dropdown-link">
                更多<i class="el-icon-arrow-down el-icon--right" />
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="timingReboot" :disabled="timingRebootDisable(row.snStatus)">定时重启设备</el-dropdown-item>
                <el-dropdown-item command="reboot" :disabled="rebootDisable(row.snStatus)">重启设备</el-dropdown-item>
                <el-dropdown-item command="gameteMerchant" :disabled="gameteMerchantDisable(row.snStatus)">分配子商户</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </PageTable>
    </el-card>
    <EditForm
      ref="editForm"
      :dialog-visible.sync="editFormVisible"
      :info.sync="temp"
      :dialog-loading.sync="editLoading"
      @confirm="editData"
    />
    <TimingRebootForm
      ref="timingRebootForm"
      :dialog-visible.sync="timingRebootFormVisible"
      :info.sync="temp"
      :dialog-loading.sync="timingRebootLoading"
      @confirm="timingReboot"
    />
    <GameteMerchant
      ref="gameteMerchant"
      :dialog-visible.sync="gameteMerchantVisible"
      :info.sync="temp"
      :dialog-loading.sync="gameteMerchantLoading"
      @confirm="gameteMerchant"
    />
  </div>
</template>
<script>
import PageTable from "../../components/PageTable";
import EditForm from "./components/EditForm";
import GameteMerchant from "./components/GameteMerchant";
import TimingRebootForm from "./components/TimingRebootForm";
export default {
  name: "Consumer",
  components: {
    PageTable,
    EditForm,
    TimingRebootForm,
    GameteMerchant
  },
  data() {
    return {
      expandForm: false,
      temp: {
        id: undefined
      },
      formData: {
        mobile: "",
        deviceSN: "",
        releation: "",
        productStatus: "",
        merchantName: "",
        createTime: ["", ""],
      },
      currentPage: 1,
      pageSize: 20,
      total: 88,
      data: [
        {
          id: "0",
          mobile: "15215215215",
          deviceSN: "LURG",
          address: "上海",
          productName: "magic-999",
          productStatus: "在线",
          deviceCode: "magic-a",
          productCode: "Magic",
          createTime: "2016-05-03 11:12:00",
        },
        {
          id: "1",
          mobile: "15215215215",
          deviceSN: "KLOY",
          address: "上海",
          productName: "magic-999",
          productStatus: "在线",
          deviceCode: "magic-b",
          productCode: "Magic",
          createTime: "2016-05-03 11:12:00",
        },
        {
          id: "2",
          mobile: "15215215215",
          deviceSN: "HJUF",
          address: "上海",
          productName: "magic-999",
          productStatus: "在线",
          deviceCode: "magic-c",
          productCode: "Magic",
          createTime: "2016-05-03 11:12:00",
        },
      ],
      editFormVisible: false,
      editLoading: false,
      timingRebootFormVisible: false,
      timingRebootLoading: false,
      gameteMerchantVisible: false,
      gameteMerchantLoading: false
    };
  },
  methods: {
    // 查询
    handleSearch({ current, limit }) {
      const params = {
        ...this._data.formData,
        pageNumber: current || 1,
        pageSize: limit || 10,
      };
      // 调接口查询
    },
    // 重置
    handleReset() {
      this.$refs["searchForm"].resetFields();
    },
    resetTemp() {
      this.temp = {
        id: undefined
      };
    },
    handleCommand(command, row) {
      switch (command) {
        case 'timingReboot':
          this.handleTimingReboot(row);
          break;
        case 'reboot':
          this.handleReboot(row);
          break;
        case 'gameteMerchant':
          this.handleGameteMerchant(row);
          break;
        default:
      }
    },
    handleEdit(row) {
      this.temp = Object.assign({}, row);
      this.editFormVisible = true;
      this.$nextTick(() => {
        this.$refs['editForm'].clearValidate();
      });
    },
    editData(data) {
      this.editFormVisible = false;
      console.log('edit===========>>>>>>>>>>>>>>>>>');
    },
    handleTimingReboot(row) {
      this.temp = Object.assign({}, row);
      this.timingRebootFormVisible = true;
    },
    timingReboot(data) {
      this.timingRebootFormVisible = false;
      console.log('定时重启设置成功!');
    },
    handleGameteMerchant(row){
      this.temp = Object.assign({}, row);
      this.gameteMerchantVisible = true;
    },
    gameteMerchant(data) {
      this.gameteMerchantVisible = false;
      console.log('分配子商户成功!');
    },
    handleReboot(row) {
      this.$confirm('是否要重启该设备?', '重启设备', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        customClass: 'confirm-center',
        center: true
      }).then(() => {
        this.reboot(row);
      }).catch(() => {})
    },
    reboot(data) {
      this.$message({
        type: 'success',
        message: '设备重启下发成功!'
      });
    },
    timingRebootDisable(status) {
      const result = false;
      return result;
    },
    rebootDisable(status) {
      const result = false;
      return result;
    },
    gameteMerchantDisable(status) {
      const result = false;
      return result;
    }
  },
};
</script>

<style lang="scss" scoped>
.searchForm {
  margin-bottom: 10px;
  .btns {
    text-align: center;
  }
}
</style>

<style lang="scss">
.confirm-center {
  .el-message-box__message {
    text-align: left !important;
  }
}
</style>
