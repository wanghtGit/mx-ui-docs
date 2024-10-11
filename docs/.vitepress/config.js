export default {
  title: 'MxUI',
  description: 'MxUI组件库',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/mx-ui-docs/logo.png' }], // 网站图标
  ],
  markdown: {
    lineNumbers: true // 是否显示行数，默认false
  },
  base: '/mx-ui-docs/',
  // outDir: '../public/docs',
  themeConfig: {
    siteTitle: 'MxUI',
    logo: "/logo.png",
    nav: [
      { text: "组件", link: "/guild/features/" },
      // { text: "工具", link: "/utils/quickstart/" },
    ],
    // socialLinks: [{ icon: "github", link: "https://gitee.com/geeksdidi" }],
    sidebar: {
      "/guild/": [
        {
          text: "指引",
          items: [
            { text: "特性", link: "/guild/features/" },
            { text: "快速上手", link: "/guild/quickstart/" },
            { text: "更新日志", link: "/guild/updateLog/" },
          ]
        },
        {
          text: "组件",
          items: [
            { text: "Affix 固钉", link: "/guild/cases/Affix/" },
            { text: "Alert 提示", link: "/guild/cases/Alert/" },
            { text: "Autocomplete 自动补全输入框", link: "/guild/cases/Autocomplete/" },
            { text: "BgCover 带背景色容器", link: "/guild/cases/BgCover/" },
            { text: "Button 按钮", link: "/guild/cases/Button/" },
            { text: "Card 卡片", link: "/guild/cases/Card/" },
            { text: "ColorPicker 颜色选择器", link: "/guild/cases/ColorPicker/" },
            // { text: "Descriptions 描述列表", link: "/guild/cases/Descriptions/" },
            { text: "Dialog 对话框", link: "/guild/cases/Dialog/" },
            { text: "Divider 分割线", link: "/guild/cases/Divider/" },
            { text: "Drawer 抽屉", link: "/guild/cases/Drawer/" },
            { text: "DropDown 下拉菜单", link: "/guild/cases/DropDown/" },
            { text: "Form 表单", link: "/guild/cases/Form/" },
            { text: "Icon 图标", link: "/guild/cases/Icon/" },
            { text: "Address 地址级联选择器", link: "/guild/cases/InputAddress/" },
            { text: "Cascader 级联选择器", link: "/guild/cases/InputCascader/" },
            // { text: "CheckBox 多选框", link: "/guild/cases/InputCheckBox/" },
            { text: "DatePicker 日期选择器", link: "/guild/cases/InputDatePicker/" },
            { text: "DatePickerRange 日期区间选择器", link: "/guild/cases/InputDatePickerRange/" },
            { text: "MxInterval 数字区间输入框", link: "/guild/cases/InputInterval/" },
            { text: "Number 数值输入框", link: "/guild/cases/InputNumber/" },
            { text: "MxInputPair 数值区间输入框", link: "/guild/cases/InputPair/" },
            { text: "Radio 单选框", link: "/guild/cases/InputRadio/" },
            { text: "Select 选择器", link: "/guild/cases/InputSelect/" },
            { text: "Input 输入框", link: "/guild/cases/InputText/" },
            { text: "TextArea 文本域输入框", link: "/guild/cases/InputTextarea/" },
            { text: "TimePicker 时间选择器", link: "/guild/cases/InputTimePicker/" },
            { text: "Layout 栅格布局", link: "/guild/cases/Layout/" },
            { text: "Loading 加载", link: "/guild/cases/Loading/" },
            // { text: "Menu 菜单", link: "/guild/cases/Menu/" },
            { text: "Message 消息提示", link: "/guild/cases/Message/" },
            { text: "Message Box 消息弹出框", link: "/guild/cases/MessageBox/" },
            // { text: "MxModificationDetection 组件", link: "/guild/cases/ModificationDetection/" },
            { text: "Notification 通知", link: "/guild/cases/Notification/" },
            { text: "Popconfirm 气泡确认框", link: "/guild/cases/Popconfirm/" },
            { text: "Progress 进度条", link: "/guild/cases/Progress/" },
            { text: "Search 搜索输入框", link: "/guild/cases/SearchInput/" },
            { text: "Slider 滑块", link: "/guild/cases/Slider/" },
            { text: "Space 间距", link: "/guild/cases/Space/" },
            { text: "Steps 步骤条", link: "/guild/cases/Steps/" },
            // { text: "Table 表格", link: "/guild/cases/Table/" },
            { text: "Tabs 标签页", link: "/guild/cases/Tabs/" },
            { text: "Tag 标签", link: "/guild/cases/Tag/" },
            { text: "Tooltip 文字提示", link: "/guild/cases/Tooltip/" },
            { text: "Tree 树形控件", link: "/guild/cases/Tree/" },
          ]
        }
      ],
      "/utils/": [
        {
          text: "指引",
          items: [
            { text: "快速上手", link: "/utils/quickstart/" },
          ]
        },
        {
          text: "工具",
          items: [
            { text: "打印 方法", link: "/utils/cases/print/" },
          ]
        }
      ],
    },
  },
}