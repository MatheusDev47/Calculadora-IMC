//Seleção dos campos e botão de envio
const peso = (document.getElementById('peso'))
const altura = (document.getElementById('altura'))
const btnEnvio = document.getElementById('envio')
const campoResultado = document.getElementById('resultado')

//CLasses Colors
const classSuccess = 'sucess'
const classBad = 'bad'
const classDanger = 'danger'
const classDanger01 = 'danger01'
const classDanger02 = 'danger02'
const classWrong = 'wrong'

btnEnvio.addEventListener('click', e =>{
    e.preventDefault();
    campoResultado.classList.remove(classSuccess, classBad, classDanger, classDanger01, classDanger02, classWrong)
    
    let calculoIMC = peso.value / (altura.value) ** 2
    let resultado
    calculoIMC = calculoIMC.toFixed(2)
    
    if (peso.value === '' || altura.value === '') {
        resultado = 'Preencha os dois campos'
        //allColors
        campoResultado.classList.add('wrong')
        campoResultado.innerHTML = `(${resultado})`
    }

    if (calculoIMC < 18.5) {
        resultado = 'Abaixo do Peso'
        //allColors
        campoResultado.classList.add(classBad)
        campoResultado.innerHTML = `Seu IMC é ${calculoIMC} (${resultado})`

    } else if (calculoIMC >= 18.5 && calculoIMC <= 24.99) {
        resultado = 'Peso Normal'
        //allColors
        campoResultado.classList.add(classSuccess)
        campoResultado.innerHTML = `Seu IMC é ${calculoIMC} (${resultado})`

    } else if (calculoIMC >= 25 && calculoIMC <= 29.99) {
        resultado = 'Sobrepeso'
        //allColors
        campoResultado.classList.add(classDanger)
        campoResultado.innerHTML = `Seu IMC é ${calculoIMC} (${resultado})`

    } else if (calculoIMC >= 30 && calculoIMC <= 34.99) {
        resultado = 'Obesidade Grau 1'
        //allColors
        campoResultado.classList.add(classDanger01)
        campoResultado.innerHTML = `Seu IMC é ${calculoIMC} (${resultado})`

    } else if (calculoIMC >= 35 && calculoIMC <= 39.99) {
        resultado = 'Obesidade Grau 2'
        //allColors
        campoResultado.classList.add(classDanger02)
        campoResultado.innerHTML = `Seu IMC é ${calculoIMC} (${resultado})`

    } else if (calculoIMC > 40) {
        resultado = 'Obesidade Grau 3'
        //allColors
        campoResultado.classList.add(classBad)
        campoResultado.innerHTML = `Seu IMC é ${calculoIMC} (${resultado})`

    } else {
        resultado = 'Digite algo válido'
        //allColors
        campoResultado.classList.add(classWrong)
        campoResultado.innerHTML = `(${resultado})`
    }

    peso.value = ''
    altura.value = ''
})

