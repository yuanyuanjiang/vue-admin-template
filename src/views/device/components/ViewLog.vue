<template>
  <el-dialog
    width="800px"
    :before-close="handleClose"
    :append-to-body="true"
    title="查看状态记录"
    :visible.sync="dialogVisible"
    center
  >
    <el-form
      label-position="right"
      label-width="100px"
    >
      <el-form-item label="上线时间:">
        <el-date-picker
          v-model="listQuery.onlineTime"
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
      <el-form-item label="离线时间:">
        <el-date-picker
          v-model="listQuery.offlineTime"
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
      <div class="opraetion">
        <el-button type="primary" @click="handleSearch">
          查询
        </el-button>
        <el-button style="margin-left: 10px;" @click="handleReset">
          重置
        </el-button>
      </div>
    </el-form>
    <PageTable
      :data="list"
      :currentPage="currentPage"
      :pageSize="pageSize"
      :total="total"
      @handleChange="getList"
    >
      <el-table-column label="上线时间" prop="onlineTime" />
      <el-table-column label="离线时间" prop="offlineTime" />
    </PageTable>
  </el-dialog>
</template>

<script>
import { getList } from '@/api/table'
import PageTable from '@/components/PageTable'

export default {
  name: 'ViewLog',
  components: {
    PageTable
  },
  props: {
    dialogVisible: {
      type: Boolean,
      request: true
    }
  },
  data() {
    return {
      list: [],
      currentPage: 1,
      pageSize: 10,
      total: 0,
      listLoading: true,
      listQuery: {
        onlineTime: ['', ''],
        offlineTime: ['', '']
      }
    }
  },
  watch: {
    dialogVisible: {
      handler: function(newVal, oldVal) {
        if (newVal !== oldVal && newVal === true) {
          this.getList({ current:1, limit:10 })
        }
      },
      deep: true
    }
  },
  methods: {
    async getList({ current, limit }) {
      try {
        this.listLoading = true
        const params = {
          pageNumber: current || 1,
          pageSize: limit || 20,
        };
        const { code, data, message } = await getList(params)
        if (Number(code) === 20000) {
          this.list = data.list
          this.total = data.total
          this.pageNum = data.pageNum
        } else {
          this.$message.error(message || '设备记录状态列表查询失败,请稍后重试')
        }
        this.listLoading = false
      } catch (e) {
        // TODO handle the exception
        console.log(e)
        this.listLoading = false
      }
    },
    handleSearch() {
      this.listQuery.pageNum = 1
      this.getList()
    },
    handleReset() {
      this.listQuery = {
        ...this.listQuery,
        pageNum: 1,
        onLineTime: ['', ''],
        offLineTime: ['', '']
      }
      this.getList()
    },
    handleClose() {
      this.$emit('update:dialogVisible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.opraetion {
  text-align: center;
  margin-bottom: 20px;
}
</style>
