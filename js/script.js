const container1 = document.getElementById("container1")
const container2 = document.getElementById  ("container2")



document.getElementById('container1').onscroll=()=>{
    console.log('scrolled')
    container1.classList.toggle('active')
    container2.classList.toggle('active')
}

