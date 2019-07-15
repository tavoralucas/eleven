(function Cartao(axios, $) {
    
    const localStorage = window.localStorage;

    const getFormData = () => {
        return {
          numeroCartao: $( "#numeroCartao" ).val(),
          nomeCartao: $( "#nomeCartao" ).val(),
          validade: $( "#validade" ).val(),
          codigoSeguranca: $( "#codigoSeguranca" ).val(),
        }
    }

     const submit = async () => {
        let form = getFormData();
        console.log(form);
        localStorage.setItem('form-card', form);
        window.location.href = 'experiencias-compra.html';
     }

     $("#avancar").on('click', (e) => {
        e.preventDefault();
        submit();
    });

    $("#voltar").on('click', (e) => {
      e.preventDefault();
      window.location.href = 'modo-pagamento.html';
    });
    
  })(axios, $);