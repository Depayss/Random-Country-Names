let countries = [`German Reich`, `Kingdom of Italy`, `Romania`, `Bulgaria`, `Empire of Japan`];
let result = document.querySelector(`span`);

result.innerHTML = countries[0]

function toSelect(){
    var n = Math.random();
    n = n*5;
    result.innerHTML = countries[(Math.floor(n))]
}

btn.addEventListener(`click`, toSelect)
