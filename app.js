// animation
const text = document.querySelectorAll(".thePaths");

for (let i = 0; i < text.length; i++) {
    console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

const lastWord = document.querySelector("#fourteenth");
const animation = document.querySelector("div.animation");
lastWord.addEventListener("animationend", () => {
    animation.style = "transition: all 1s ease; opacity: 0; pointer-events:none;";
})

// active
let navLinks = document.querySelectorAll('.nav-link');
for(var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click',function(){
        var cur = document.querySelector('active1');
        if(cur.length > 0){
            cur[0].className = cur[0].className.replace('active1', '');
        }
        this.className += 'active1';
    })
}

