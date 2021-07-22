const arr = [
        {type: 'bali', src: 'assets/bali1.jpg', rating: '5,0', name: 'Bali', country: 'Indonesia', price: '$3000'},
        {type: 'bali', src: 'assets/bali2.webp', rating: '4,0', name: 'Bali', country: 'Indonesia', price: '$3000'},
        {type: 'bali', src: 'assets/bali3.jpg', rating: '4,7', name: 'Bali', country: 'Indonesia', price: '$3000'},
        {type: 'maldives', src: 'assets/maldives1.jpg', rating: '5,0', name: 'Maldives', country: 'Maladewa', price: '$10000'},
        {type: 'maldives', src: 'assets/maldives3.webp', rating: '4,2', name: 'Maldives', country: 'Maladewa', price: '$10000'},
        {type: 'maldives', src: 'assets/maldives4.jpg', rating: '4,9', name: 'Maldives', country: 'Maladewa', price: '$10000'},
        {type: 'maldives', src: 'assets/senja1.jpg', rating: '4,9', name: 'Maldives', country: 'Maladewa', price: '$10000'},
        {type: 'komodo', src: 'assets/komodo1.jpg', rating: '4,0', name: 'Komodo Island', country: 'Indonesia', price: '$3000'},
        {type: 'komodo', src: 'assets/komodo2.jpg', rating: '4,9', name: 'Komodo Island', country: 'Indonesia', price: '$3000'},
        {type: 'komodo', src: 'assets/komodo3.jpg', rating: '4,9', name: 'Komodo Island', country: 'Indonesia', price: '$3000'},
        {type: 'miami', src: 'assets/miami1.jpg', rating: '4,0', name: 'Miami', country: 'Florida', price: '$3000'},
        {type: 'miami', src: 'assets/miami2.jpg', rating: '3,0', name: 'Miami', country: 'Florida', price: '$3000'},
        {type: 'miami', src: 'assets/miami3.jpg', rating: '4,8', name: 'Miami', country: 'Florida', price: '$3000'},
        {type: 'bora', src: 'assets/borabora.jpg', rating: '5,0', name: 'Bora-Bora', country: 'Polynesia', price: '$3000'},
        {type: 'bora', src: 'assets/borabora2.webp', rating: '4,0', name: 'Bora-Bora', country: 'Polynesia', price: '$3000'},
        {type: 'bora', src: 'assets/borabora3.jpg', rating: '4,0', name: 'Bora-Bora', country: 'Polynesia', price: '$3000'},
    ]

// yang bali ada di html
const buttonBali = document.getElementById('button-bali')
const buttonMaldives = document.getElementById('button-maldives')
const buttonKomodo = document.getElementById('button-komodo')
const buttonMiami = document.getElementById('button-miami')
const buttonBora = document.getElementById('button-bora')
const buttonAll = document.getElementById('button-all')

buttonBali.addEventListener('click', renderBali)
buttonMaldives.addEventListener('click', renderMaldives)
buttonKomodo.addEventListener('click', renderKomodo)
buttonMiami.addEventListener('click', renderMiami)
buttonBora.addEventListener('click', renderBora)
buttonAll.addEventListener('click', renderAll)

buttonBali.onclick = function(){
    buttonBali.classList.add("filter-active")

    buttonMaldives.classList.remove("filter-active")
    buttonKomodo.classList.remove("filter-active")
    buttonMiami.classList.remove("filter-active")
    buttonBora.classList.remove("filter-active")
    buttonAll.classList.remove("filter-active")
}

buttonMaldives.onclick = function(){
    buttonMaldives.classList.add("filter-active")

    buttonBali.classList.remove("filter-active")
    buttonKomodo.classList.remove("filter-active")
    buttonMiami.classList.remove("filter-active")
    buttonBora.classList.remove("filter-active")
    buttonAll.classList.remove("filter-active")
}

buttonKomodo.onclick = function(){
    buttonKomodo.classList.add("filter-active")

    buttonMaldives.classList.remove("filter-active")
    buttonBali.classList.remove("filter-active")
    buttonMiami.classList.remove("filter-active")
    buttonBora.classList.remove("filter-active")
    buttonAll.classList.remove("filter-active")
}

buttonMiami.onclick = function(){
    buttonMiami.classList.add("filter-active")

    buttonMaldives.classList.remove("filter-active")
    buttonBali.classList.remove("filter-active")
    buttonKomodo.classList.remove("filter-active")
    buttonBora.classList.remove("filter-active")
    buttonAll.classList.remove("filter-active")
}

