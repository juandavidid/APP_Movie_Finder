

function requestAPIimges(rutas){

  return new Promise((resolve, reject) => {
    my.request({
      url: "https://image.tmdb.org/t/p/w500" + rutas,
      method: "GET",
      dataType: "base64",
      success: res => resolve(res.data),
      fail: err => reject(err)
    });
  });


}

module.exports = { requestAPIimges}