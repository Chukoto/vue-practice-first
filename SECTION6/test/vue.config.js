module.exports = {
  publicPath: '', // 本番のindex.htmlが指定しているCSSのパスに入っている余計なスラッシュを消す
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/sass/main.scss";`,
      },
    },
  },
};
