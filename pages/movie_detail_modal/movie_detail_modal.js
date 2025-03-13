// Importar Data API - Posts
import { requestAPI } from "/utils/function_requests";
import { requestAPIimges } from "/utils/function_requests_img";
Page({
  data: {

    src:"",
    titleMovie:"",
    description:"",
    date:""

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

  addToFavorites() {
    // Obtener la lista actual de favoritos desde el almacenamiento local
    let favorites = my.getStorageSync({ key: 'favorites' }).data || [];

    // Crear un objeto con los datos de la película
    const movie = {
        title: this.data.titleMovie,
        description: this.data.description,
        date: this.data.date,
        image: this.data.src
    };

    // Verificar si la película ya está en la lista
    const exists = favorites.some(fav => fav.title === movie.title);
    if (!exists) {
        favorites.push(movie);
        my.setStorageSync({ key: 'favorites', data: favorites });
        my.showToast({ content: 'Agregado a favoritos' });
    } else {
        my.showToast({ content: 'La película ya está en tu lista' });
    }
  },



  onLoad() {

    // Peticion para traer datos de la pelicula
    requestAPI().then( data =>{
      console.log("DATA MOVIES ",data.data.results)

      const movieData = data.data.results[3]; // Posicion de la pelicula
      // Formatear la fecha
      const formattedDate = new Date(movieData.release_date).toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      });

      this.setData({
        titleMovie:data.data.results[5].title,
        description:data.data.results[5].overview,
        //date:data.data.results[1].release_date
        date:formattedDate
      })
      // Extraer las rutas de imágenes
      const imageRoutes = data.data.results.map(movie => movie.backdrop_path);

  
        // Llamar a la función que obtiene las imágenes en base64
        Promise.all(imageRoutes.map(route => requestAPIimges(route)))
            .then(images => {
                
                // Guardar imágenes en el estado
                this.setData({ 
                  imageRoutes: images,
                  src: images.length > 0 ? images[5] : "" // Guarda la primera imagen en src
                 });
            })
            .catch(error => console.error("Error al obtener las imágenes:", error));
            console.log(this.data.imageRoutes)
    }).catch(error => { console.error("Error al obtener los datos:", error);})
  },
});
