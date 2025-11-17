// 1. IF – Clasificación de calidad del aire
function clasificarAQI() {
    let aqi = parseInt(document.getElementById("aqi").value);
    let res = "";
  
    if (aqi <= 50) res = "Bueno";
    else if (aqi <= 100) res = "Moderado";
    else if (aqi <= 150) res = "Dañino para grupos sensibles";
    else if (aqi <= 200) res = "Dañino";
    else if (aqi <= 300) res = "Muy dañino";
    else res = "Peligroso";
  
    document.getElementById("res1").innerText = "Calidad del aire: " + res;
  }
  
  // 2. FOR – Registrar niveles de ruido
  function registrarRuido() {
    let n = parseInt(prompt("¿Cuántas mediciones registrará?"));
    let suma = 0;
  
    for (let i = 1; i <= n; i++) {
      let dB = parseFloat(prompt("Medición " + i + " en dB:"));
      suma += dB;
    }
  
    let promedio = suma / n;
  
    document.getElementById("res2").innerText =
      "Promedio de ruido: " + promedio.toFixed(2) + " dB";
  }
  
  // 3. WHILE – Contar focos de calor
  function contarCalor() {
    let temp = parseFloat(prompt("Ingrese temperatura (0 para terminar):"));
    let contador = 0;
  
    while (temp !== 0) {
      if (temp > 45) contador++;
      temp = parseFloat(prompt("Ingrese temperatura (0 para terminar):"));
    }
  
    document.getElementById("res3").innerText =
      "Focos de calor detectados (>45°C): " + contador;
  }
  
  // 4. SWITCH – Tipo de residuo
  function clasificarResiduo() {
    let c = parseInt(document.getElementById("residuo").value);
    let tipo;
  
    switch (c) {
      case 1: tipo = "Orgánico"; break;
      case 2: tipo = "Plástico"; break;
      case 3: tipo = "Papel/Cartón"; break;
      case 4: tipo = "Vidrio"; break;
      default: tipo = "Código inválido";
    }
  
    document.getElementById("res4").innerText = "Residuo: " + tipo;
  }
  
  // 5. DO WHILE – Nivel del río
  function monitorearRio() {
    let nivel;
    let texto = "";
    let seguir;
  
    do {
      nivel = parseFloat(prompt("Ingrese nivel del río (metros):"));
      if (nivel > 3) texto += "⚠ Nivel peligroso: " + nivel + " m\n";
      else texto += "Nivel normal: " + nivel + " m\n";
  
      seguir = prompt("¿Registrar otro? (sí/no)").toLowerCase();
    } while (seguir !== "no");
  
    document.getElementById("res5").innerText = texto;
  }
  