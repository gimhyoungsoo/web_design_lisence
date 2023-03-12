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
    slide_wrap.append(slide_wrap.firstElementChild.cloneNode(true))
    const slide_nodelist = document.querySelectorAll("#B .slide_container div")
    // const slide_arr = Array.from(slide_nodelist)


    const options = {
        duration: 500,
        iterations: 1,
        fill: "both",
    };
    let i = 0
    const intervalId = setInterval(
        // 첫번째 node를 cloneNode해 appendChild하는 방식은 수동조작 carousel에서 적합하다고 판단됨 (마지막 노드에서 첫번째 노드로 넘아간뒤 다시 슬라이드가 시작되는 부분에서 setInterval이 두번 반복되어 첫번째 node가 다른 노드보다 두배 많이 노출됨)
        Slide,
        3000)

    function Slide() {
        if (i < 3) {
            i++
            console.log(i)
            slide_wrap.animate(
                { marginLeft: `-${i * 100}%` }
                , options)
        }
        else {
            
            slide_wrap.animate(
                { marginLeft: `0` }, { duration: 0, fill: "forwards" }
            )
            i = 0
        }

    }
}