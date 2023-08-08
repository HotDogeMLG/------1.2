menuButtonFunction = () => {
    document.querySelector("header").classList.toggle("open")
}

console.log('1')
advArrowFunction = () => {
    const LaptopAdvItems = document.querySelectorAll(".laptop-adv__item")
    LaptopAdvItems.forEach((element) => {
        element.classList.toggle("laptop-adv__item_active")
    })
    document.querySelector(".adv__arrow").classList.toggle("adv__arrow_active")
    document.querySelector(".adv .price").classList.toggle("price_active")
}