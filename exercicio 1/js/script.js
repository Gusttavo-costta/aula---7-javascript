class Loja {
    constructor(nome, localicade, marca, dono,) {
        this.nome = nome;
        this.localicade = localicade;
        this.marca = marca;
        this.dono = dono;
        this.produtos = [];
        // cadastrar
        this.cadastrarProdutos = function (nome, valor, tamanho, marca) {
            this.produtos.push(new Produto(nome,valor,tamanho,marca));
            return `O produto ${nome} foi adicionado com sucesso!`
        };
        // listar
        this.listarProdutos = function(){
            console.log(this.produtos);
            return`Àqui está a lista de produtos`
        }
        this.removerProdutos = function(indice) {
             this.produtos.splice(indice,1);
             return `O produto de indice ${indice} foi removido com sucesso!`
        }
    }
}

class Produto {
    constructor(nome, valor, tamanho, marca) {
        this.nome = nome;
        this.valor = valor;
        this.tamanho = tamanho;
        this.marca = marca;
    }
}

// comandos
const americanas = new Loja("Lojas americanas", "W3SUl", "Americanas express", "Victor")