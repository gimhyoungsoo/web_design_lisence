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
    const slide_wrap = document.querySelector("#B .slide_container")



        const animate = {
            marginLeft: "-100%",
        }
        const animateOptions = {
            duration: 500,
            // fill: "both",
            
        }
    const intervalId = setInterval(() => {
        slide_wrap.animate(animate, animateOptions).finished.then(()=>{
            slide_wrap.appendChild(slide_wrap.firstElementChild)
        })

    }, 3000);

}