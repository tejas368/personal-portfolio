const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector('.progress-bars-wrapper');
const progressBarPercents = [95,85,80,85,80,65,50];




window.addEventListener('scroll', ()=>{
    mainFn();
})   
const mainFn = () => {
        if(window.pageYOffset >= navbarOffsetTop){
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    
        sections.forEach((section,i)=>{
            if(window.pageYOffset >= section.offsetTop-10) {
                navbarLinks.forEach((navbarLink) => {
                    navbarLink.classList.remove("change");
                })
                navbarLinks[i].classList.add("change");
            }
        });
        // console.log("height", window.pageYOffset+window.innerHeight, progress.offsetTop);
    
        if(window.pageYOffset + window.innerHeight >= progress.offsetTop){
            document.querySelectorAll('.progress-percent').forEach((el, i)=>{
                el.style.width = `${progressBarPercents[i]}%`;
                el.previousElementSibling.firstElementChild.textContent = progressBarPercents[i];
            });
        }
    }

mainFn();

window.addEventListener('resize', ()=>{
    window.location.reload();
})
