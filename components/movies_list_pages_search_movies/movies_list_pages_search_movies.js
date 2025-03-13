Component({
  mixins: [],
  data: {
    moviesList :["Pelicula 1","Pelicula 2","Pelicula 3","Pelicula 4", "Pelicula 5", "Pelicula 6","Pelicula 7","Pelicula 8", "Pelicula 9","Pelicula 10","Pelicula 11","Pelicula 12"],
    titleMovies:["Titulo 1","Titulo 2" ,"Titulo 3","Titulo 4","Titulo 5", "Titulo 6","Titulo 7","Titulo 8","Titulo 9","Titulo 10","Titulo 11","Titulo 12"],
    
  },
  props: {
    valuesProps:"460px" // ancho del scroll de Movimiento
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    clickDetailSearch(){
      my.navigateTo({
        url:"/pages/movie_detail_modal/movie_detail_modal"
      })
    }
  },
});
