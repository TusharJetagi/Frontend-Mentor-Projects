let Advice = document.querySelector('.advice_text');
let advice_id = document.querySelector('.advice_no');
const btn = document.querySelector('.dice-img');

async function fetchData() {
    try {
        let response = await fetch('https://api.adviceslip.com/advice');
        let data = await response.json();
        Advice.innerText = data.slip.advice;
        advice_id.innerText = data.slip.id;
    } catch (error) {
        console.error('Error fetching data:', error);
    }

}

btn.addEventListener('click', fetchData);
