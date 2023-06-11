let resultado = document.getElementById('resultado')

function piedra() {
    let cpu = ["piedra", "papel", "tijera"];

    switch (cpu[Math.floor(Math.random() * cpu.length)]) {
        case "piedra":
            resultado.innerHTML = "¡La CPU eligió Piedra, Empataron!";
            break;
        case "papel":
            resultado.innerHTML = "¡La CPU eligió Papel, Perdiste!";
            break;
        case "tijera":
            resultado.innerHTML = "¡La CPU eligió Tijera, Ganaste!";
            break;
    }
}

function papel() {
    let cpu = ["piedra", "papel", "tijera"];

    switch (cpu[Math.floor(Math.random() * cpu.length)]) {
        case "piedra":
            resultado.innerHTML = "¡La CPU eligió Piedra, Ganaste!";
            break;
        case "papel":
            resultado.innerHTML = "¡La CPU eligió Papel, Empataron!";
            break;
        case "tijera":
            resultado.innerHTML = "¡La CPU elegió Tijera, Perdiste!";
            break;
    }
}

function tijera() {
    let cpu = ["piedra", "papel", "tijera"];

    switch (cpu[Math.floor(Math.random() * cpu.length)]) {
        case "piedra":
            resultado.innerHTML = "¡La CPU eligió Piedra, Perdiste!";
            break;
        case "papel":
            resultado.innerHTML = "¡La CPU eligió Papel, Ganaste!";
            break;
        case "tijera":
            resultado.innerHTML = "¡La CPU eligió Tijera, Empataron!";
            break;
    }
}