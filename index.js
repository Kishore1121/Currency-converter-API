let select = document.querySelectorAll('.currency')
let button = document.querySelector('#btn');
let input = document.querySelector('#input')

fetch('https://api.frankfurter.app/currencies')
.then(res => ( res.json()))
.then(res => dropdown(res))


// dropdown function

function dropdown(res) {
// convet a array format
  let currency =  Object.entries(res)
    for(let i=0;i<currency.length;i++){
        let opt = `<option value="${currency[i][0]}">${currency[i][0]}</option>`
        // console.log(opt);
        select[0].innerHTML  += opt;
        select[1].innerHTML  += opt;

    }
  
}


button.addEventListener('click',converter)

function converter() {
    
    let firstcurrency = select[0].value;
    let secondcurrency = select[1].value;
    let inputval = input.value;

    if (firstcurrency===secondcurrency) {
        alert('Choose differnce currency');
    }
    else{
        convert(firstcurrency,secondcurrency,inputval)
    }
}

function convert(firstcurrency,secondcurrency,inputval){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputval}&from=${firstcurrency}&to=${secondcurrency}`)
      .then(resp => resp.json())
      .then((data) => {
        document.getElementById('result').value = Object.values(data.rates)[0]
      }); 
};


