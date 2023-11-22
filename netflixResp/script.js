const label = document.querySelector(".label-deneme")
const input = document.querySelector(".input-deneme")

input.addEventListener("focusin",function(){
    label.classList.add("label-active")
})
input.addEventListener("focusout",function(){
    if(input.value.length == 0){
    label.classList.remove("label-active")

    }
})

const tetik = document.querySelectorAll(".accordion-tetik")
const open = document.querySelectorAll(".accordion-open")
tetik.forEach(tak=>{
    tak.addEventListener("click",function(){
        let goster = this.parentElement.children[1]
        let icon = this.children[1]
        if(goster.classList.contains("accordion-active")){
            goster.classList.remove("accordion-active")
            icon.classList.remove("carpi")
           
        }else{
            open.forEach(e=>{
                e.classList.remove("accordion-active")
                
            })
            tetik.forEach(e=>{
                e.children[1].classList.remove("carpi")
            })
    
            // console.log(this.parentElement.children[1])
          
            goster.classList.toggle("accordion-active")
            // console.log(this.children[1])
           
    
            icon.classList.toggle("carpi")
            
        }
        

    })
})
