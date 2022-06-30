let btnAdicionar = document.querySelector('#buscar-paciente');

btnAdicionar.addEventListener('click', function () {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');
    xhr.addEventListener('load', function () {
        let erroAjax = document.querySelector('#erro-ajax');
        if (xhr.status == 200) {
            erroAjax.classList.add('invisivel');
            let res = xhr.responseText;
            let pacientes = JSON.parse(res);

            pacientes.forEach(function (paciente) {
                addPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove('invisivel');
            erroAjax.classList.add('mensagensErro');
        }

    });
    xhr.send();
});