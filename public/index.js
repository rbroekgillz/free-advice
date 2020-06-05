async function getRandomAdvice() {
    try {
        const res = await fetch('/v1/advice/random');
        const advice = await res.json();
        const adviceElement = document.querySelector('.free-advice');
        adviceElement.textContent = advice.message;
    } catch (e) {
        console.log('There was an error.')
    }
}

getRandomAdvice();