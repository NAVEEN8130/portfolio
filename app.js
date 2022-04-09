const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    const navlink = document.querySelectorAll('.nav-link li');

    burger.addEventListener('click', () => {
        // Taggle Nav
        nav.classList.toggle('nav-active');
    
    // animate links
    navlink.forEach((link,index) => {
        if(link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;

        }
    });    
    // burger animation
    burger.classList.toggle('toggle');

    });
    }

navSlide();

const item1 = document.querySelector(".item1")
const item2 = document.querySelector(".item2")
const item3 = document.querySelector(".item3")
const item4 = document.querySelector(".item4")

const navToggle = () => {
    const nav = document.querySelector('.nav-link');
    const burger = document.querySelector('.burger');
    const navlink = document.querySelectorAll('.nav-link li');

    console.log("hello");
    nav.classList.toggle('nav-active');

        navlink.forEach((link,index) => {
        if(link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;

        }
    }); 

    burger.classList.toggle('toggle');
}

item1.addEventListener("click", navToggle)
item2.addEventListener("click", navToggle)
item3.addEventListener("click", navToggle)
item4.addEventListener("click", navToggle)





