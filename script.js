
document.getElementById('calc').onclick = function () {

let idtInp = document.querySelector('.i__idt-inp').value
let bpInp = document.querySelector('.i__bp-inp').value
let otuInp = document.querySelector('.i__otu-inp').value
let otoInp = document.querySelector('.oto-inp').value

    
    let unitPrice = (bpInp / (idtInp / otuInp)) / otoInp
    
    document.querySelector('#iup-out').textContent = unitPrice
    
  }

  



