console.log("Its magic!");

// =================================================
// ___lvl_2-3_js-conditional_statement_difference __

const ranNum = document.querySelector('form input[type="text"]')
const y = 27;


function multi() {
    if ((ranNum.value - y) > y) {
        console.log((ranNum.value - y) * 2);
    } else if ((ranNum.value - y) < y) {
        console.log ((ranNum.value - y))
        }
    }