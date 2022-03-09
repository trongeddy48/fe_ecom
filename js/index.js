let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// enable slide when mouse leave out slider
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// slider control

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

setInterval(() => {
    if (!slide_play) return
    nextSlide()
    showSlide()
}, 4000);

// render products

let products = [
    {
        name: 'BAG KEY PURPLE',
        image1: './images/bag1.jpg',
        image2: './images/bag1_hover.jpg',
        old_price: '300.000 VND',
        curr_price: '299.000 VND'
    },
    {
        name: 'BAG JR BLACK',
        image1: './images/bag2.jpg',
        image2: './images/bag2_hover.jpg',
        old_price: '400.000 VND',
        curr_price: '300.000 VND'
    },
    {
        name: 'BAG TUNE BLUE OCEAN',
        image1: './images/bag3.jpg',
        image2: './images/bag3_hover.jpg',
        old_price: '400.000 VND',
        curr_price: '300.000 VND'
    },
    {
        name: 'BAG BLUE HORIZON',
        image1: './images/bag4.jpg',
        image2: './images/bag4_hover.jpg',
        old_price: '400.000 VND',
        curr_price: '300.000 VND'
    },
    {
        name: 'BAG CAROL BLACK',
        image1: './images/bag5.jpg',
        image2: './images/bag5_hover.jpg',
        old_price: '400.000 VND',
        curr_price: '300.000 VND'
    },
    {
        name: 'BAG CAROL PINK',
        image1: './images/bag6.jpg',
        image2: './images/bag6_hover.jpg',
        old_price: '400.000 VND',
        curr_price: '300.000 VND'
    },
    {
        name: 'BAG CAROL GREY',
        image1: './images/bag7.jpg',
        image2: './images/bag7_hover.jpg',
        old_price: '400.000 VND',
        curr_price: '300.000 VND'
    },
]

let product_list = document.querySelector('#latest-products')
let best_product_list = document.querySelector('#best-products')

products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">xem ngay</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>${e.old_price}</del></span>
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `

    product_list.insertAdjacentHTML("beforeend", prod)
    best_product_list.insertAdjacentHTML("afterbegin", prod)
})