buttonBora.onclick = function(){
    buttonBora.classList.add("filter-active")
    
    buttonMaldives.classList.remove("filter-active")
    buttonBali.classList.remove("filter-active")
    buttonKomodo.classList.remove("filter-active")
    buttonMiami.classList.remove("filter-active")
    buttonAll.classList.remove("filter-active")
}

buttonAll.onclick = function(){
    buttonAll.classList.add("filter-active")

    buttonMaldives.classList.remove("filter-active")
    buttonBali.classList.remove("filter-active")
    buttonKomodo.classList.remove("filter-active")
    buttonMiami.classList.remove("filter-active")
    buttonBora.classList.remove("filter-active")
}

function renderAll(){
    document.querySelector('#target').innerHTML = ''
    arr.forEach((item, index) => {
        const div = document.createElement('div')
        div.classList.add("place__card")

        const img = document.createElement('img')
        img.setAttribute('src', item.src)
        img.classList.add('place__img')

        const div2 = document.createElement('div')
        div2.classList.add('place__content')

        const span = document.createElement('span')
        span.classList.add("place__rating")

        const i = document.createElement('i')
        i.classList.add('ri-star-line')

        const span2 = document.createElement('span')
        span2.classList.add('place__rating-number')
        span2.innerText = item.rating

        span.append(i, span2)

        const div3 = document.createElement('div')
        div3.classList.add('place__data')

        const h3 = document.createElement('h3')
        h3.classList.add('place__title')
        h3.innerText = item.name

        const span3 = document.createElement('span')
        span3.classList.add('place__subtitle')
        span3.innerText = item.country

        const span4 = document.createElement('span')
        span4.classList.add('place__price')
        span4.innerText = item.price

        div3.append(h3, span3, span4)

        const button = document.createElement('button')
        button.classList.add('button', 'button--flex', 'place__button')

        const i2 = document.createElement('i')
        i2.classList.add('ri-arrow-right-line')

        button.append(i2)

        div2.append(span, div3)
        
        div.append(img, div2, button)
        
        const doc = document.getElementById('target')
        
        doc.append(div)
    })
    
}

function renderBali(){
    document.querySelector('#target').innerHTML = ''
    arr.forEach((item, index) => {
        if(item.type === 'bali'){
            const doc = document.getElementById('target')
            doc.innerHTML += `
            <div class="place__card">
                    <img src="${item.src}" alt="" class="place__img">

                    <div class="place__content">
                        <span class="place__rating">
                            <i class="ri-star-line"></i>
                            <span class="place__rating-number">${item.rating}</span>
                        </span>

                        <div class="place__data">
                            <h3 class="place__title">${item.name}</h3>
                            <span class="place__subtitle">${item.country}</span>
                            <span class="place__price">${item.price}</span>
                        </div>
                    </div>

                    <button class="button button--flex place__button">
                        <i class="ri-arrow-right-line"></i>
                    </button>
            </div>
            `
            
            
            
        }
    })
}

function renderMaldives(){
    document.querySelector('#target').innerHTML = ''
    arr.forEach((item, index) => {
        if(item.type === 'maldives'){

            const div = document.createElement('div')
            div.classList.add("place__card")
    
            const img = document.createElement('img')
            img.setAttribute('src', item.src)
            img.classList.add('place__img')
    
            const div2 = document.createElement('div')
            div2.classList.add('place__content')
    
            const span = document.createElement('span')
            span.classList.add("place__rating")
    
            const i = document.createElement('i')
            i.classList.add('ri-star-line')
    
            const span2 = document.createElement('span')
            span2.classList.add('place__rating-number')
            span2.innerText = item.rating
    
            span.append(i, span2)
    
            const div3 = document.createElement('div')
            div3.classList.add('place__data')
    
            const h3 = document.createElement('h3')
            h3.classList.add('place__title')
            h3.innerText = item.name
    
            const span3 = document.createElement('span')
            span3.classList.add('place__subtitle')
            span3.innerText = item.country
    
            const span4 = document.createElement('span')
            span4.classList.add('place__price')
            span4.innerText = item.price
    
            div3.append(h3, span3, span4)
    
            const button = document.createElement('button')
            button.classList.add('button', 'button--flex', 'place__button')
    
            const i2 = document.createElement('i')
            i2.classList.add('ri-arrow-right-line')
    
            button.append(i2)
    
            div2.append(span, div3)
            
            div.append(img, div2, button)
            
            const doc = document.getElementById('target')
            
            doc.append(div)
        }
    })
}

