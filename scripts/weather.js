async function weather(lat,lon) {

   
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;
    let dateAndDay = document.getElementById("dateAndDay"); 
    let tempValue = document.getElementById("tempValue");
    let feelsLikeTemp = document.getElementById("feelsLikeTemp");
    let humidityDate = document.getElementById("humidityDate");
    let windData = document.getElementById("windData");
    let precipitationData = document.getElementById("precipitationData");

    const fieldMax = document.querySelectorAll(".dayCardTempMax");
    const fieldMin = document.querySelectorAll(".dayCardTempMin");
    const CardSymbol = document.querySelectorAll(".dayCardSymbol");
    const dayName = document.querySelectorAll(".dayCardName")


    





    try{
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error(`Error en la red: ${respuesta.status}`);
            }

        const datos = await respuesta.json();

        ///Borrar este console log despues de pruebas.
        console.log(datos);

        const fecha = datos.current.time;
        const fechaFormateada = formatearFecha(fecha);
        const wcode = datos.current.weather_code;
        dateAndDay.innerHTML = fechaFormateada;
        tempValue.innerHTML = datos.current.temperature_2m + "°";
        feelsLikeTemp.innerHTML = datos.current.apparent_temperature +" "+ datos.current_units.apparent_temperature;
        humidityDate.innerHTML = datos.current.relative_humidity_2m+" "+datos.current_units.relative_humidity_2m;
        windData.innerHTML = datos.current.wind_speed_10m +" "+ datos.current_units.wind_speed_10m;
        precipitationData.innerHTML = datos.current.precipitation +" "+ datos.current_units.precipitation;
        
    
 


        for(n=0;n<7;n++){
            fieldMax[n].innerHTML= datos.daily.temperature_2m_max[n]+"°";
            fieldMin[n].innerHTML= datos.daily.temperature_2m_min[n]+"°";

            CardSymbol[n].classList.add("imgTempBig"+datos.daily.weather_code[n]);

            let days = new Date(datos.daily.time[n] + "T00:00:00");    
            dayName[n].innerHTML = days.toLocaleDateString('en-US', { weekday: 'long' });
        }

        weatherCode(wcode);//Esta linea dibuja el weather_code principal.

    }catch (error) {
    
    console.error("Hubo un problema con la petición:", error);
  }
    
}