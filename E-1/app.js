window.onload = () => {
    ModalInit()
    SlideInit()
}

function ModalInit() {
    const modal = document.querySelector("#modal")
    const modal_closeBtn = document.querySelector("#modal button")

    modal_closeBtn.addEventListener("click", () => {
        modal.style.visibility = "hidden"
        console.log("hidden active")
    })

    const first_p = document.querySelector("#C .notice ul li > a")
    first_p.addEventListener("click", () => {
        modal.style.visibility = "visible"
        console.log("visible active")
    })
}

function SlideInit() {
    const slide = document.querySelector("#B .slide_container")
    slide.append(slide.firstElementChild.cloneNode(true))
    let i = 0;
    let timerId = setInterval(() => {
        
        if ((i < 4)) {
            slide.style.transition = `transform 0.5s`
            slide.style.transform = `translateX( calc( ${-i * 100}vw + ${i * 600}px ))`
            i++;
           
        }
        else {
            slide.style.transition = `transform 0s`
            slide.style.transform = `translateX(0)`
            i = 0
        }
        
        
    },1500)
}