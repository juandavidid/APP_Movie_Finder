Page({
  data: {
    favoriteMovies:"",
  },
  // 1. Funcion que redirige a la Pagina principal
  clickPagesMovies(){
    my.navigateTo({
      url:"/pages/index/index"
    })
  },
  clickMoviesDestail(){
    my.navigateTo({
      url:"/pages/movie_detail_modal/movie_detail_modal"
    })

  },
  // 2. Funcion para eleminar peliculas y actulizar lista de peliculas
  removeFromFavorites(event) {
    let titleToRemove = event.target.dataset.title; // Obtiene el título de la película a eliminar
    let favorites = my.getStorageSync({ key: 'favorites' }).data || [];

    // Filtrar la lista para eliminar la película seleccionada
    let updatedFavorites = favorites.filter(movie => movie.title !== titleToRemove);

    // Guardar la lista actualizada
    my.setStorageSync({ key: 'favorites', data: updatedFavorites });

    // Actualizar los datos en la página
    this.setData({
        favoriteMovies: updatedFavorites
    });

    // Mostrar mensaje de confirmación
    my.showToast({ content: 'Película eliminada' });
  },

  onLoad() {

    let favorites = my.getStorageSync({ key: 'favorites' }).data || [];
    this.setData({
        favoriteMovies: favorites
    });
    console.log(this.data.favoriteMovies)
  },
});
