<template>
  <div class="description-wrapper" :style="width?`width: ${width}`:''">
    <div class="label">{{ label }}</div>
    <div class="suffix">{{ suffix }}</div>
    <div class="value" v-html="value" />
  </div>
</template>

<script>

export default {
  name: 'Description',
  components: {},
  props: {
    width: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      request: true,
      default: ''
    },
    suffix: {
      type: String,
      default: ':'
    },
    value: {
      type: String,
      request: true,
      default() {
        return ``
      }
    }
  },
  created() {},
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.description-wrapper {
  div {
    display: inline-block;
    vertical-align: top;
    word-break: break-all;
  }
  .suffix {
    margin: 0 8px 0 2px;
  }
}
</style>
