<template>
  <div class="langSelect">
    <el-dropdown @command="handleSetLanguage">
      <span class="el-dropdown-link"> 默认语言 </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="zh" :disabled="language === 'zh'"
          >中文</el-dropdown-item
        >
        <el-dropdown-item command="en" :disabled="language === 'en'"
          >English</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: this.$i18n.locale
    };
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang;
      this._data.language = lang;
      localStorage.setItem("language", lang);
    }
  }
};
</script>

<style lang="scss" scoped>
.langSelect {
  float: right;
  height: 100%;
  line-height: 50px;
  margin-right: 20px;
  cursor: pointer;
}
</style>
