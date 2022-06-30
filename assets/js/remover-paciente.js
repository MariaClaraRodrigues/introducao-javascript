const paciente = document.querySelectorAll(".paciente");
const tabela = document.querySelector('table');

tabela.addEventListener('dblclick', function(e) {
    e.target.parentNode.classList.add('fadeOut');
    setTimeout(function() {
        e.target.parentNode.remove();
    },500);
});

// paciente.forEach(function(pacientes) {
//     pacientes.addEventListener("dblclick", function() {
//         this.remove();
//     });
// });