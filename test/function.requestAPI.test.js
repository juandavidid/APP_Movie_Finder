 global.my  = require("../mocks/myAPI"); // Ajusta la ruta según la ubicación del archivo

const { requestAPI } = require("../utils/function_requests.js"); 

jest.mock("../mocks/my"); // Asegura que Jest use el mock de `my.js`

describe("Pruebas de requestAPI", () => {

  it("Debe obtener datos correctamente cuando la petición es exitosa", async () => {
    // Simula una respuesta exitosa
    my.request.mockImplementation(({ success }) => {
      success({ data: { results: ["Movie 1", "Movie 2"] } });
    });

    const response = await requestAPI();
    expect(response.data.results).toEqual(["Movie 1", "Movie 2"]);
  });

  it("Debe manejar errores cuando la petición falla", async () => {
    // Simula una falla en la petición
    my.request.mockImplementation(({ fail }) => {
      fail({ error: "Network Error" });
    });

    await expect(requestAPI()).rejects.toEqual({ error: "Network Error" });
  });

});
