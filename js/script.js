const input = document.querySelector("#numero");

let num1 = "";
let num2 = "";
let displayCalculadora = "";
let operando = false;

document.addEventListener("click", (e) => {
  // 0
  if (e.target.classList == "0") {
    actualizarDisplay();
    if (operando == false) {
      num1 += "0";
      input.value += "0";
    } else {
      num2 += "0";
      input.value += "0";
    }
  }

  // 1
  else if (e.target.classList == "1") {
    actualizarDisplay();
    if (operando == false) {
      num1 += "1";
      input.value += "1";
    } else {
      num2 += "1";
      input.value += "1";
    }
  }
  // 2
  else if (e.target.classList == "2") {
    actualizarDisplay();
    if (operando == false) {
      num1 += "2";
      input.value += "2";
    } else {
      num2 += "2";
      input.value += "2";
    }
  }

  // 3
  else if (e.target.classList == "3") {
    actualizarDisplay();
    if (operando == false) {
      num1 += "3";
      input.value += "3";
    } else {
      num2 += "3";
      input.value += "3";
    }
  }

  // 4
  else if (e.target.classList == "4") {
    actualizarDisplay();
    if (operando == false) {
      num1 += "4";
      input.value += "4";
    } else {
      num2 += "4";
      input.value += "4";
    }
  }

  // 5
  else if (e.target.classList == "5") {
    actualizarDisplay();
    if (operando == false) {
      num1 += "5";
      input.value += "5";
    } else {
      num2 += "5";
      input.value += "5";
    }
  }

  // 6
  else if (e.target.classList == "6") {
    actualizarDisplay();
    if (operando == false) {
      num1 += "6";
      input.value += "6";
    } else {
      num2 += "6";
      input.value += "6";
    }
  }

  // 7
  else if (e.target.classList == "7") {
    actualizarDisplay();
    if (operando == false) {
      num1 += "7";
      input.value += "7";
    } else {
      num2 += "7";
      input.value += "7";
    }
  }

  // 8
  else if (e.target.classList == "8") {
    actualizarDisplay();
    if (operando == false) {
      num1 += "8";
      input.value += "8";
    } else {
      num2 += "8";
      input.value += "8";
    }
    // 9
  } else if (e.target.classList == "9") {
    actualizarDisplay();
    if (operando == false) {
      num1 += "9";
      input.value += "9";
    } else {
      num2 += "9";
      input.value += "9";
    }
  }

  // operadores
  else if (e.target.classList == "+") {
    resultado();
    operando = true;
    input.value += " + ";
    actualizarDisplay();
  } else if (e.target.classList == "÷") {
    resultado();

    operando = true;
    input.value += " ÷ ";
    actualizarDisplay();
  } else if (e.target.classList == "-") {
    resultado();

    operando = true;
    input.value += " - ";
    actualizarDisplay();
  } else if (e.target.classList == "x") {
    resultado();

    operando = true;
    input.value += " x ";
    actualizarDisplay();
  } else if (e.target.classList == "=") {
    resultado();
  }

  // borrar input
  else if (e.target.classList == "C") {
    num1 += "C";

    limpiarResultado();
  }
});

function actualizarDisplay() {
  displayCalculadora = num1 + num2;
}

function limpiarResultado() {
  num1 = "";
  num2 = "";
  input.value = "";
}

function restar(num1, num2) {
  return num1 - num2;
}

function sumar(n1, n2) {
  return n1 + n2;
}
function multiplicar(n1, n2) {
  return n1 * n2;
}
function dividir(n1, n2) {
  return n1 / n2;
}

function resultado() {
  if (input.value.includes("+")) {
    num1 = sumar(Number(num1), Number(num2));
    num1 = String(num1);
    input.value = num1;
    num2 = "";
  } else if (input.value.includes("-")) {
    num1 = restar(Number(num1), Number(num2));
    num1 = String(num1);
    input.value = num1;
    num2 = "";
  } else if (input.value.includes("x")) {
    num1 = multiplicar(Number(num1), Number(num2));
    num1 = String(num1);
    input.value = num1;
    num2 = "";
  } else if (input.value.includes("÷")) {
    num1 = dividir(Number(num1), Number(num2));
    num1 = String(num1);
    input.value = num1;
    num2 = "";
  }
  operando = false
}
