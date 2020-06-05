async function getRandomAdvice() {
    try {
        const res = await fetch('/v1/advice/random');
        const advice = await res.json();

        if (advice.err) {
            throw new Error();
        }

        const adviceElement = document.querySelector('.free-advice');
        adviceElement.textContent = advice.message;
    } catch (e) {
        console.log('There was an error.')
    }
}

async function searchForAdvice(query) {
    try {
        const res = await fetch(`/v1/advice/search/${query}`);
        const advice = await res.json();

        if (advice.err) {
            throw new Error();
        }

        const adviceElement = document.querySelector('.free-advice');
        adviceElement.textContent = advice.message;
    } catch (e) {
        console.log('There was an error.')
    }
}

getRandomAdvice();

const button = document.querySelector(".random-advice-button");
button.addEventListener("click", e => {
    e.preventDefault();
    getRandomAdvice();
});

const searchBar = document.querySelector("#search-bar");
const searchButton = document.querySelector(".search-button");

console.log({searchBar, searchButton});

searchButton.addEventListener("click", e => {
    e.preventDefault();
    searchForAdvice(searchBar.value);
})


