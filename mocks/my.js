const my = {

  request: jest.fn(({ url, success, fail }) => {
    if (url.includes("tmdb.org")) {
      success({ data: "base64EncodedImageData" });
    } else {
      fail("Error en la petición");
    }
  }),

  
};


module.exports =  my ;