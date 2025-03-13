// Importar Data API - Posts
import { requestAPI } from "/utils/function_requests";
import { requestAPIimges } from "/utils/function_requests_img";


Component({
  mixins: [],
  data: {
    arrayCategoryPopularity:["Popular en Netflix","Tendencia ahora","Peliculas Vistas"],
    //imagesMovies:[1,2,3,4,5,7,8],
    movies: [] // Guardará los datos de las películas (imagen + título)
  },
  props: {},
  didMount() {
    this.loadMovies();
  },
  didUpdate() {},
  didUnmount() {},
  methods: {

    // 1. Funcion envia  detalles de peliculas
    clickDestailImages(){
      my.navigateTo({
        url:"/pages/movie_detail_modal/movie_detail_modal"
      })
    },

    // 2. Funcion obtiene la data Peliculas
    loadMovies() {

      requestAPI()
        .then(data => {
          const results = data.data.results.slice(0, 5); // Obtener solo 5 películas

          const movies = results.map(movie => ({
            title: movie.original_title, // Obtener el título
            imagePath: movie.backdrop_path // Ruta de la imagen
          }));

          console.log(movies)

          // Convertir imágenes a Base64
          Promise.all(movies.map(movie => requestAPIimges(movie.imagePath)))
            .then(images => {
              const updatedMovies = movies.map((movie, index) => ({
                title: movie.title,
                image: images[index] // Imagen en Base64
              }));

              this.setData({ movies: updatedMovies });
              console.log(this.data.movies)
            })
            .catch(error => console.error("Error al obtener imágenes:", error));
        })
        .catch(error => console.error("Error al obtener datos:", error));
    }
  }
  
});
