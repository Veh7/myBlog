export const data = {
  "key": "v-79dc7caa",
  "path": "/use.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "layout": "UseBlog"
  },
  "excerpt": "",
  "headers": [],
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
