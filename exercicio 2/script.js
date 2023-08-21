const nome = document.querySelector("#nome");
const descricao = document.querySelector("#descricao");
const data = document.querySelector("#data");
const diretor = document.querySelector("#Diretor");
const categoria = document.querySelector("#categoria");
const cadastrarBtn = document.querySelector("#cadastrar");
const resultado = document.querySelector("#resultado");

cadastrarBtn.addEventListener("click", cadastrar);

function cadastrar (){
    class Filme{
        constructor(nome,descricao,Data,diretor,categoria){
            this.nome = nome;
            this.descricao = descricao;
            this.Data = Data;
            this.diretor = diretor;
            this.categoria = categoria;
        }
    }
    let nomeInput = nome.value;
    let descricaoInput = descricao.value;
    let dataInput = data.value;
    let diretorInput = diretor.value;
    let categoriaInput = categoria.value;

    var filme = new Filme (nomeInput,descricaoInput,dataInput,diretorInput,categoriaInput)
    resultado.style.display = "block";
    resultado.innerHTML = `Nome: ${filme.nome}<br> Descrição: ${filme.descricao}<br> Data: ${filme.data}<br>`;
}    
