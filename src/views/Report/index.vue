<template>
  <!-- 报告列表 -->
  <div class="report-container">
    <el-card class="searchForm">
      <div slot="header">
        <span>查询条件</span>
      </div>
      <el-form
      ref="searchForm"
      :inline="true"
      :model="formData"
      label-position="right"
      label-width="100px"
      @submit.native.prevent="handleSearch"
      >
        <el-row>
          <el-col :md="12" :lg="8">
            <el-form-item label="手机号">
              <el-input v-model="formData.phoneNumber" placeholder="请输入" style="width: 100%;" />
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8">
            <el-form-item label="报告编号">
              <el-input v-model="formData.reportNumber" placeholder="请输入" style="width: 100%;" />
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8">
            <el-form-item label="设备名称">
              <el-input v-model="formData.snName" placeholder="请输入" style="width: 100%;" />
            </el-form-item>
          </el-col>
          <template v-if="expandForm">
            <el-col :md="12" :lg="8">
              <el-form-item label="设备型号">
                <el-select v-model="formData.snTypeId" placeholder="请选择" clearable style="width: 100%;">
                  <el-option label="DB-SWAM101C-V10R10" :value="1" />
                  <el-option label="DB-SWAM215B-V20R20" :value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8">
              <el-form-item label="创建时间">
                <el-date-picker
                  v-model="formData.exposeTime"
                  type="datetimerange"
                  align="center"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  style="width: 100%;"
                />
              </el-form-item>
            </el-col>
          </template>
        </el-row>
        <div class="btns">
          <el-button type="primary" @click="handleSearch">
            查询
          </el-button>
          <el-button style="margin-left: 10px;" @click="handleReset">
            重置
          </el-button>
          <span v-if="expandForm" class="link-type" style="margin-left: 10px;" @click="expandForm=false">
            收起<i class="el-icon-arrow-up" />
          </span>
          <span v-else class="link-type" style="margin-left: 10px;" @click="expandForm=true">
            展开<i class="el-icon-arrow-down" />
          </span>
        </div>
      </el-form>
    </el-card>
    <el-card>
      <div slot="header" class="card-header">
        <span class="card-header-title">报告列表</span>
        <div>
          <el-button type="primary" @click="handleExport">
            导出
          </el-button>
        </div>
      </div>
      <PageTable
        ref="dataTable"
        :data="list"
        :currentPage="currentPage"
        :pageSize="pageSize"
        :total="total"
        @handleChange="getList"
        @selectionChange="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
          align="center"
        />
        <el-table-column label="报告编号" prop="id"/>
        <el-table-column label="手机号" prop="phoneNumber"/>
        <el-table-column label="健康指数" prop="xxx"/>
        <el-table-column label="设备型号" prop="snType"/>
        <el-table-column label="设备名称" width="130px">
          <template slot-scope="{row}">
            <span class="link-type" @click="$router.push(`/device/detail`)">XXX</span>
          </template>
        </el-table-column>
        <el-table-column label="地区" prop="district"/>
        <el-table-column label="创建时间" prop="createTime" width="160px" align="center" />
        <el-table-column label="操作" fixed="right" align="center" width="100px">
          <template slot-scope="{row}">
            <span class="link-type" @click="$router.push(`/report/detail/${row.id}`)">详情</span>
          </template>
        </el-table-column>
      </PageTable>
    </el-card>
  </div>
</template>

<script>
import { getList } from '@/api/list'
import { dedupe } from '@/utils/lib.js'
import PageTable from '@/components/PageTable'

export default {
  name: 'ReportList',
  components: {
    PageTable
  },
  data() {
    return {
      expandForm: false,
      list: [],
      listLoading: true,
      total: 0,
      currentPage: 1,
      pageSize: 10,
      formData: {
        userId: undefined,
        phoneNumber: '',
        reportNumber: '',
        snName: '',
        snTypeId: undefined,
        snSourceId: undefined,
        createTime: ['', '']
      },
      id: undefined,
      selectionIds: []
    }
  },
  watch: {
    list: {
      handler(newVal, oldVal) {
        this.list.forEach((item, index) => {
          const result = this.selectionIds.some(id => id === item.id)
          if (result) {
            this.$nextTick(() => {
              this.$refs.dataTable.toggleRowSelection(this.list[index], true)
            })
          }
        })
      },
      deep: true
    }
  },
  created() {
    this.getList({ current: this.currentPage, limit: this.pageSize })
  },
  methods: {
    async getList({ current, limit }) {
      try {
        this.listLoading = true
        console.log(current,limit)
        const params = {
          ...this.formData,
          pageNum: current,
          pageSize: limit
        }
        const { code, data, message } = await getList(params)
        if (Number(code) === 20000) {
          this.list = data.list
          this.total = data.total
          this.pageNum = data.pageNum
        } else {
          this.$message.error(message || '报告列表获取失败,请稍后重试')
        }
        this.listLoading = false
      } catch (e) {
        // TODO handle the exception
        console.log(e)
        this.listLoading = false
      }
    },
    handleSelectionChange(val) {
      console.log('报告列表')
      const newIds = val.map(item => item.id)
      const thisPageIds = this.list.map(item => item.id)
      const thisPageNotSeletIdS = thisPageIds.filter(id => newIds.every(thisPageSelectId => thisPageSelectId !== id))
      let selectionIds = []
      selectionIds = this.selectionIds.concat(newIds)
      // 去掉数组内重复的id
      selectionIds = dedupe(selectionIds)
      // 去掉数组内当前页未选中id
      selectionIds = selectionIds.filter(id => thisPageNotSeletIdS.every(notSelectId => notSelectId !== id))
      this.selectionIds = selectionIds
      console.log(this.selectionIds)
    },
    handleSearch() {
      this.currentPage = 1
      this.getList({  current: this.currentPage, limit: this.pageSize })
    },
    resetFormData() {
      this.currentPage = 1
      this.pageSize = 10
      this.getList({  current: this.currentPage, limit: this.pageSize })
      this.formData = {
        userId: undefined,
        phoneNumber: '',
        reportNumber: '',
        snName: '',
        snTypeId: undefined,
        snSourceId: undefined,
        createTime: ['', '']
      }
    },
    handleReset() {
      this.currentPage = 1
      this.formData = {
        ...this.formData,
        userId: undefined,
        phoneNumber: '',
        reportNumber: '',
        snName: '',
        snTypeId: undefined,
        snSourceId: undefined,
        createTime: ['', '']
      }
      this.getList()
    },
    handleExport() {
      console.log('导出')
    }
  }
}
</script>

<style lang="scss" scoped>
.searchForm {
  margin-bottom: 10px;
  .btns {
    text-align: center;
  }
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-title {
      display: inline-block;
      flex: 1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
}
</style>
