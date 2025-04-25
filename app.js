// const inputFieldFrom = document.querySelector('.inputFrom');
// const inputFieldTo = document.querySelector('.inputTo');
// const buttonsFrom = document.querySelectorAll('.tabFrom');
// const buttonsTo = document.querySelectorAll('.tabTo');
// const rateDisplayFrom = document.querySelector('.rate');
// const rateDisplayTo = document.querySelector('.rate');
// let currencyFrom = 'RUB';
// let currencyTo = 'USD';
// let currentField = null;
// let conversionRate = 0;

// const apiKey = 'fca_live_HxTks4a0IIqwwEcrMskZ8IQ57kSsv7sMEBQIJL1h';

// // Converts values based on the rate
// const convertValue = (rate) => {
//   const amount = currentField === 'from' ? inputFieldFrom.value : inputFieldTo.value;
//   const result = amount ? (parseFloat(amount) * rate).toFixed(5) : '';
//   currentField === 'from' ? inputFieldTo.value = result : inputFieldFrom.value = result;
// };

// // Fetches conversion rate and updates the fields
// const fetchConversionRate = () => {
//   const baseCurrency = currentField === 'from' ? currencyFrom : currencyTo;
//   const targetCurrency = currentField === 'from' ? currencyTo : currencyFrom;

//   fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=${baseCurrency}`)
//     .then(response => response.json())
//     .then(data => {
//       const rate = data.data[targetCurrency];
//       conversionRate = rate;
//       convertValue(rate);
//     })
//     .catch(() => alert("Failed to fetch exchange rate"));
// };

// // Updates the rate information displayed in the footer
// const updateRateInfo = () => {
//   fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=${currencyFrom}`)
//     .then(response => response.json())
//     .then(data => {
//       rateDisplayFrom.innerHTML = `1 ${currencyFrom} = <span>${data.data[currencyTo].toFixed(5)}</span> ${currencyTo}`;
//     });

//   fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=${currencyTo}`)
//     .then(response => response.json())
//     .then(data => {
//       rateDisplayTo.innerHTML = `1 ${currencyTo} = <span>${data.data[currencyFrom].toFixed(5)}</span> ${currencyFrom}`;
//     });
// };

// // Validates and formats user input
// const formatInput = (input) => {
//   let value = input.value.replace(/[^0-9.,]/g, '').replace(',', '.');
//   let decimalCount = 0;

//   value = value.split('').filter(char => {
//     if (char === '.') {
//       decimalCount++;
//       return decimalCount <= 1;
//     }
//     return true;
//   }).join('');

//   if (value.includes('.')) {
//     const [integer, decimal] = value.split('.');
//     value = `${integer}.${decimal.slice(0, 5)}`;
//   }

//   input.value = value;
// };

// // Event handler for input fields
// inputFieldFrom.addEventListener('input', () => {
//   currentField = 'from';
//   formatInput(inputFieldFrom);
//   fetchConversionRate();
// });

// inputFieldTo.addEventListener('input', () => {
//   currentField = 'to';
//   formatInput(inputFieldTo);
//   fetchConversionRate();
// });

// // Sets the active currency button
// const setActiveButton = (buttons, activeButton) => {
//   buttons.forEach(button => button.classList.remove('active'));
//   activeButton.classList.add('active');
// };

// // Currency selection handler
// buttonsFrom.forEach(button => {
//   button.addEventListener('click', () => {
//     currencyFrom = button.textContent;
//     setActiveButton(buttonsFrom, button);
//     fetchConversionRate();
//     updateRateInfo();
//   });
// });

// buttonsTo.forEach(button => {
//   button.addEventListener('click', () => {
//     currencyTo = button.textContent;
//     setActiveButton(buttonsTo, button);
//     fetchConversionRate();
//     updateRateInfo();
//   });
// });

// // Initial setup of rate information
// updateRateInfo();




// const inputFieldFrom = document.querySelector('.inputFrom');
// const inputFieldTo = document.querySelector('.inputTo');
// const buttonsFrom = document.querySelectorAll('.tabFrom');
// const buttonsTo = document.querySelectorAll('.tabTo');
// const rateDisplayFrom = document.querySelector('.rate');
// const rateDisplayTo = document.querySelector('.rate');
// let currencyFrom = 'USD';
// let currencyTo = 'RUB';
// let currentField = null;
// let conversionRate = 0;

// const apiKey = '5261a43bcab84fc7aee3bac8';

// const convertValue = (rate) => {
//   const amount = currentField === 'from' ? inputFieldFrom.value : inputFieldTo.value;
//   const result = amount ? (parseFloat(amount) * rate).toFixed(5) : '';
//   currentField === 'from' ? inputFieldTo.value = result : inputFieldFrom.value = result;
// };

// const fetchConversionRate = () => {
//   const baseCurrency = currentField === 'from' ? currencyFrom : currencyTo;
//   const targetCurrency = currentField === 'from' ? currencyTo : currencyFrom;

//   fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${baseCurrency}/${targetCurrency}`)
//     .then(response => response.json())
//     .then(data => {
//       const rate = data.conversion_rate;
//       conversionRate = rate;
//       convertValue(rate);
//     })
//     .catch(() => alert("Failed to fetch exchange rate"));
// };

// const updateRateInfo = () => {
//   fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currencyFrom}`)
//     .then(response => response.json())
//     .then(data => {
//       rateDisplayFrom.innerHTML = `1 ${currencyFrom} = <span>${data.conversion_rates[currencyTo].toFixed(5)}</span> ${currencyTo}`;
//     });

