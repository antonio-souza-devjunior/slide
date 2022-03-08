'use strici';

const imagens = [
    {'url':'imagens/chrono.jpg'},
    {'url':'imagens/inuyasha.jpg'},
    {'url':'imagens/tenchi.jpg'},
    {'url':'imagens/tenjhotenge.jpg'},
    {'url':'imagens/yuyuhakusho.jpg'},
    {'url':'imagens/ippo.png'},
]

const containerslide = document.querySelector("#container-items");

const loadslide = (images, container) => {
    imagens.forEach (image =>{
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
                </div>
        `
    })
}


loadslide(imagens, containerslide); 

let items = document.querySelectorAll(".item");

const previous = () => {
    containerslide.appendChild(items[0]);
    items = document.querySelectorAll(".item");
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerslide.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)