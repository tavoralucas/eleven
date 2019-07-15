(function ModoPagamento(axios, $) {
    $("#hello").hide();
    const localstorage = window.localStorage;
    const apiUrl = "http://localhost:5000";

    const setUserData = (data) => {
        $("#hello").show();
        $("#user-name").html(data.Name);
    }    

    const getUserInfo = async () => {
        const form = localstorage.getItem('form1');
        const {document} = JSON.parse(form);
        console.log(document)
        if (document) {
            const response = await axios.post(`${apiUrl}/userInfo`, {
                document
            });
            console.log(response)
            setUserData(response.data.Result[0].BasicData)
            localstorage.setItem('user', response.data.Result[0].BasicData);
        }
    }

    $("#avancar").on('click', (e) => {
        e.preventDefault();
        window.location.href = 'cartao.html';
    });

    $("#voltar").on('click', (e) => {
        e.preventDefault();
        window.location.href = 'index.html';
    });

    const run = () => {
        getUserInfo();
    }
    run();
  })(axios, $);