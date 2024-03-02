// let btn=document.getElementById("btn")
// let asalMi=document.getElementById("asalMi")
// let count=0
// btn.onclick=()=>{
//     let sayi=+asalMi.value
//     for(let i=2;i<=(sayi/2)+1;i++){
//         if(sayi%i==0){
//             count++
//             document.write("Sayı Asal Değil")
//             break
//         }
//     }
//     if(count==0){
//         document.write("Sayı Asaldır.")
//     } 
// }
// Soru- Bir div tagı içerisine 500px 500px ve butona he basıldığında 100px 100px sıralı bir şekilde div oluşturun ama en fazla 9 div oluşturailirsiniz 9 dan sonra her bastığında sayı artmayacak
let push=document.getElementById("push")
let mainDiv=document.getElementById("mainDiv")

// let inToDiv=document.getElementById("div")
let count=0

push.onclick=()=>{
    if(count>8){
        // mainDiv.removeChild(mainDiv.lastChild)
        mainDiv.replaceChildren()
        // count--
        child==0
    }
    count++;
    mainDiv.style.display="flex"
    mainDiv.style.flexWrap="wrap"
    mainDiv.style.justifyContent="space-around"
    mainDiv.style.alignItems="center"
    let div=document.createElement("div")
    div.style.width="100px"
    div.style.height="100px"
    div.style.border="7px solid black"
    div.style.backgroundColor="orangered"
    div.style.display="inline-flex"
    mainDiv.appendChild(div)
}

    

