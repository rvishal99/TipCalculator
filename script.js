// ***LEFT********= *****RIGHT*******************

//**1. note: we use .value when we use Number function
//**2. here all are constant except no.of people that's why we declare it has let

const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipTotalInput')
const numberOfPeopleDiv = document.getElementById('TOTALnumberOfPeople')
const perPersonDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText) // 3. innerText is must bro

//**The easiest way to modify or read the content of an HTML element is by using the innerHTML property.

const calculateBill = () => {

    const bill = Number(billInput.value) //refer 2.

    const tipPercent = Number(tipInput.value) / 100

    const tipAmount = bill * tipPercent

    const total = tipAmount + bill


    const perPersonTotal = total / numberOfPeople


    //* update the perPersonTotal on DOM & show it to user
    perPersonDiv.innerText = `${perPersonTotal.toFixed(2)}`
}


const increasePeople = () => {
    //** increment the amount
    numberOfPeople += 1

    //**  update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople

    //* calculate the bill based on the new number of people
    calculateBill()
}


const decreasePeople = () => {

    if (numberOfPeople <= 1) {
        return
    }


    numberOfPeople -= 1

    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
}