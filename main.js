let flags = ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_(Francis_Hopkinson).svg/1280px-Flag_of_the_United_States_(Francis_Hopkinson).svg.png", "https://images.prom.ua/2284305004_w640_h640_flag-gruzii-90h150sm.jpg"]
let lange = document.querySelector('.lange')
let flag = document.querySelector('.flag');
let img = document.querySelector('.imge');
let form = document.querySelector('.d-flex')
lange.addEventListener('change', () => {
    for (let i in flags) {
        if (lange.value === i) {
            img.classList.add("imge")
            img.src = flags[i];
            flag.appendChild(img);
            console.log(i);
        }
    }
});

let input = document.querySelector('.form-control');
let imgs = document.createElement('img');
form.appendChild(input);
form.appendChild(imgs);
imgs.classList.add("img")
input.classList.add("inputs");
let count = 0;
imgs.src = "https://smartygrants.co.nz/uploads/general/SG/_small/1024px-OOjs_UI_icon_search-ltr.svg.png"
imgs.addEventListener('click', function () {
    if (count == 0) {
        input.classList.add('kls')
        count++
    }
    else {
        input.classList.remove("kls");
        count--
    }

});
// სლაიდერი
let imge = document.querySelector('.imgs');
let next = document.querySelector('.next');
let back = document.querySelector('.back')
let index = 1;
let activs = document.querySelectorAll('.mrgvali')
back.addEventListener('click', () => {
    if (index === 1) {
        imge.style.transform = "translateX(-1412px)"
        index = 3;
    }
    else {
        imge.style.transform = `translateX(-${706 * (index - 2)}px)`
        index--;
    }
    for (let i of activs) {
        i.classList.remove('actives');
    }
    activs[index - 1].classList.add('activess');
})
next.addEventListener('click', () => {

    if (index === 3) {
        imge.style.transform = "translateX(0px)"
        index = 1;
    }
    else {
        imge.style.transform = `translateX(-${706 * index}px)`
        index++;
    }
    for (let i of activs) {
        i.classList.remove('actives');
    }
    activs[index - 1].classList.add('actives');
})
setInterval(() => {
    if (index === 3) {
        imge.style.transform = "translateX(0px)"
        index = 1;
    }
    else {
        imge.style.transform = `translateX(-${706 * index}px)`
        index++;
    }
    for (let i of activs) {
        i.classList.remove('actives');
    }
    activs[index - 1].classList.add('actives');
}, 3000);
let arrayap = [["./appimg/photo-1571715268998-d6e79bed5fc9.png", "Capital Confidential: ‘Big Short’ author contemplates taking on Brexit", "Oct. 29, 2019 at 6:06 a.m. ET"],
["./appimg/photo-1493612276216-ee3925520721.png", "U.K. assets are too hot to handle right now, top investors say", "Oct. 29, 2019 at 6:06 a.m. ET"],
["./appimg/pexels-photo-411207.png", "Europe’s largest money manager warns of an investment industry liquidity crisis", "Oct. 25, 2019 at 4:17 a.m. ET"],
["./appimg/photo-1522273500616-6b4757e4c184.png", "Short-seller Muddy Waters attacks litigation fund Burford", "Oct. 23, 2019 at 3:55 a.m. ET"],
["./appimg/photo-1483129804960-cb1964499894.png", "Wall Street falls on stalling economic rebound, stimulus impasse", "Oct. 22, 2019 at 6:06 a.m. ET "],
["./appimg/pexels-photo-325185.png", "Exclusive: U.S. offers tariff truce if Airbus repays billions in aid, sources say", "Oct. 21, 2019 at 6:06 a.m. ET"],
["./appimg/photo-1516893842880-5d8aada7ac05.png", "New York could emerge the winner from Brexit derivatives clash", "Oct. 20, 2019 at 4:17 a.m. ET"],
["./appimg/photo-1469122312224-c5846569feb1.png", "Analysis: Imported tortillas? Big Mexican farmers fear cuts will hit harvests", "Oct. 18, 2019 at 3:55 a.m. ET"]
];
let cardel = document.querySelector('.cardel');

function cardCreat(url, text, times) {
    let cards = document.createElement('div');
    cardel.appendChild(cards);
    cards.classList.add('cards')
    let imgcard = document.createElement('img');
    let txts = document.createElement('p');
    let time = document.createElement('p');
    cards.appendChild(imgcard);
    cards.appendChild(txts);
    cards.appendChild(time);
    imgcard.classList.add('imgcard');
    imgcard.classList.add('animate__backInRight')
    txts.classList.add('txts');
    time.classList.add('time');
    imgcard.src = url;
    txts.innerHTML = text;
    time.innerHTML = times;


}
for (let i = 0; i < arrayap.length; i++) {
    cardCreat(arrayap[i][0], arrayap[i][1], arrayap[i][2]);
}
askedAray = ["Search the employee directory?", "Find the corporate calendar?", "See my benefits?", "Get my computer fixed?", "Visit the learning center?", "View my vacation days?"]
let how = document.querySelector('.how')
let infor = document.createElement('div');
infor.classList.add('infor');
how.appendChild(infor);
function AskedQuestions(asked) {
    let cards = document.createElement('div')
    let card = document.createElement('div')
    infor.appendChild(cards);
    cards.appendChild(card)
    card.classList.add("askedcard")
    let txt = document.createElement('p');
    let icon = document.createElement('p');
    card.appendChild(txt);
    card.appendChild(icon);
    icon.innerHTML = ">";
    txt.innerHTML = asked;
    let answer = document.createElement('div');
    cards.appendChild(answer);
    answer.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur asperiores facere culpa numquam cumque sapiente iure enim tempora incidunt ipsa!"
    answer.classList.add('answr');
    card.addEventListener('click', () => {
        answer.classList.toggle('block')
        answer.classList.add('borRadtop')
        card.classList.add('borRadbot')
    })
}
for (let i = 0; i < askedAray.length; i++) {
    AskedQuestions(askedAray[i]);
}

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('animate__bounceInRight');
            setTimeout(() => {
                entry.target.classList.remove('animate__bounceInRight');
            }, 1500)
        }
    });
});
observer.observe(cardel);
let btn1 = document.querySelector('.btn1');
let usert = document.querySelector('.usert');
let container = document.querySelector('.container');
let btn = document.querySelector('.btn-primary')
let registered = document.querySelector('.registered')
let bols = false
btn1.addEventListener('click', () => {
    usert.classList.add('none');
    container.classList.add('blocks');
})
btn.addEventListener('click', () => {
    container.classList.remove('blocks');
    registered.classList.add('blocks');
})
let imgleft = document.querySelector('.imgleft');
let imgright = document.querySelector('.imgright');
imgleft.addEventListener('mouseover', () => {
    imgleft.classList.add('widthh')
    imgright.classList.add('widths')
})
imgleft.addEventListener('mouseout', () => {
    imgleft.classList.remove('widthh')
    imgright.classList.remove('widths')
})
imgright.addEventListener('mouseover', () => {
    imgright.classList.add('widthh')
    imgleft.classList.add('widths')
})
imgright.addEventListener('mouseout', () => {
    imgright.classList.remove('widthh')
    imgleft.classList.remove('widths')
});
let imgm = document.querySelectorAll('.imgm')
let cardem = document.querySelectorAll('.cardem');
for (let i=0;i<imgm.length;i++) {
    imgm[i].addEventListener('mouseover', () => {
        cardem[i].classList.add('blo')
    })
    imgm[i].addEventListener('mouseout', () => {
        cardem[i].classList.remove('blo')
       
    });
}



