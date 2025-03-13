
function requestAPI(){


  return new Promise((resolve, reject)=>{

    my.showLoading({ content: 'Cargando...' });

    my.request({

      url:"https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1&api_key=bc70a55a7f7691b908f6dd578f06aaa0",
      method: "GET",
      dataType: 'json',

      success: function(res){
        console.info('RESPUESTA API',res)
        resolve(res);  // ✅ Retorna la respuesta correctamente

      },

      fail: function(res){
        console.error('[API Fail]', res); // Registra errores en consola
        reject(res);

      },

      complete: function (res) {
        my.hideLoading();
        //my.alert({ content: 'EXITO' });
      }

    })
  })
     
}

module.exports = {requestAPI} // Exportamos la funcion