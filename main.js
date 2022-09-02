//salva todo o formulário
const form = document.getElementById("form-agenda");

//para adicionar os emojis
const contatoPessoal = '<img src="./images/pessoal.png" alt="emoji vida pessoal">'
const contatoProfissional = '<img src="./images/work.png" alt="emoji trabalho">'

//array para nomes e telefones
const nomes = [];
const telefones = [];
const tipos = [];

//para salvar o conteúdo das linhas é necessário criar um elemento global, já que o submit do form apaga tudo
let linhas = "";

form.addEventListener("submit", function(e){
    //evita que se reinicie
    e.preventDefault();

    adicionaLinha();
});

function adicionaLinha() {
    const nomecontato = document.getElementById("nome-contato");
    const telcontato = document.getElementById("tel-contato");
    const tipocontato = document.getElementById("tipo-contato");

    //verificar se contato já existe
    //verifica a posição no array para comparar se é profissional ou pessoal

    if (nomes.includes(nomecontato.value) && tipos[nomes.indexOf(nomecontato.value, 0)]==tipocontato.value){
            
        alert(`O contato ${nomecontato.value} já existe. Tente especificar se é pessoal ou profissional.`)

    } else {

    //adiciona novos elementos no array
    nomes.push(nomecontato.value);
    telefones.push(telcontato.value);
    tipos.push(tipocontato.value);


    //adicionar as informações no corpo da tabela para que as linhas sejam mantidas e novas adicionadas

    //receber como uma string
    let linha = "<tr>";

    //o += é uma concatenação
    //adicionando os valores obtidos no corpo do html
    //não esquecer do .value

    linha += `<td>${nomecontato.value}</td>`;
    linha += `<td>${telcontato.value}</td>`;
    linha += `<td>${tipocontato.value === "pessoal" ? contatoPessoal : contatoProfissional}</td>`;
    linha += `</tr>`;

    //soma a linha à string linha
    linhas += linha;

    atualizaTabela();
    }


    //limpar o campo depois de adicionar o conteúdo

}

function atualizaTabela(){
        //recuperar o corpo da tabela
        const corpoTabela = document.querySelector("tbody");

        //inserir o conteúdo dentro da tag
        corpoTabela.innerHTML = linhas;
}


