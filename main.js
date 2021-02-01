const pinGenarateBtn = document.getElementById('genarate-pin');
let tryLeftValue;
function hideAll() {
    document.getElementById('inCorrect').style.display = 'none';
    document.getElementById('correct').style.display = 'none';
};
hideAll()
const tryLeft = document.getElementById('tryLeft');
// function timeOut10Sec(seconds, id) {

//     hideAll();
//     document.getElementById('submitBtn').disabled = true;
//     for (let i = seconds; i > 0; i--) {
//         let timerID= setTimeout(function(){console.log('hello');},1000);
//         document.getElementById(id).innerHTML = 'wait till ' + i + ' seconds';
//     }
//     clearTimeout(timerID);
//     document.getElementById('submitBtn').disabled = false;
//     document.getElementById(id).innerHTML = '<span id="tryLeft">3</span> try left';
// }
let randGen = () => (Math.random() * 10000 + '').split('.')[0];



pinGenarateBtn.addEventListener('click', pinGen)
function pinGen() {
    let genaratedPin = randGen();
    if (genaratedPin.length == 4) document.getElementById('pin-genarated-input').value = genaratedPin;
    else {
        pinGen();
    }
};

const btnSelector = document.querySelector('.calc-body');
const getInputTyped = document.querySelector('#typed-input');
btnSelector.addEventListener('click', function (e) {
    if (isNaN(e.target.innerText)) {
        if (e.target.innerText == 'DEL') getInputTyped.value = getInputTyped.value.substr(0, getInputTyped.value.length - 1);
        else if (e.target.innerText == 'CLR') {
            getInputTyped.value = '';
            hideAll();
        }
    }
    else getInputTyped.value = getInputTyped.value + e.target.innerText;
});


const getSubmitBtn = document.getElementById('submitBtn');
getSubmitBtn.addEventListener('click', () => {
    if (getInputTyped.value != '') {
        if (getInputTyped.value === document.getElementById('pin-genarated-input').value) {
            document.getElementById('inCorrect').style.display = 'none';
            document.getElementById('correct').style.display = 'block';
            document.getElementById('tryLeft').innerHTML = '3';
        }
        else {
            document.getElementById('inCorrect').style.display = 'block';
            document.getElementById('correct').style.display = 'none';
            tryLeftValue = parseInt(tryLeft.innerText);
            tryLeftValue--;
            if (tryLeftValue < 0) {
                // timeOut10Sec(3, "wait");
                tryLeft.innerText = 3;
            }
            else tryLeft.innerText = tryLeftValue;

        }
    }

});