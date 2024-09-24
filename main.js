const form = document.getElementById('agenda-contatos');

const nome = [];
const telefone = [];

const codigoPais = parseInt(prompt("Digite o código de páis:"));

let linhas =``;

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    

})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputPhone = document.getElementById('phone');

    if(nome.includes(inputNomeContato.value)){
        alert(`Este contato: ${inputNomeContato} já foi inserido`);
    } else {
        nome.push(inputNomeContato.value);
        telefone.push(parseInt(inputPhone.value));

    let linha = `<tr>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputPhone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }

    inputNomeContato.value = ``;
    inputPhone.value = ``;
} 

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
