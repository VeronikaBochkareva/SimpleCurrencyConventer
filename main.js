
console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`)
input = require('sync-input');

let firstInput

console.log(`What do you want to do?`)

firstInput = input(`1-Convert currencies 2-Exit program
`)
while (firstInput !== '1' && firstInput !== '2') {
    console.log('Unknown input')
    console.log(`What do you want to do?`)

    firstInput = input(`1-Convert currencies 2-Exit program
`)
}
while (firstInput !== '2') {
    let array = ['JPY', 'EUR', 'RUB', 'USD', 'GBP']


        console.log(`What do you want to convert?`)

        let firstCurrencyInput = input('From: ')
        if (array.includes(firstCurrencyInput.toUpperCase())) {
            let secondCurrencyInput = input('To: ')

            if (array.includes(secondCurrencyInput.toUpperCase())) {
                let amountInput = input('Amount: ')

                if (amountInput < 1) {
                    console.log('The amount can not be less than 1')
                } else if (isNaN(amountInput)) {
                    console.log('The amount has to be a number')
                } else {
                    let currencies = {
                        USD: 1.0,
                        JPY: 113.5,
                        EUR: 0.89,
                        RUB: 74.36,
                        GBP: 0.75
                    }
                    let result1
                    function count(amount, from, to) {
                        return  result1 = amount * to / from

                    }
                    let result = count(amountInput, currencies[firstCurrencyInput.toUpperCase()], currencies[secondCurrencyInput.toUpperCase()]).toFixed(4)
                    console.log(`Result: ${amountInput} ${firstCurrencyInput.toUpperCase()} equals ${result} ${secondCurrencyInput.toUpperCase()}` )

                    console.log(`What do you want to do?`)

                    firstInput = input(`1-Convert currencies 2-Exit program
                    `)
                }

            } else {
                console.log('Unknown currency')
                console.log(`What do you want to do?`)

                firstInput = input(`1-Convert currencies 2-Exit program`)
            }
        } else {
            console.log('Unknown currency')
            console.log(`What do you want to do?`)

            firstInput = input(`1-Convert currencies 2-Exit program`)
        }
        

}

console.log('Have a nice day!')