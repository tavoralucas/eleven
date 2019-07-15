(function Experiencia(axios, $) {

    $("#select").on('click', (e) => {
        e.preventDefault();
        $('#exp1').css('box-shadow', 'rgb(103, 97, 181) 0px 1px 15px 1px');
    });

    $("#voltar").on('click', (e) => {
      e.preventDefault();
      window.location.href = 'cartao.html';
    });

    $("#voltar").on('click', (e) => {
        e.preventDefault();
        window.location.href = 'index.html';
    });
    
})(axios, $);