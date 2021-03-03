<template>
  <el-card>
    <p>这里是主体。。。</p>
    <my-slot>
      <p><span>这里没有添加slot属性，所以这里的内容不会插入进去</span></p>
      <ul slot="kirin2019">
        <li>
          由于ul标签指定了slot属性，所以旗下的所有标签内容都会自动插入指定名字为kirin2019的插槽中
        </li>
        <li>这些都会被插入</li>
      </ul>
      <p><span>这里也不会插入</span></p>
      <h1 slot="footer">footer</h1>
    </my-slot>
  </el-card>
</template>
<script>
import mySlot from "./myslot";
export default {
  components: {
    "my-slot": mySlot
  }
};
</script>
