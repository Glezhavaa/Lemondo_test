const rangeInput = document.querySelectorAll('.range-input input');
const priceInput = document.querySelectorAll('.price-input input');
const range = document.querySelector('.slider .progress');
let priceGap = 70;

const symbolRangeInput = document.querySelectorAll('.symbol-range-input input');
const symbolInput = document.querySelectorAll('.symbol-input input');
const symbolRange = document.querySelector('.symbol-slider .symbol-progress');
let symbolGap = 5;

priceInput.forEach(input => {
    input.addEventListener('input', e => {
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.className === 'input-min') {
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + '%';
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + '%';
            }
        }
    })
})

rangeInput.forEach(input => {
    input.addEventListener('input', e => {
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === 'range-min') {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + '%';
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
        }
    })
})

symbolInput.forEach(input => {
    input.addEventListener('input', e => {
        let minSymbol = parseInt(symbolInput[0].value),
        maxSymbol = parseInt(symbolInput[1].value);

        if ((maxSymbol - minSymbol >= symbolGap) && maxSymbol <= symbolRangeInput[1].max) {
            if (e.target.className === 'symbol-input-min') {
                symbolRangeInput[0].value = minSymbol;
                symbolRange.style.left = ((minSymbol / symbolRangeInput[0].max) * 100) + '%';
            } else {
                symbolRangeInput[1].value = maxSymbol;
                symbolRange.style.right = 100 - (maxSymbol / symbolRangeInput[1].max) * 100 + '%';
            }
        }
    })
})

symbolRangeInput.forEach(input => {
    input.addEventListener('input', e => {
        let symbolMinVal = parseInt(symbolRangeInput[0].value),
        symbolMaxVal = parseInt(symbolRangeInput[1].value);

        if ((symbolMaxVal - symbolMinVal) < symbolGap) {
            if (e.target.className === 'symbol-range-min') {
                symbolRangeInput[0].value = symbolMaxVal - symbolGap;
            } else {
                symbolRangeInput[1].value = symbolMinVal + symbolGap;
            }
        } else {
            symbolInput[0].value = symbolMinVal;
            symbolInput[1].value = symbolMaxVal;
            symbolRange.style.left = ((symbolMinVal / symbolRangeInput[0].max) * 100) + '%';
            symbolRange.style.right = 100 - (symbolMaxVal / symbolRangeInput[1].max) * 100 + '%';
        }
    })
})
