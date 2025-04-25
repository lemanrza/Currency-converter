const inputFrom = document.querySelector('.inputFrom');
const inputTo = document.querySelector('.inputTo');
const buttonsFrom = document.querySelectorAll('.tabFrom');
const buttonsTo = document.querySelectorAll('.tabTo');
const rateFromText = document.querySelector('.rateFrom');
const rateToText = document.querySelector('.rateTo');
let noInternet = document.querySelector(".internet")

let currencyFrom = 'RUB';
let currencyTo = 'USD';
let currentSide = 'from';
let replaceTimeout;
const apiKey = '17177c8f3e08009d88b27836';

buttonsFrom.forEach(btn => {
    btn.addEventListener('click', () => {
        currencyFrom = btn.textContent;
        buttonsFrom.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateRates();
        convert();
    });
});

buttonsTo.forEach(btn => {
    btn.addEventListener('click', () => {
        currencyTo = btn.textContent;
        buttonsTo.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateRates();
        convert();
    });
});

function updateRates() {
    if (!navigator.onLine) {
        if (currencyFrom === currencyTo) {
            rateFromText.innerHTML = `1 ${currencyFrom} = <span>1.0000</span> ${currencyTo}`;
            rateToText.innerHTML = `1 ${currencyTo} = <span>1.0000</span> ${currencyFrom}`;
        } else {
            noInternet.style.display = "block"
        }
        return;
    }
    else {
        noInternet.style.display = "none"

    }

    if (currencyFrom === currencyTo) {
        rateFromText.innerHTML = `1 ${currencyFrom} = <span>1</span> ${currencyTo}`;
        rateToText.innerHTML = `1 ${currencyTo} = <span>1</span> ${currencyFrom}`;
        return;
    }

    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currencyFrom}`)
        .then(res => res.json())
        .then(data => {
            rateFromText.innerHTML = `1 ${currencyFrom} = <span>${data.conversion_rates[currencyTo].toFixed(4)}</span> ${currencyTo}`;
        });

    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currencyTo}`)
        .then(res => res.json())
        .then(data => {
            rateToText.innerHTML = `1 ${currencyTo} = <span>${data.conversion_rates[currencyFrom].toFixed(4)}</span> ${currencyFrom}`;
        });
}

function convert() {
    let base = currentSide === 'from' ? currencyFrom : currencyTo;
    let target = currentSide === 'from' ? currencyTo : currencyFrom;
    let amount = currentSide === 'from' ? inputFrom.value : inputTo.value;

    if (amount.trim() === '') {
        if (currentSide === 'from') inputTo.value = '';
        else inputFrom.value = '';
        return;
    }

    if (amount === '.') {
        if (currentSide === 'from') inputTo.value = '0';
        else inputFrom.value = '0';
        return;
    }

    if (!navigator.onLine) {
        if (base === target) {
            let result = parseFloat(amount).toFixed(5);
            if (currentSide === 'from') inputTo.value = result;
            else inputFrom.value = result;
        } else {
            if (currentSide === 'from') inputTo.value = '';
            else inputFrom.value = '';
        }
        return;
    }

    if (currencyFrom === currencyTo) {
        let result = parseFloat(amount).toFixed(5);
        result = result.replace(/\.?0+$/, '');
        if (currentSide === 'from') inputTo.value = result;
        else inputFrom.value = result;
        return;
    }
    else {
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${base}/${target}`)
            .then(res => res.json())
            .then(data => {
                let rate = data.conversion_rate;
                let result = (parseFloat(amount) * rate).toFixed(5);

                if (currentSide === 'from') inputTo.value = result;
                else inputFrom.value = result;
            });
    }
}

inputFrom.addEventListener('input', () => {
    currentSide = 'from';
    inputFrom.value = inputFrom.value.replace(/[^0-9.,]/g, '');

    clearTimeout(replaceTimeout);
    replaceTimeout = setTimeout(() => {
        let clean = inputFrom.value.replace(',', '.').replace(/\.(?=.*\.)/g, '');
        if (clean === '.') clean = '0.';
        if (clean.includes('.')) clean = clean.slice(0, clean.indexOf('.') + 6);

        if (currencyFrom === currencyTo && clean === '1.') {
            clean = '1';
            inputTo.value = clean;
        }

        inputFrom.value = clean;
        convert();
    }, 250);
});

inputTo.addEventListener('input', () => {
    currentSide = 'to';
    inputTo.value = inputTo.value.replace(/[^0-9.,]/g, '');

    clearTimeout(replaceTimeout);
    replaceTimeout = setTimeout(() => {
        let clean = inputTo.value.replace(',', '.').replace(/\.(?=.*\.)/g, '');
        if (clean === '.') clean = '0.';
        if (clean.includes('.')) clean = clean.slice(0, clean.indexOf('.') + 6);

        if (currencyFrom === currencyTo && clean === '1.') {
            clean = '1';
            inputFrom.value = clean;
        }

        inputTo.value = clean;
        convert();
    }, 250);
});

updateRates();
