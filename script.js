
  let t = document.querySelector('#cloneItemList')
  let aBtn = document.querySelector('#addBtn')
  const calcBtn = document.querySelector('#calc')
  


  aBtn.onclick = () => {
    addResult()
    totalPrice()

  }
  
// MVP
// 1. 단가계산 함수
function unitCalculator(amt, bp, ua, pd) {
  let calcUnitPrice = (bp / (amt / ua)) / pd
  return calcUnitPrice
}

// 2. 재료 추가
function addResult() {
  const list = document.getElementById('list')
  
  let name = document.getElementById('idt-name')
  let amount = document.getElementById('idt-amount')
  let price = document.getElementById('idt-price')
  let useAmount = document.getElementById('idt-useamount')
  let produce = document.getElementById('produce')

  let li = makeElement('li')
  let itemDiv = makeElement('div', 'itemList grid-display')
  let nameSpan = makeElement('span', 'list__name')
  let amountSpan = makeElement('span', 'list__amount')
  let priceSpan = makeElement('span', 'list__price')
  let useAmountSpan = makeElement('span', 'list__useAmount')
  let unitPriceSpan = makeElement('span', 'list-unitPrice')

  let amt = Number(amount.value)
  let bp = Number(price.value)
  let ua = Number(useAmount.value)
  let pd = Number(produce.value)
  let up = Math.floor(unitCalculator(amt, bp, ua, pd))

  updateData(name.value, up)

  nameSpan.textContent = name.value
  amountSpan.textContent = amount.value
  priceSpan.textContent = price.value
  useAmountSpan.textContent = useAmount.value
  unitPriceSpan.textContent = up + '원'

  itemDiv.appendChild(nameSpan)
  itemDiv.appendChild(amountSpan)
  itemDiv.appendChild(priceSpan)
  itemDiv.appendChild(useAmountSpan)
  itemDiv.appendChild(unitPriceSpan)

  li.appendChild(itemDiv)
  list.appendChild(li)

}

function makeElement(tag, name = '') {
  let elTag = document.createElement(tag)
  elTag.className = name
  return elTag
}

function makeInputText(tag, name = '', type = 'text') {
  let elTag = document.createElement(tag)
  elTag.type = type
  elTag.className = name
  return elTag
}

//3. 재료와 단가 data에 저장하기
function updateData(name, unitprice) {
  //재료이름과 단가계산 결과를 DATA에 update
  let unit = {}
  unit[name] = name
  unit.unitPrice = unitprice
  
  DATA.push(unit)
}

//4. total 함수
function totalPrice() {
  let totalPrice = document.getElementById('totalPrice')
  let total = DATA.reduce((total, el) => total + el.unitPrice, 0)

  totalPrice.textContent = total + ' 원'
}

