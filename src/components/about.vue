<template>
  <div>
    <h1>About</h1>
    <div class="cascader">
      <el-cascader
        :options="options"
        :props="props"
        v-model="selectedOptions"
        @change="handleChange"
      ></el-cascader>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          key: "zhinan",
          text: "指南",
          down: [
            {
              key: "shejiyuanze",
              text: "设计原则",
              down: [
                {
                  key: "yizhi",
                  text: "一致"
                },
                {
                  key: "fankui",
                  text: "反馈"
                },
                {
                  key: "xiaolv",
                  text: "效率"
                },
                {
                  key: "kekong",
                  text: "可控"
                }
              ]
            },
            {
              key: "daohang",
              text: "导航",
              down: [
                {
                  key: "cexiangdaohang",
                  text: "侧向导航"
                },
                {
                  key: "dingbudaohang",
                  text: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          key: "zujian",
          text: "组件",
          down: [
            {
              key: "basic",
              text: "Basic",
              down: [
                {
                  key: "layout",
                  text: "Layout 布局"
                },
                {
                  key: "color",
                  text: "Color 色彩"
                },
                {
                  key: "typography",
                  text: "Typography 字体"
                },
                {
                  key: "icon",
                  text: "Icon 图标"
                },
                {
                  key: "button",
                  text: "Button 按钮"
                }
              ]
            },
            {
              key: "data",
              text: "Data",
              down: [
                {
                  key: "table",
                  text: "Table 表格"
                },
                {
                  key: "tag",
                  text: "Tag 标签"
                },
                {
                  key: "progress",
                  text: "Progress 进度条"
                },
                {
                  key: "tree",
                  text: "Tree 树形控件"
                },
                {
                  key: "pagination",
                  text: "Pagination 分页"
                },
                {
                  key: "badge",
                  text: "Badge 标记"
                }
              ]
            },
            {
              key: "notice",
              text: "Notice",
              down: [
                {
                  key: "alert",
                  text: "Alert 警告"
                },
                {
                  key: "loading",
                  text: "Loading 加载"
                },
                {
                  key: "message",
                  text: "Message 消息提示"
                },
                {
                  key: "message-box",
                  text: "MessageBox 弹框"
                },
                {
                  key: "notification",
                  text: "Notification 通知"
                }
              ]
            }
          ]
        }
      ],
      selectedOptions: [],
      props: {
        label: "text",
        value: "key",
        children: "down"
      }
    };
  },
  methods: {
    handleChange(key) {
      console.log(key);
    }
  }
};
</script>