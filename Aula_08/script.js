function adicionarOrcamento() {
    var cliente = document.getElementById("cliente").value.trim();
    var descricao = document.getElementById("descricao").value.trim();
    var precoUnitario = parseFloat(document.getElementById("preco-unitario").value);
    var quantidade = parseInt(document.getElementById("quantidade").value, 10);
    var movel = document.getElementById("mobile").value.trim();
    var custo = precoUnitario * (quantidade || 1);
    var lista = document.getElementById("lista-orcamentos");

    var linha = document.createElement("tr");
    linha.innerHTML = "<td>" + cliente + "</td>" +
        "<td>" + movel + "</td>" +
        "<td>" + quantidade + "</td>" +
        "<td>" + descricao + "</td>" +
        "<td>R$ " + precoUnitario.toFixed(2) + "</td>" +
        "<td>R$ " + custo.toFixed(2) + "</td>";
    lista.appendChild(linha);

    document.getElementById("orcamento-form").reset();
    return false;
}
