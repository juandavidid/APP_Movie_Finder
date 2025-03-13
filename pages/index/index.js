// Importar Data API - Posts
import { requestAPI } from "/utils/function_requests";
import { requestAPIimges } from "/utils/function_requests_img";

Page({
  data:{
    valueModal: false,
    imageRoutes: [], // almacena las imagenes
    src:"",
  },
  //1. Funcion abre  el la venta Modal
  clickImages(){
    this.setData({ valueModal: true }); // Alterna entre true y false
  },


  
  onLoad(query) {
    

    // Peticion para traer datos de la pelicula
    requestAPI().then( data =>{
      console.log("DATA MOVIES ",data.data.results)
      // Extraer las rutas de imágenes
      const imageRoutes = data.data.results.map(movie => movie.backdrop_path);

      

        // Llamar a la función que obtiene las imágenes en base64
        Promise.all(imageRoutes.map(route => requestAPIimges(route)))
            .then(images => {
                
                // Guardar imágenes en el estado
                this.setData({ 
                  imageRoutes: images,
                  src: images.length > 0 ? images[0] : "" // Guarda la primera imagen en src
                 });
            })
            .catch(error => console.error("Error al obtener las imágenes:", error));
            console.log(this.data.imageRoutes)
    }).catch(error => { console.error("Error al obtener los datos:", error);})

    




  },
  onReady() {
    // Page loading is complete
  },
  onShow() {
    // Page display
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {
    // Page is pulled down
  },
  onReachBottom() {
    // Page is pulled to the bottom
  },
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
