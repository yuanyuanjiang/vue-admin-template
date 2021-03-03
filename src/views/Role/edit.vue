<template>
  <!-- 编辑角色 -->
  <div class="container">
    <el-card>
      <el-form :model="form" label-width="140px" :rules="rules">
        <el-row>
          <el-col :span="20">
            <el-form-item label="角色名：" prop="name">
              <el-input
                v-model="form.name"
                placeholder="请输入角色名称"
              ></el-input>
            </el-form-item>
            <el-form-item label="角色描述：" prop="description">
              <el-input
                v-model="form.description"
                placeholder="限20个字"
                type="textarea"
              ></el-input>
            </el-form-item>
            <el-form-item label="勾选权限配置：" prop="relation">
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16" :offset="2">
            <el-tree
              :data="data"
              show-checkbox
              node-key="id"
              :default-checked-keys="[5]"
              :props="defaultProps"
            >
            </el-tree>
          </el-col>
        </el-row>
        <div class="btns">
          <el-button>返回</el-button>
          <el-button type="primary">确定</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        description: ""
      },
      rules: {
        name: [{ required: true, message: "请输入角色名称", trigger: "blur" }],
        description: [
          { required: true, message: "请输入角色描述", trigger: "blur" }
        ]
      },
      data: [
        {
          id: 1,
          label: "仪表盘",
          children: [
            {
              id: 2,
              label: "用户统计"
            },
            {
              id: 3,
              label: "用户分析"
            },
            {
              id: 4,
              label: "设备统计"
            }
          ]
        },
        {
          id: 5,
          label: "设备管理",
          children: [
            {
              id: 6,
              label: "设备列表"
            }
          ]
        },
        {
          id: 7,
          label: "报告管理",
          children: [
            {
              id: 8,
              label: "报告列表"
            }
          ]
        },
        {
          id: 9,
          label: "记录管理",
          children: [
            {
              id: 10,
              label: "记录列表"
            }
          ]
        },
        {
          id: 11,
          label: "商户管理",
          children: [
            {
              id: 12,
              label: "子商户列表"
            }
          ]
        },
        {
          id: 13,
          label: "用户管理",
          children: [
            {
              id: 14,
              label: "用户列表"
            }
          ]
        },
        {
          id: 15,
          label: "账户管理",
          children: [
            {
              id: 16,
              label: "账户列表"
            },
            {
              id: 17,
              label: "角色列表"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.btns {
  margin-top: 40px;
  text-align: center;
}
</style>
