async function weather(lat,lon) {

   
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`;
    let dateAndDay = document.getElementById("dateAndDay"); 
    let tempValue = document.getElementById("tempValue");
    
    try{
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error(`Error en la red: ${respuesta.status}`);
            }

        const datos = await respuesta.json();

        ///Borrar este console log despues de pruebas.
        console.log(datos);

        const fecha = datos.current_weather.time;
        const fechaFormateada = formatearFecha(fecha);
        const wcode = datos.current_weather.weathercode;
        dateAndDay.innerHTML = fechaFormateada;
        tempValue.innerHTML = datos.current_weather.temperature + "°";

        
        //console.log("wcode:  "+ wcode);
        weatherCode(wcode);

    }catch (error) {
    
    console.error("Hubo un problema con la petición:", error);
  }
    
}