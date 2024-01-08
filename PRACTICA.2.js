function generarPotenciasFraccionales(n) {
    let potencia = 1;
    let resultado = [];

    for (let i = 0; i < n; i++) {
        resultado.push({
            Fraccion: `1/${potencia}`,
            Decimal: (1 / potencia).toFixed(5), // Redondear a 5 decimales
            Potencia: potencia,
        });
        potencia *= 2;
    }

    return resultado;
}

function mostrarTabla(potencias) {
    console.log("Fraccion   | Decimal  | Potencia");
    console.log("-----------|----------|----------");

    for (let i = 0; i < potencias.length; i++) {
        const { Fraccion, Decimal, Potencia } = potencias[i];
        console.log(`${Fraccion.padEnd(11)} | ${Decimal.padEnd(8)} | ${Potencia}`);
    }
}

// Generar potencias fraccionales y mostrar la tabla
const potenciasGeneradas = generarPotenciasFraccionales(10); // Puedes ajustar el número de potencias a generar
mostrarTabla(potenciasGeneradas);

