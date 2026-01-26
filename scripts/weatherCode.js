function weatherCode(wcode){
    let imgTempBig = document.getElementById("imgTempBig");

    console.log("Se está ejecutando. Y wcode es: "+ wcode);

    imgTempBig.className = "imgTempBig"+wcode; 
}