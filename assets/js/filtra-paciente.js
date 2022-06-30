const campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function() {
    let pacientes = document.querySelectorAll('.paciente');

    if (this.value.length > 0) {
        for(let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            let nomeTd = paciente.querySelector('.info-nome');
            let nome = nomeTd.textContent;
            let expressao = new RegExp(this.value, 'i');
            
            if (!expressao.test(nome)) {
                paciente.classList.add('invisivel');
            } else {
                paciente.classList.remove('invisivel');
            }
        }
    } else {
        for(let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            paciente.classList.remove('invisivel');
        }
    }
});