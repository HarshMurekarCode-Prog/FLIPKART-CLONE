// ================================
// IMAGE SLIDER
// ================================

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function prevSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto Slide Every 3 Seconds
setInterval(nextSlide, 3000);

// ================================
// CART
// ================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCounter = document.querySelector(".cart-count");

function updateCartCounter() {

    cartCounter.innerText = cart.length;

    localStorage.setItem("cart", JSON.stringify(cart));
}

updateCartCounter();

const buttons = document.querySelectorAll(".add-cart");

buttons.forEach((button) => {

    button.addEventListener("click", function () {

        const card = this.parentElement;

        const product = {

            name: card.querySelector("h3").innerText,

            price: card.querySelector("p").innerText,

            image: card.querySelector("img").src

        };

        cart.push(product);

        updateCartCounter();

        showToast(product.name + " added to cart");

    });

});

// ================================
// TOAST MESSAGE
// ================================

function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 2500);

}

// ================================
// PRODUCT SEARCH
// ================================

const searchInput = document.querySelector(".search input");

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

        const productName = card.querySelector("h3").innerText.toLowerCase();

        if (productName.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});