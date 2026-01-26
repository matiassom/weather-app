
async function cityFetch() {

    const city = document.getElementById("inputPlace");
    let cityAndCountry = document.getElementById("cityAndCountry");

    const url =`https://geocoding-api.open-meteo.com/v1/search?name=${city.value}&count=5&language=en&format=json`;
    
 try {
    // 1. Hacer la petición
    const respuesta = await fetch(url);

    // 2. Verificar si la respuesta es correcta (status 200-299)
    if (!respuesta.ok) {
      throw new Error(`Error en la red: ${respuesta.status}`);
    }

    // 3. Convertir la respuesta a JSON
    const datos = await respuesta.json();

    // 4. Usar los datos
   

    cityAndCountry.innerHTML = datos.results[0].admin1+" / "+datos.results[0].country;

    weather(datos.results[0].latitude,datos.results[0].longitude)

  } catch (error) {
    // 5. Manejar cualquier error (red, sintaxis, etc.)
    console.error("Hubo un problema con la petición:", error);
  }



   

    
}