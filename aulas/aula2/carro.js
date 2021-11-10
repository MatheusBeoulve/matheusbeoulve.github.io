window.addEventListener('load', function () {

    carroAssegurado = document.getElementById("carro-assegurado");
    usouSeguroCarro = document.getElementById("usou-seguro-carro");

    carroAssegurado.addEventListener('change', function() {
        carroAsseguradoState = carroAssegurado.checked;
        usouSeguroCarro.disabled = !carroAsseguradoState;
        if(!carroAsseguradoState) {
            usouSeguroCarro.checked = false;
        }
    });
});