function renderKomodo(){
    document.querySelector('#target').innerHTML = ''
    arr.forEach((item, index) => {
        if(item.type === 'komodo'){

            const div = document.createElement('div')
            div.classList.add("place__card")
    
            const img = document.createElement('img')
            img.setAttribute('src', item.src)
            img.classList.add('place__img')
    
            const div2 = document.createElement('div')
            div2.classList.add('place__content')
    
            const span = document.createElement('span')
            span.classList.add("place__rating")
    
            const i = document.createElement('i')
            i.classList.add('ri-star-line')
    
            const span2 = document.createElement('span')
            span2.classList.add('place__rating-number')
            span2.innerText = item.rating
    
            span.append(i, span2)
    
            const div3 = document.createElement('div')
            div3.classList.add('place__data')
    
            const h3 = document.createElement('h3')
            h3.classList.add('place__title')
            h3.innerText = item.name
    
            const span3 = document.createElement('span')
            span3.classList.add('place__subtitle')
            span3.innerText = item.country
    
            const span4 = document.createElement('span')
            span4.classList.add('place__price')
            span4.innerText = item.price
    
            div3.append(h3, span3, span4)
    
            const button = document.createElement('button')
            button.classList.add('button', 'button--flex', 'place__button')
    
            const i2 = document.createElement('i')
            i2.classList.add('ri-arrow-right-line')
    
            button.append(i2)
    
            div2.append(span, div3)
            
            div.append(img, div2, button)
            
            const doc = document.getElementById('target')
            
            doc.append(div)
        }
    })
}

function renderMiami(){
    document.querySelector('#target').innerHTML = ''
    arr.forEach((item, index) => {
        if(item.type === 'miami'){

            const div = document.createElement('div')
            div.classList.add("place__card")
    
            const img = document.createElement('img')
            img.setAttribute('src', item.src)
            img.classList.add('place__img')
    
            const div2 = document.createElement('div')
            div2.classList.add('place__content')
    
            const span = document.createElement('span')
            span.classList.add("place__rating")
    
            const i = document.createElement('i')
            i.classList.add('ri-star-line')
    
            const span2 = document.createElement('span')
            span2.classList.add('place__rating-number')
            span2.innerText = item.rating
    
            span.append(i, span2)
    
            const div3 = document.createElement('div')
            div3.classList.add('place__data')
    
            const h3 = document.createElement('h3')
            h3.classList.add('place__title')
            h3.innerText = item.name
    
            const span3 = document.createElement('span')
            span3.classList.add('place__subtitle')
            span3.innerText = item.country
    
            const span4 = document.createElement('span')
            span4.classList.add('place__price')
            span4.innerText = item.price
    
            div3.append(h3, span3, span4)
    
            const button = document.createElement('button')
            button.classList.add('button', 'button--flex', 'place__button')
    
            const i2 = document.createElement('i')
            i2.classList.add('ri-arrow-right-line')
    
            button.append(i2)
    
            div2.append(span, div3)
            
            div.append(img, div2, button)
            
            const doc = document.getElementById('target')
            
            doc.append(div)
        }
    })
}

function renderBora(){
    document.querySelector('#target').innerHTML = ''
    arr.forEach((item, index) => {
        if(item.type === 'bora'){

            const div = document.createElement('div')
            div.classList.add("place__card")
    
            const img = document.createElement('img')
            img.setAttribute('src', item.src)
            img.classList.add('place__img')
    
            const div2 = document.createElement('div')
            div2.classList.add('place__content')
    
            const span = document.createElement('span')
            span.classList.add("place__rating")
    
            const i = document.createElement('i')
            i.classList.add('ri-star-line')
    
            const span2 = document.createElement('span')
            span2.classList.add('place__rating-number')
            span2.innerText = item.rating
    
            span.append(i, span2)
    
            const div3 = document.createElement('div')
            div3.classList.add('place__data')
    
            const h3 = document.createElement('h3')
            h3.classList.add('place__title')
            h3.innerText = item.name
    
            const span3 = document.createElement('span')
            span3.classList.add('place__subtitle')
            span3.innerText = item.country
    
            const span4 = document.createElement('span')
            span4.classList.add('place__price')
            span4.innerText = item.price
    
            div3.append(h3, span3, span4)
    
            const button = document.createElement('button')
            button.classList.add('button', 'button--flex', 'place__button')
    
            const i2 = document.createElement('i')
            i2.classList.add('ri-arrow-right-line')
    
            button.append(i2)
    
            div2.append(span, div3)
            
            div.append(img, div2, button)
            
            const doc = document.getElementById('target')
            
            doc.append(div)
        }
    })
}