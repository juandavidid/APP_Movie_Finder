Page({
  data: {

  },

  // 1. Funcion me redirige Pages index
  clickPage(){
    my.navigateTo({
      url:"/pages/index/index"
    })

  },
  clickPageClosed(){
    my.navigateTo({
      url:"/pages/search_movies/search_movies"
    })

  },
  onLoad() {},
});
