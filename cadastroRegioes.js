const prompt = require("prompt-sync")();
const nomeInvalido = (nome) => nome == "";
const indiceInvalido = (indice) =>
  indice < 0 || indice >= pais.length || isNaN(indice);
const pais = [];
//-----------------------------------------------------------------------
const regiao = () => {
  let rega = {}; // não posso adicionar atributos em algo indefinido

  while (true) {
    rega.cidade = prompt("Qual é o nome da cidade? ");
    if (nomeInvalido(rega.cidade)) {
      console.log("O nome da cidade não pode ser vazio");
    } else {
      break;
    }
  }
  while (true) {
    rega.estado = prompt("Qual é o nome do estado? ");
    if (nomeInvalido(rega.estado)) {
      console.log("O nome do estado não pode ser vazio");
    } else {
      break;
    }
  }
  while (true) {
    rega.regiao = prompt("Qual é a região do estado? ");
    if (nomeInvalido(rega.regiao)) {
      console.log("O nome da regiao não pode ser vazio");
    } else {
      break;
    }
  }
  while (true) {
    rega.pais = prompt("Qual é o nome do país? ");
    if (nomeInvalido(rega.pais)) {
      console.log("O nome da país não pode ser vazio");
    } else {
      break;
    }
  }
  return rega;
};
const criar = () => {
  const rega = regiao();

  pais.push(rega);

  console.log("região criada com sucesso");
};
//-----------------------------------------------------------------------
const listagem = () => {
  pais.forEach((rega, i) => {
    console.log("Índice da região: " + (indice + 1));
    console.log("Nome da cidade: " + rega.cidade);
    console.log("Nome do estado: " + rega.estado);
    console.log("Nome da região: " + rega.regiao);
    console.log("Nome do pais: " + rega.pais);
    console.log("");
  });
};
//-----------------------------------------------------------------------
const procurar = () => {
  let achou = prompt("Digite a cidade da região que deseja encontrar: ");
  let cidadeEncontrada = false;
  pais.forEach((rega, indice) => {
    if (rega.cidade === achou) {
      cidadeEncontrada = true;
      console.log("Informações sobre a região:");
      console.log("Número da região: " + (indice + 1));
      console.log("Nome da cidade: " + rega.cidade);
      console.log("Nome do estado: " + rega.estado);
      console.log("Nome da região: " + rega.regiao);
      console.log("Nome do país: " + rega.pais);
      console.log("");
    }
  });
  if (!cidadeEncontrada) {
    console.log("Cidade não encontrada.");
  }
};
//-----------------------------------------------------------------------
const atualizar = () => {
  while (true) {
    if (pais.length == 0) {
      console.log("Lista de regiões vazia");
      break;
    }
    listagem();
    const indice =
      parseInt(prompt("Qual é o índice da região que deseja atualizar? ")) - 1;
    if (indiceInvalido(indice)) {
      console.log("Índice inválido");
    } else {
      const rega = pais[indice];
      console.log("Somente aperte ENTER se não quiser atualizar");
      const novaCidade = prompt(
        "Qual é o novo nome da cidade? (atual: " + rega.cidade + ") "
      );
      if (!nomeInvalido(novaCidade)) {
        rega.cidade = novaCidade;
      }
      const novoEstado = prompt(
        "Qual é o novo nome do estado? (atual: " + rega.estado + ") "
      );
      if (!nomeInvalido(novoEstado)) {
        rega.estado = novoEstado;
      }
      const novaRegiao = prompt(
        "Qual é a nova região do estado? (atual: " + rega.regiao + ") "
      );
      if (!nomeInvalido(novaRegiao)) {
        rega.regiao = novaRegiao;
      }
      const novoPais = prompt(
        "Qual é o novo nome do país? (atual: " + rega.pais + ") "
      );
      if (!nomeInvalido(novoPais)) {
        rega.pais = novoPais;
      }
      pais[indice] = rega;
      console.log("Região atualizada com sucesso.");
      break;
    }
  }
};
//-----------------------------------------------------------------------
const remover = () => {
  let achou = prompt("Digite a cidade da região que deseja encontrar: ");
  let cidadeEncontrada = false;
  pais.forEach((rega, indice) => {
    if (rega.cidade === achou) {
      cidadeEncontrada = true;
      pais.splice(indice, 1);
      console.log(
        "As informações da região da cidade " + achou + " foram apagadas"
      );
    }
  });
  if (!cidadeEncontrada) {
    console.log("Cidade não encontrada.");
  }
};
//-----------------------------------------------------------------------
module.exports = {
  criar,
  listagem,
  procurar,
  atualizar,
  remover,
};
