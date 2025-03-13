Page({
  data: {

    playArray:["https://m.media-amazon.com/images/S/pv-target-images/4a362dbadaf96a0368c36d5f8f21f5149cb3ba09be0668f81f00d092c988b1da.png","https://i.ytimg.com/vi/2S4O8Ea6M9Y/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx4fJpWwnwqCYy36pzSJS9zKPp2Ao38EagkQ&s","https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png","https://media.vandal.net/m/30765/need-for-speed-2015111104849_1.jpg"], // array para recorrer los Juegos 
    textPlay:["Secret Level","GTA:Sandres","Mario Kart","Spirder Man","Neep For Speed"],
    searchQuery: "" // Nuevo estado para almacenar el valor de búsqueda
  },

  // 1. Funcion Buscardor por peliculas
  onSearchInput(e) {
    const query = e.detail.value.toLowerCase(); // Convertir a minúsculas para búsqueda
    this.setData({ searchQuery: query });
  },
  onLoad() {},
});
