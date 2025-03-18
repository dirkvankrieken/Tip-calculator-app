const priceInputBox = document.getElementById('price')
const tipPercentageArea = document.querySelector('.tip-percentage-container')
const numberOfPeopleInputBox = document.getElementById('number-of-people')
const resetButton = document.getElementById('reset-button')
const customInput = document.querySelector('.tip-custom-input')

priceInputBox.addEventListener('keyup', () => {
  priceInputBox.classList.remove('input-not-zero')
  document.getElementById('price-not-zero').classList.add('hide')
  if (numberOfPeopleInputBox.value > 0 && priceInputBox.value > 0) {
    if (
      document
        .querySelector('.tip-active')
        .classList.contains('tip-custom-input')
    ) {
      calculateAmmounts(parseInt(document.querySelector('.tip-active').value))
    } else {
      calculateAmmounts(
        parseInt(document.querySelector('.tip-active').innerText)
      )
    }
  } else if (priceInputBox.value === '0') {
    document.getElementById('price-not-zero').classList.remove('hide')
    priceInputBox.classList.add('input-not-zero')
  } else {
    calculateAmmounts(0)
  }
})

customInput.addEventListener('keyup', () => {
  calculateAmmounts(customInput.value)
})

numberOfPeopleInputBox.addEventListener('keyup', () => {
  numberOfPeopleInputBox.classList.remove('input-not-zero')
  document.getElementById('numberofpeople-not-zero').classList.add('hide')
  if (numberOfPeopleInputBox.value > 0 && priceInputBox.value > 0) {
    if (
      document
        .querySelector('.tip-active')
        .classList.contains('tip-custom-input')
    ) {
      calculateAmmounts(parseInt(document.querySelector('.tip-active').value))
    } else {
      calculateAmmounts(
        parseInt(document.querySelector('.tip-active').innerText)
      )
    }
  } else if (numberOfPeopleInputBox.value === '0') {
    document.getElementById('numberofpeople-not-zero').classList.remove('hide')
    numberOfPeopleInputBox.classList.add('input-not-zero')
  } else {
    calculateAmmounts(0)
  }
})

resetButton.addEventListener('click', reset)

tipPercentageArea.addEventListener('click', (e) => {
  if (e.target.classList.contains('tip-percentage')) {
    if (!e.target.classList.contains('tip-active')) {
      if (
        document
          .querySelector('.tip-active')
          .classList.contains('tip-custom-input')
      ) {
        document.querySelector('.tip-custom-input').style.display = 'none'
        document.querySelector('.tip-custom-input').value = ''
        document.querySelector('.tip-custom').style.display = 'block'
      }
      document.querySelector('.tip-active').classList.remove('tip-active')
      e.target.classList.add('tip-active')
      calculateAmmounts(parseInt(e.target.innerText))
    }
  } else if (e.target.classList.contains('tip-custom')) {
    calculateAmmounts(0)
    document.querySelector('.tip-active').classList.remove('tip-active')
    document.querySelector('.tip-custom-input').classList.add('tip-active')
    e.target.style.display = 'none'
    customInput.style.display = 'inline-block'
    customInput.focus()
  }
})

function calculateAmmounts(percentage) {
  let priceValue = priceInputBox.value
  let numberOfPeopleValue = numberOfPeopleInputBox.value
  if (
    parseFloat(priceValue) > 0 &&
    parseInt(numberOfPeopleValue) > 0 &&
    percentage
  ) {
    const price = parseFloat(priceValue)
    const numberOfPeople = parseInt(numberOfPeopleValue)
    const tipPerPerson = (price * (percentage / 100)) / numberOfPeople
    const totalPerPerson = price / numberOfPeople + tipPerPerson
    document.getElementById('tip').innerHTML = tipPerPerson.toFixed(2)
    document.getElementById('total').innerHTML = totalPerPerson.toFixed(2)
  } else {
    if (priceInputBox.value === '0') {
      document.getElementById('price-not-zero').classList.remove('hide')
    }
    if (numberOfPeopleInputBox.value === '0') {
      document
        .getElementById('numberofpeople-not-zero')
        .classList.remove('hide')
    }
    document.getElementById('tip').innerHTML = ''
    document.getElementById('total').innerHTML = ''
  }
}

function reset() {
  priceInputBox.value = ''
  numberOfPeopleInputBox.value = ''
  customInput.value = ''
  calculateAmmounts(0)
}

reset()
