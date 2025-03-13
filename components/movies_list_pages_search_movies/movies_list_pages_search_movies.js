// Importar Data API - Posts
import { requestAPI } from "/utils/function_requests";
import { requestAPIimges } from "/utils/function_requests_img";
Component({
  mixins: [],
  data: {
    movies: [], // Guardará los datos de las películas (imagen + título)
    allMovies: [] // Se almacena la lista completa para no perder los datos originales
  },
  props: {
    valuesProps:"403px", // ancho del scroll de Movimiento
    searchQuery: "" // Prop que recibirá el texto del input
  },
  didMount() {
    this.loadMovies();
  },
  didUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.filterMovies(this.props.searchQuery);
    }
  },
  didUnmount() {},
  methods: {
    // 1.Me redirige a una Pagina
    clickDetailSearch(){
      my.navigateTo({
        url:"/pages/movie_detail_modal/movie_detail_modal"
      })
    },
    // 2. Funcion obtiene la data Peliculas
    loadMovies() {
      requestAPI()
        .then(data => {
          const results = data.data.results.slice(0, 20); // Obtener solo 5 películas
          const movies = results.map(movie => ({
            //title: movie.original_title, // Obtener el título
            title: movie.original_title.toLowerCase(), // Convertimos a minúsculas para comparación
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

              this.setData({ movies: updatedMovies, allMovies: updatedMovies  });
              console.log(this.data.movies)
            })
            .catch(error => console.error("Error al obtener imágenes:", error));
        })
        .catch(error => console.error("Error al obtener datos:", error));
    },
    // 3. Filtrar por Nombre de Pelicula
    filterMovies(query) {
      if (!query) {
        this.setData({ movies: this.data.allMovies }); // Restauramos la lista original si el input está vacío
      } else {
        const filteredMovies = this.data.allMovies.filter(movie => 
          movie.title.includes(query)
        );
        this.setData({ movies: filteredMovies });
      }
    }

  }
});
