global.my = require("../mocks/my"); // Ajusta la ruta según la ubicación del archivo

console.log(my)

const { requestAPIimges } = require("../utils/function_requests_img.js");

jest.mock('../mocks/my'); // Asegura que Jest use el mock de `my.js`

describe("Pruebas de requestAPIimages", () => {
  it("Debe obtener la imagen correctamente", async () => {
    const ruta = "/valid-image.jpg";
    await expect(requestAPIimges(ruta)).resolves.toBe("base64EncodedImageData");
  });

  it("Debe fallar cuando la URL es incorrecta", async () => {
    my.request.mockImplementationOnce(({ fail }) => fail("Error en la petición"));
    const ruta = "/invalid-image.jpg";
    await expect(requestAPIimges(ruta)).rejects.toBe("Error en la petición");
  });
});