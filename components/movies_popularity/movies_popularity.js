Component({
  mixins: [],
  data: {
    arrayCategoryPopularity:["Popular en Netflix","Tendencia ahora","Peliculas Vistas"],
    imagesMovies:[1,2,3,4,5,7,8],
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {

    // 1. Funcion envia  detalles de peliculas
    clickDestailImages(){
      my.navigateTo({
        url:"/pages/movie_detail_modal/movie_detail_modal"
      })
    }
  },
});
