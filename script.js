// Menu Button
const hamburger = document.getElementById("_hamburger");
const navContent = document.getElementById("_nav-content");

hamburger.addEventListener("click", () => {
    navContent.classList.toggle("show");
});

// About US
const card = document.querySelectorAll(".about-content");
window.addEventListener("scroll",animateCards);

function animateCards(){
    // const checkingBottom = (window.innerHeight / 4) * (125/25);
    const checkingBottom = (window.innerHeight / 4) * (100/25);
    
    card.forEach((singleCard)=>{
        const cardTop = singleCard.getBoundingClientRect().top;
        
        let toSlideIn = cardTop < checkingBottom;

        if(toSlideIn){
            singleCard.classList.add("slideIn");
        }else{
            singleCard.classList.remove("slideIn");
        }
    });
}