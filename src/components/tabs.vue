<template>
  <div>
    <h1>Tabs</h1>
    <el-tabs type="border-card" style="width:500px;margin-left:50%;transform:translateX(-50%);">
      <el-tab-pane v-for="item in pageData" :key="item.id" :label="item.name">
        <component :is="item.content" :itemData="item.data"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import schedulePage from "../views/tabs/schedule.vue";
import messagePage from "../views/tabs/message.vue";
import rolePage from "../views/tabs/role.vue";
export default {
  data() {
    return {
      pageData: [
        {
          id: "t01",
          name: "我的行程",
          content: "schedulePage",
          data: "这是My Schedule页面"
        },
        {
          id: "t02",
          name: "消息中心",
          content: "messagePage",
          data: "这是Message Center页面"
        },
        {
          id: "t03",
          name: "角色管理",
          content: "rolePage",
          data: "这是Role Management页面"
        }
      ]
    };
  },
  components: {
    schedulePage,
    messagePage,
    rolePage
  }
};
</script>