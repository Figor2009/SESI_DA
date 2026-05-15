function adicionarOrcamento() {
    var cliente = document.getElementById("cliente").value.trim();
    var unidade = document.getElementById("unidade").value.trim();
    var descricao = document.getElementById("descricao").value.trim();
    var custo = parseFloat(document.getElementById("custo").value);
    var lista = document.getElementById("lista-orcamentos");

    var linha = document.createElement("tr");
    linha.innerHTML = "<td>" + cliente + "</td>" +
        "<td>" + unidade + "</td>" +
        "<td>" + descricao + "</td>" +
        "<td>R$ " + custo + "</td>";
    lista.appendChild(linha);

    document.getElementById("orcamento-form").reset();
    return false;
}