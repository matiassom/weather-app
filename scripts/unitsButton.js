function unitsButton(){
    
    const unitsEdit = document.getElementById("header-menu");

    unitsEdit.hidden?unitsEdit.hidden=false:unitsEdit.hidden=true;

}

function switchMI(){
    const imperialMetric = document.getElementById("imperialMetric");

    console.log(imperialMetric.innerHTML);

    imperialMetric.innerHTML=="Switch to Imperial"?
    imperialMetric.innerHTML="Switch to Metric":
    imperialMetric.innerHTML="Switch to Imperial";


    //imperialMetric.innerHTML = "Switch to Imperial";
}

/*

<label >Switch to Imperial</label>
                <label onclick="switchMI()">Switch to Metric</label>*/