function soma() {
    var campo1 = document.getElementById("campo1");
    var campo2 = document.getElementById("campo2");
    var resultado = document.getElementById("resultado");
    console.log(typeof campo1.value);
    

    resultado.innerHTML = "Resultado: " + (parseInt(campo1.value) + parseInt(campo2.value));
}

function addItem() {
    var campotarefas = document.getElementById("campotarefa");
    var listatarefas = document.getElementById("lista");
    
    if (campotarefas.value.trim == "") {
        var item = document.createElement("li");
        item.innerHTML = campotarefas.value;
        listatarefas.appendChild(item);
    }
    campotarefas.value = "";
}