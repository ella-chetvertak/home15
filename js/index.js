import '../css/style.css';
let charArr = [];
for (let i = 1; i < 11; i++) {
    let char =  fetch(`https://rickandmortyapi.com/api/character/${i}`).then(responce => responce.json());
    charArr.push(char);
}
let newArr = [];
const cards = document.querySelectorAll(".card");
Promise.all(charArr).then(resp => {
    for (let i = 0; i < resp.length; i++) {
        cards[i].querySelector(".name").innerHTML = resp[i].name;
        cards[i].querySelector(".specStat").innerHTML = `${resp[i].species} -- ${resp[i].status}`;
        cards[i].querySelector(".live-status").classList.add(resp[i].status);
        cards[i].querySelector(".content").querySelector("p").innerHTML = resp[i].location.name;
        cards[i].querySelector(".card-image").querySelector("img").setAttribute('src', resp[i].image);
        cards[i].classList.add(resp[i].gender, resp[i].status);
    }
});
document.querySelector(".form-container").addEventListener('click', function(e) {
    if (e.target.id === "male" && e.target.checked) {
        cards.forEach(el => {
            if (!el.className.match(/Male/g)) {
                el.style.display = 'none';
            }
        });
    } else if (!e.target.checked) {
        cards.forEach(el => {
            el.style.display = 'flex';
        });
    }
    if (e.target.id === "female" && e.target.checked) {
        cards.forEach(el => {
            if (!el.className.match(/Female/g)) {
                el.style.display = 'none';
            }
        });
    } else if (!e.target.checked) {
        cards.forEach(el => {
            el.style.display = 'flex';
        });
    }
    if (e.target.id === "alive" && e.target.checked) {
        cards.forEach(el => {
            if (!el.className.match(/Alive/g)) {
                el.style.display = 'none';
            }
        });
    } else if (!e.target.checked) {
        cards.forEach(el => {
            el.style.display = 'flex';
        });
    }
    if (e.target.id === "dead" && e.target.checked) {
        cards.forEach(el => {
            if (!el.className.match(/Dead/g)) {
                el.style.display = 'none';
            }
        });
    } else if (!e.target.checked) {
        cards.forEach(el => {
            el.style.display = 'flex';
        });
    }
});
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}