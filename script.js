function encriptar() {
  let mensaje = document.getElementById('mensaje').value;
  if (mensaje === "") {
    document.getElementById('svgBuscar').classList.remove('remover');
    document.getElementById('empty').classList.remove('remover');
    document.getElementById('type').classList.remove('remover');
    document.getElementById('resultado').classList.remove('agregar');
  } else {
    document.getElementById('svgBuscar').classList.add('remover');
    document.getElementById('empty').classList.add('remover');
    document.getElementById('type').classList.add('remover');
    document.getElementById('resultado').classList.add('agregar');
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = mensaje.toLowerCase().replace(/[aeiou]/gmi, replacer);
    return;
  }
}

function desencriptar() {
  let mensaje = document.getElementById('mensaje').value;
  if (mensaje === "") {
    document.getElementById('svgBuscar').classList.remove('remover');
    document.getElementById('empty').classList.remove('remover');
    document.getElementById('type').classList.remove('remover');
    document.getElementById('resultado').classList.remove('agregar');
  } else {
    document.getElementById('svgBuscar').classList.add('remover');
    document.getElementById('empty').classList.add('remover');
    document.getElementById('type').classList.add('remover');
    document.getElementById('resultado').classList.add('agregar');
  
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = mensaje.toLowerCase().replace(/(ai)|(enter)|(imes)|(ober)|(ufat)/gmi, fixer);
    return;
  }
}

function replacer(match) {
  switch (match) {
    case 'a':
      return 'ai';
    case 'e':
      return 'enter';
    case 'i':
      return 'imes';
    case 'o':
      return 'ober';
    case 'u':
      return 'ufat';
  }
}

function fixer(match) {
  switch (match) {
    case 'ai':
      return 'a';
    case 'enter':
      return 'e';
    case 'imes':
      return 'i';
    case 'ober':
      return 'o';
    case 'ufat':
      return 'u';
  }
}