
// Código del Cuadrado
// console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("los lados del Cuadrado mine: " + ladoCuadrado + " Cm")

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("el perimetro del Cuadrado es: " + perimetroCuadrado + " Cm")

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("el Área del Cuadrado es: " + areaCuadrado + " Cm")

// console.groupEnd();

// Código del Triangulo
// console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("los lados del triangulo miden: " 
// + ladoTriangulo1 
// + " Cm, " 
// + ladoTriangulo2
// + " Cm, y " 
// + baseTriangulo
// + " Cm"
// )

// // altura del Triangulo
// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + " Cm")

// // perimetro del Triangulo
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es de: " + perimetroTriangulo + " Cm")

// // Area del Triangulo
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
// console.log("El Área del triangulo es de: " + areaTriangulo + " Cm 2")

// console.groupEnd();

// Código del Circulo
// console.group("Circulos")

// // Radio del Circulo
// const radioCirculo = 4;
// console.log("El Radio del Circulo es de: " + radioCirculo + " Cm")

// // Diametro del Circulo
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del Circulo es de: " + diametroCirculo + " Cm")

// // PI
const PI = Math.PI;
// console.log("PI es: " + PI + " Cm")

// // circunferendia del Circulo
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del Circulo es de: " + perimetroCirculo + " Cm")


// // Ärea del Circulo
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área del Circulo es de: " + areaCirculo + " Cm")

// console.groupEnd

// Encapsulado de Funciones 

function perimetroCuadrado(lado) {
    return lado * 4;
}

function perimetroTriangulo (lado1, lado2, base) {
    return lado1+lado2+base;
}

function areaCuadrado(lado) {
    return lado * lado;
}

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}

function diametroCirculo (radio) {
    return radio * 2;
}

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo (radio) {
    return (radio * radio) * PI;
}

// aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
     const input = document.getElementById("InputCuadrado");
     const value = input.value;

     const perimetro = perimetroCuadrado (value);
     alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado (value);
    alert(area);
}

// aquí se calcula la Altura
function calcularAltura(){
    const input1 = document.getElementById("lado1");
    const value1 = input1.value;

    const input2 = document.getElementById("lado2");
    const value2 = input2.value;

    const input3 = document.getElementById("lado3");
    const value3 = input3.value;

    if (value1 === value2 && value1 === value3 && value2 === value3) {
        const altura = (Math.sqrt((value1*value1)-((value3*value3)/4)));
        alert ("Isósceles por cualquiera de los lados, " + "la altura es de: " + altura);
    }
    else if (value1 === value3){
        const altura = (Math.sqrt((value1*value1)-((value2*value2)/4)));
        alert ("Isósceles por L1 y L3, "+ "la altura es de: " + altura );
    }
    else if (value2 === value3){
        const altura = (Math.sqrt((value2*value2)-((value1*value1)/4)));
        alert ("Isósceles por L2 y L3 " + "la altura es de: " + altura );
    }
    else if (value1 === value2){
    const altura = (Math.sqrt((value1*value1)-((value3*value3)/4)));
    alert ("Isósceles por L1 y L2, " + "la altura es de: " + altura);
    }
    else{
        alert("no es Isósceles");
    }
}
