export const data = {
  "key": "v-1c447180",
  "path": "/plugin/bubble/",
  "title": "vuepress-plugin-bubble",
  "lang": "zh-CN",
  "frontmatter": {
    "tag": [
      "bubble",
      "plugin"
    ],
    "categories": [
      "plugin"
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "安装",
      "slug": "安装",
      "children": []
    }
  ],
  "git": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
