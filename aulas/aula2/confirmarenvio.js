window.addEventListener('load', function () {

    const getQueryParams = ( params, url ) => {
        let href = url;
        // this is an expression to get query strings
        let regexp = new RegExp( '[?&]' + params + '=([^&#]*)', 'i' );
        let qString = regexp.exec(href);
        return qString ? qString[1] : null;
    };

    nomeEmissor = getQueryParams("nome-emissor", this.document.URL).replaceAll("+", " ");

    this.document.getElementById("confirmar-dados").textContent = "Obrigado, " + nomeEmissor + " pelo seu pedido!";
})
