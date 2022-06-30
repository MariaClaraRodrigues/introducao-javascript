let pacientes = document.querySelectorAll('.paciente');

for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];

    const tdPeso = paciente.querySelector('.info-peso');
    const tdAltura = paciente.querySelector('.info-altura');

    const peso = tdPeso.textContent;
    const altura = tdAltura.textContent;

    const tdImc = paciente.querySelector('.info-imc');

    let pesoEhValido = validaPeso(peso);
    let alturaEhValido = validaAltura(altura);

    if (!pesoEhValido) {
        pesoEhValido = false;
        tdPeso.textContent = 'Peso inválido!';
        paciente.classList.add("paciente-invalido");
    } if (!alturaEhValido) {
        alturaEhValido = false;
        tdAltura.textContent = 'Altura inválido!';
        paciente.classList.add('paciente-invalido');
    } if (pesoEhValido && alturaEhValido) {
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 500) {
        return true;
    } return false;
}

function validaAltura(altura) {
    if (altura >= 0 && altura < 3.00) {
        return true;
    } return false;
}

function calculaImc(peso, altura) {
    let imc = 0;
    imc = Number(peso / (altura * 2));
    return imc.toFixed(2);
}
