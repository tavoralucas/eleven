(function Main(axios, $) {
    
    const API_URL = "http://localhost:5000";
    const localStorage = window.localStorage;

    const setPacote = () => {
      const url_string = window.location.href;
      const url = new URL(url_string);
      const nomePacote = url.searchParams.get("pacote");
      $('#nomePacote').html(nomePacote);
    }
    

    const setDestinoDropdown = (myOptions) => {
        const mySelect = $('#destino');
        mySelect.append(
          $(`<option></option>`).val(null).html(null)
        );
        $.each(myOptions, (i, data) => {
          mySelect.append(
            $(`<option></option>`).val(data.siglaPais).html(data.pais)
          );
        });
    }

    const getDestinos = async () => {
        const response = await axios.get(`${API_URL}/destinos`);
        setDestinoDropdown(response.data);
    }

    const setTipoPacoteDropdown = (myOptions) => {
        const mySelect = $('#tipoViagem');
        mySelect.append(
          $(`<option></option>`).val(null).html(null)
        );
        $.each(myOptions, (i, data) => {
          mySelect.append(
            $(`<option></option>`).val(data.codigoTipoViagem).html(data.tipo)
          );
        });
    }

    const getTipoPacote = async () => {
        const response = await axios.get(`${API_URL}/tipoviagem`);
        setTipoPacoteDropdown(response.data);
    }

    const getFormData = () => {
        return {
            destino: $( "#destino" ).val(),
            dataIda: $( "#dataIda" ).val(),
            dataVolta: $( "#dataVolta" ).val(),
            tipoViagem: $( "#tipoViagem" ).val(),
            document: $("#document").val(),
        }
    }

     const submit = async () => {
        let form = getFormData();
        console.log(form);
        localStorage.setItem('form1', JSON.stringify(form));
        window.location.href = 'pacotes.html';
     }

     $("#avancar").on('click', (e) => {
        e.preventDefault();
        submit();
    });
    
    const run = () => {
      
      getDestinos();
      getTipoPacote();
      setPacote();
     
    }
  
    run();
  })(axios, $);