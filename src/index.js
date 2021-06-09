const button = document.querySelector('#Load');
const cardList = document.querySelector('#renderContainerCard')

function renderCard(cardObj) {
    const card = `
            <div class="card-wrap">
            <div class="card">
                <img class="card__image" src="${cardObj.url}"  alt="...">
                <h2 class="card__title">
                ${cardObj.title}
                </h2>
                <div class="row">
                    <p class="card__price">$<span class="card__special-text">109</span>.00</p>
                    <button class="button card__button">
                        Купить
                    </button>
                </div>
                <p class="card__text">
                    Характеристики
                </p>
            </div>
        </div>`
    cardList.insertAdjacentHTML('beforeend', card)
    }

function getData() {
        return fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                const json = res.json();
                return json.then(Promise.reject.bind(Promise))
            })
            .catch((err) => {
                throw err;
            })

}
const refresh = () => {
    getData().then((data) => {
        return data.forEach((el) => {
            renderCard(el)
        })
    })
}

button.addEventListener('click', refresh)