function formatearFecha(fechaString) {
    
    const fecha = new Date(fechaString);
   
    const opciones = { 
        weekday: 'long',  
        year: 'numeric', 
        month: 'short',   
        day: 'numeric'   
    };
 
    return fecha.toLocaleDateString('en-US', opciones);
}



