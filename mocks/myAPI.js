const my = {
  request: jest.fn(({ url, success, fail }) => {
    if (url.includes("tmdb.org") || url.includes("themoviedb.org")) {
      success({ data: { results: [{ title: "Movie 1" }, { title: "Movie 2" }] } }); // Simula respuesta JSON
    } else {
      fail("Error en la petición");
    }
  }),

  showLoading: jest.fn(),
  hideLoading: jest.fn(),
};

module.exports =  my ;