//   fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currencyTo}`)
//     .then(response => response.json())
//     .then(data => {
//       rateDisplayTo.innerHTML = `1 ${currencyTo} = <span>${data.conversion_rates[currencyFrom].toFixed(5)}</span> ${currencyFrom}`;
//     });
// };

// const formatInput = (input) => {
//   let value = input.value.replace(/[^0-9.,]/g, '').replace(',', '.');
//   let decimalCount = 0;

//   value = value.split('').filter(char => {
//     if (char === '.') {
//       decimalCount++;
//       return decimalCount <= 1;
//     }
//     return true;
//   }).join('');

//   if (value.includes('.')) {
//     const [integer, decimal] = value.split('.');
//     value = `${integer}.${decimal.slice(0, 5)}`;
//   }

//   input.value = value;
// };

// inputFieldFrom.addEventListener('input', () => {
//   currentField = 'from';
//   formatInput(inputFieldFrom);
//   fetchConversionRate();
// });

// inputFieldTo.addEventListener('input', () => {
//   currentField = 'to';
//   formatInput(inputFieldTo);
//   fetchConversionRate();
// });

// const setActiveButton = (buttons, activeButton) => {
//   buttons.forEach(button => button.classList.remove('active'));
//   activeButton.classList.add('active');
// };

// buttonsFrom.forEach(button => {
//   button.addEventListener('click', () => {
//     currencyFrom = button.textContent;
//     setActiveButton(buttonsFrom, button);
//     fetchConversionRate();
//     updateRateInfo();
//   });
// });

// buttonsTo.forEach(button => {
//   button.addEventListener('click', () => {
//     currencyTo = button.textContent;
//     setActiveButton(buttonsTo, button);
//     fetchConversionRate();
//     updateRateInfo();
//   });
// });

// updateRateInfo();


const inputFieldFrom = document.querySelector('.inputFrom');
const inputFieldTo = document.querySelector('.inputTo');
const buttonsFrom = document.querySelectorAll('.tabFrom');
const buttonsTo = document.querySelectorAll('.tabTo');
const rateDisplayFrom = document.querySelector('.rate.from');
const rateDisplayTo = document.querySelector('.rate.to');
let currencyFrom = 'USD';
let currencyTo = 'RUB';
let currentField = null;
let conversionRate = 0;

const apiKey = '5261a43bcab84fc7aee3bac8';

// Converts values based on the rate
const convertValue = (rate) => {
  const amount = currentField === 'from' ? inputFieldFrom.value : inputFieldTo.value;
  const result = amount ? (parseFloat(amount) * rate).toFixed(5) : '';
  currentField === 'from' ? inputFieldTo.value = result : inputFieldFrom.value = result;
};

// Fetches conversion rate and updates the fields
const fetchConversionRate = () => {
  const baseCurrency = currentField === 'from' ? currencyFrom : currencyTo;
  const targetCurrency = currentField === 'from' ? currencyTo : currencyFrom;

  fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${baseCurrency}/${targetCurrency}`)
    .then(response => response.json())
    .then(data => {
      const rate = data.conversion_rate;
      conversionRate = rate;
      convertValue(rate);
    })
    .catch(() => alert("Failed to fetch exchange rate"));
};

// Updates the rate information displayed in the footer
const updateRateInfo = () => {
  fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currencyFrom}`)
    .then(response => response.json())
    .then(data => {
      rateDisplayFrom.innerHTML = `1 ${currencyFrom} = <span>${data.conversion_rates[currencyTo].toFixed(5)}</span> ${currencyTo}`;
    });

  fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currencyTo}`)
    .then(response => response.json())
    .then(data => {
      rateDisplayTo.innerHTML = `1 ${currencyTo} = <span>${data.conversion_rates[currencyFrom].toFixed(5)}</span> ${currencyFrom}`;
    });
};

// Validates and formats user input
const formatInput = (input) => {
  let value = input.value.replace(/[^0-9.,]/g, '').replace(',', '.');
  let decimalCount = 0;

  value = value.split('').filter(char => {
    if (char === '.') {
      decimalCount++;
      return decimalCount <= 1;
    }
    return true;
  }).join('');

  if (value.includes('.')) {
    const [integer, decimal] = value.split('.');
    value = `${integer}.${decimal.slice(0, 5)}`;
  }

  input.value = value;
};

// Event handler for input fields
inputFieldFrom.addEventListener('input', () => {
  currentField = 'from';
  formatInput(inputFieldFrom);
  fetchConversionRate();
});

inputFieldTo.addEventListener('input', () => {
  currentField = 'to';
  formatInput(inputFieldTo);
  fetchConversionRate();
});

// Sets the active currency button
const setActiveButton = (buttons, activeButton) => {
  buttons.forEach(button => button.classList.remove('active'));
  activeButton.classList.add('active');
};

// Currency selection handler
buttonsFrom.forEach(button => {
  button.addEventListener('click', () => {
    currencyFrom = button.textContent;
    setActiveButton(buttonsFrom, button);
    fetchConversionRate();
    updateRateInfo();
  });
});

buttonsTo.forEach(button => {
  button.addEventListener('click', () => {
    currencyTo = button.textContent;
    setActiveButton(buttonsTo, button);
    fetchConversionRate();
    updateRateInfo();
  });
});

// Initial setup of rate information
updateRateInfo();
