const btnAdd = document.querySelector('#adicionar-paciente');

btnAdd.addEventListener('click', function (e) {
    e.preventDefault();

    const form = document.querySelector('#form-adiciona');

    const paciente = obtemPacienteDoForm(form);
    
    let erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensErro(erros);
        return;
    }

    addPacienteNaTabela(paciente);

    form.reset();
    let mensagemErro = document.querySelector('#mensagensErro');
    mensagemErro.innerHTML = '';
})

function addPacienteNaTabela(paciente) {
    const pacienteTr = montaTr(paciente);
    const tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}

function exibeMensagensErro(erros) {
    let ul = document.querySelector('#mensagensErro');
    ul.innerHTML = '';
    erros.forEach(function(erro) {
        let li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoForm(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    const pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function montaTd(dado, classe) {
    const td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {
    let erros = [];
     
    if (paciente.nome.length == 0) erros.push('O nome não pode ser em branco!');

    if (!validaPeso(paciente.peso) || paciente.peso.length == 0) erros.push('Peso inválido!');

    if (!validaAltura(paciente.altura) || paciente.altura.length == 0) erros.push('Altura inválida!');

    if (paciente.gordura.length == 0) erros.push('A gordura não pode ser em branco!');
    
    return erros;
}