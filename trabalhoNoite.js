const readline = require('readline-sync')


let abrigos = []


function cadastrarAbrigo() {
    console.log("\n--- CADASTRO DE ABRIGO ---");
    let nome = readline.question("Nome do abrigo: ");
    let endereco = readline.question("Endereco do abrigo: ");
    let telefone = readline.question("Telefone do abrigo: ");
    let capacidade = Number(readline.question("Capacidade de lotacao do abrigo: "))
    
    
    let novoAbrigo = {
        nome: nome,
        endereco: endereco,
        telefone: telefone,
        capacidade: capacidade
    };

    // Adicionar abrigo ao banco de dados
    abrigos.push(novoAbrigo);
    
    console.log("Abrigo cadastrado com sucesso!\n");
}

// Função para listar todos os abrigos cadastrados
function listarAbrigos() {
    console.log("\n---------------------");
    console.log("LISTAGEM DE ABRIGOS:");
    console.log("---------------------");
    console.log("CÓDIGO |      NOME       |           ENDEREÇO          |   TELEFONE   | CAPACIDADE");
    console.log("----------------------------------------------------------------------");
    for (let i = 0; i < abrigos.length; i++) {
        const abrigo = abrigos[i];
        //pesquisei sobre e achei padStart e padEnd que coloca string dentro de string até o comprimento que eu queira
        console.log(`  ${i.toString().padStart(3, '0')}   | ${abrigo.nome.padEnd(15)} | ${abrigo.endereco.padEnd(30)} | ${abrigo.telefone.padEnd(12)} | ${abrigo.capacidade.toString().padStart(3)}`);
    }
    console.log("----------------------------------------------------------------------\n");
}    

// Função para procurar abrigo por cidade
function procurarAbrigo() {
    console.log("\n--- PROCURAR ABRIGO ---");
    let cidade = readline.question("Qual cidade voce esta? ");

    let abrigosNaCidade = abrigos.filter(abrigo => abrigo.endereco.toLowerCase().includes(cidade.toLowerCase()));

    if (abrigosNaCidade.length === 0) {
        console.log("Não há abrigos cadastrados nesta cidade.\n");
    } else {
        console.log("\n---------------------");
        console.log("LISTAGEM DE ABRIGOS:");
        console.log("---------------------");
        console.log("CÓDIGO |      NOME       |           ENDEREÇO          |   TELEFONE   | CAPACIDADE");
        console.log("----------------------------------------------------------------------");
        for (let index = 0; index < abrigosNaCidade.length; index++) {
            const abrigo = abrigosNaCidade[index];
            console.log(`  ${index.toString().padStart(3, '0')}   | ${abrigo.nome.padEnd(15)} | ${abrigo.endereco.padEnd(30)} | ${abrigo.telefone.padEnd(12)} | ${abrigo.capacidade.toString().padStart(3)}`);
        }
        console.log("----------------------------------------------------------------------\n");
    }
}        

// Loop principal do programa
while (true) {
    console.log("===== ABRIGOS TEMPORÁRIOS =====");
    console.log("1. Cadastrar abrigo");
    console.log("2. Listar abrigos");
    console.log("3. Procurar abrigo");
    console.log("4. Sair");
    let opcao = Number(readline.question("Escolha uma opcao: "));

    switch (opcao) {
        case 1:
            cadastrarAbrigo();
            break;
        case 2:
            listarAbrigos();
            break;
        case 3:
            procurarAbrigo();
            break;
        case 4:
            console.log("Encerrando o programa...");
            return; // Encerra o programa
        default:
            console.log("Opcao inválida. Tente novamente.\n");
            break;
    }
}

// Função para preencher uma string com espaços até o comprimento desejado
function preencherEspacos(str, length) {
    let spacesToAdd = length - str.length;
    if (spacesToAdd > 0) {
        for (let i = 0; i < spacesToAdd; i++) {
            str += " "; // Adiciona um espaço à string
        }
    }
    return str;
}
