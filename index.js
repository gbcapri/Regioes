const prompt = require("prompt-sync")();
const { criar, atualizar, procurar, remover, listagem } = require("./cadastroRegioes.js");

while (true) {
  console.log(`
        1 - adicionar região
        2 - Listar regiões
        3 - Procurar uma região especifica
        4 - buscar região pelo nome da cidade
        5 - Remover
        0 - Sair
        `);

  const opcao = prompt("Qual opção deseja?");

  switch (opcao) {
    case "1":
        criar()
      break;
    case "2":
        listagem()
      break;
    case "3":
        procurar()
      break;
    case "4":
        atualizar()
      break;
    case "5":
        remover()
      break;
    case "0":
        process.exit()
      break;
    default:
        console.log("Opção inválida")
      break;
  }
}