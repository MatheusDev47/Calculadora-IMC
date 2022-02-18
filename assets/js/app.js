function ImcCalculator() {

    //Seleção dos campos
    const inputPeso = document.getElementById('peso')
    const inputAltura = document.getElementById('altura')
    const campoResultado = document.getElementById('resultado')

    //Transformações dos valores dos campos peso e altura no tipo Number.
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    //Array com todas as classes de cores que serão utilizadas. 
    const classColors = ['wrong', 'bad', 'sucess', 'danger', 'danger01', 'danger02']

    //Array com cada possibilidade de resultado que será utilizado.
    const result = ['Preencha os dois campos', 'Abaixo do Peso', 'Peso Normal', 'Sobrepeso'
    , 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3', 'Digite algo válido']

    //Função que retorna o cálculo do imc
    function getImc (peso, altura) {
        const imc = peso / altura ** 2
        return imc.toFixed(2)
    }

    //constante que armazena o valor do cálculo do imc
    const imc = getImc(peso, altura)

    //Percorre o array das classes de cores para então remover todos valores do array. Isso serve para remover toda cor que já estiver
    //presente no resultado. Pois caso o resultado dê uma cor diferente, essa cor possa ser removida e então adicionada uma nova cor de acordo com o resultado do IMC.
    classColors.forEach(e => { campoResultado.classList.remove(e) })

    //Verificações
    if (!peso || !altura) {
        campoResultado.classList.add(classColors[0])
        campoResultado.innerHTML = `(${result[7]})`
    }
    
    if (peso === '' || altura === '') {
        campoResultado.classList.add(classColors[0])
        campoResultado.innerHTML = `(${result[0]})`
    }

    if (imc < 18.5) {
        campoResultado.classList.add(classColors[1])
        campoResultado.innerHTML = `Seu IMC é ${imc} (${result[1]})`

    } else if (imc >= 18.5 && imc <= 24.99) {
        campoResultado.classList.add(classColors[2])
        campoResultado.innerHTML = `Seu IMC é ${imc} (${result[2]})`

    } else if (imc >= 25 && imc <= 29.99) {
        campoResultado.classList.add(classColors[3])
        campoResultado.innerHTML = `Seu IMC é ${imc} (${result[3]})`

    } else if (imc >= 30 && imc <= 34.99) {
        campoResultado.classList.add(classColors[4])
        campoResultado.innerHTML = `Seu IMC é ${imc} (${result[4]})`

    } else if (imc >= 35 && imc <= 39.99) {
        campoResultado.classList.add(classColors[5])
        campoResultado.innerHTML = `Seu IMC é ${imc} (${result[5]})`

    } else if (imc > 40) {
        campoResultado.classList.add(classColors[1])
        campoResultado.innerHTML = `Seu IMC é ${imc} (${result[6]})`

    } 

    //Após o envio dos valores, limpa os campos de peso e altura para novos valores serem digitados.
    inputPeso.value = ''
    inputAltura.value = ''
}

//Seleção do botão de envio
const btnEnvio = document.getElementById('sent')
//Chama a função de calcular IMC sempre que houver um click sobre o botão de envio
btnEnvio.addEventListener('click', e => {
    e.preventDefault()
    ImcCalculator()
})
