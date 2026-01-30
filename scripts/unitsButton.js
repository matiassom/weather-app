function unitsButton(){
    
    const unitsEdit = document.getElementById("header-menu");

    unitsEdit.hidden?unitsEdit.hidden=false:unitsEdit.hidden=true;

}

function switchMI(){
    const imperialMetric = document.getElementById("imperialMetric");
    let metricData = document.querySelectorAll(".metricData");
    let imperialData = document.querySelectorAll(".imperialData");

    if(imperialMetric.innerHTML=="Switch to Imperial"){
        imperialMetric.innerHTML="Switch to Metric";

        



          metricData.forEach(element => {
            element.style.color ="hsl(240, 6%, 70%)";
        });

        imperialData.forEach(element=>{
            element.style.color ="hsl(0, 0%, 100%)";
        }) 
    } else{
        imperialMetric.innerHTML="Switch to Imperial";
        metricData.forEach(element => {
            element.style.color = "hsl(0, 0%, 100%)";
        });

        imperialData.forEach(element=>{
            element.style.color = " hsl(240, 6%, 70%)";
        })

      
    }
     
}

