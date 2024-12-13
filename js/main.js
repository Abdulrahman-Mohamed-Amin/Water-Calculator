//***********  start drink water  ***********8///

let smallGlass = document.querySelectorAll(".sm_glass")
let detils = document.querySelector(".detils p span")
let percent = document.querySelector(".big_glass .percent")
let mainDetils = document.querySelector(".big_glass .detils")
let percentSpan = document.querySelector(".big_glass .percent span")
let detilsInner = detils.innerText


smallGlass.forEach((glass , idx) =>{
  glass.addEventListener("click" , (e) =>{

    if(idx === 7 && smallGlass[idx].classList.contains("active")){
      idx--
    } 
    else if(smallGlass[idx].classList.contains("active") && !smallGlass[idx].nextElementSibling.classList.contains("active")){
      idx--
    }

    smallGlass.forEach((cub , idx2) =>{
      if(idx2 <= idx){
        cub.classList.add("active")
        console.log(idx , idx2)
      }else{
        cub.classList.remove("active")
        console.log(idx , idx2)
      }
    })
    if(idx == -1){
 
      idx++
    }
    let activeGlass = document.querySelectorAll(".sm_glass.active")
    
    // remove active


    // percent 
    
    percent.style.height = `${12.5 * activeGlass.length}%`
    mainDetils.style.height = `${100 - (12.5 * activeGlass.length)}%`

    percentSpan.innerHTML = `${12.5 * activeGlass.length}`
    
    detils.innerHTML = detilsInner - (activeGlass.length * 0.25)

    if(mainDetils.style.height == "0%"){
      mainDetils.style.opacity = "0"
    }else{
      mainDetils.style.opacity = "1"

    }
  })
})