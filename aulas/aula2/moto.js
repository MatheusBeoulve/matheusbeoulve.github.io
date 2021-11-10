window.addEventListener('load', function () {
    
    motoAssegurada = document.getElementById("moto-assegurada");
    usouSeguroMoto = document.getElementById("usou-seguro-moto");

    motoAssegurada.addEventListener('change', function() {
        motoAsseguradaState = motoAssegurada.checked;
        usouSeguroMoto.disabled = !motoAsseguradaState;
        if(!motoAsseguradaState) {
            usouSeguroMoto.checked = false;
        }
    }); 
});
