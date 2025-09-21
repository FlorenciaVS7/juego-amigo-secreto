//Array para almacenar los amigos ingresados
const inputAmigo = document.getElementById("amigo");
let lista_amigos= [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

//Función para agregar amigos
function agregarAmigo(){
    const nombre = inputAmigo.value.trim();

    // Validar entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    lista_amigos.push(inputAmigo.value);
    inputAmigo.value = "";
    actualizarListaAmigos();
}

//Función para actualizar la lista de amigos
function actualizarListaAmigos(){
    ulListaAmigos.innerHTML = "";

    for (let i = 0; i < lista_amigos.length; i++) {
        ulListaAmigos.innerHTML += `<li>${lista_amigos[i]}</li>`;
    }
}

//Función para sortear amigos
function  sortearAmigo(){
    if (lista_amigos.length === 0) {
        alert("No hay amigos en la lista.");
        return;
    }
    const amigoAleatorio = Math.floor(Math.random()*lista_amigos.length);
    const amigoSecreto = lista_amigos[amigoAleatorio];
    ulResultado.innerHTML = `<li>El amigo secreto es: <strong> ${amigoSecreto}</strong></li>`;
}

