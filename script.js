const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValues = document.querySelector(".input-currency").value
    const currencyValuesToConvert = document.querySelector(".currency-national") //valor do  real brasileiro
    const currencyValueConverted = document.querySelector(".international-currency")//valor moeda internacional

        const dolartoday = 5.2 
        const euroToday = 6.2
        const pesoToday = 4.5
        const shekelIsraelense = 6.1
        
            if (currencySelect.value == "Dolar") {
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValues / dolartoday)
                //se o select estiver selecionado o valor do dolar entra aqui
            }
            if (currencySelect.value == "Euro") {
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValues / euroToday)
                //se o select estiver selecionado o valor do euro entra aqui
            }
            if(currencySelect.value == "Peso"){
                currencyValueConverted.innerHTML = new Intl.NumberFormat("es-CO", { style:"currency", currency:"COP" }).format(inputCurrencyValues / pesoToday)
            }
            if(currencySelect.value == "shekel-israelense"){
                currencyValueConverted.innerHTML = new Intl.NumberFormat("es-IS", { style:"currency", currency:"ILS" }).format(inputCurrencyValues / shekelIsraelense)
            }
            currencyValuesToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValues)
                
        }                    

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

        if (currencySelect.value == "Dolar") {
            currencyName.innerHTML = "Dolar Americano"
            currencyImage.src = "./assets/estados-unidos.png"
        }

        if (currencySelect.value == "Euro") {
            currencyName.innerHTML = "Euro"
            currencyImage.src = "./assets/Gold-Euro.png"
        }
        if(currencySelect.value == "Peso"){
            currencyName.innerHTML = "Peso Colombiano"
            currencyImage.src = "./assets/peso-colombiano.png"
        }
        if(currencySelect.value == "shekel-israelense"){
            currencyName.innerHTML = "Shekel Israelense"
            currencyImage.src = "./assets/shekel-israelense.png"
        }
        convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)



