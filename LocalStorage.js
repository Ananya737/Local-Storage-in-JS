

//Local storage:
let inpname=document.querySelector("#inpname");
let show= document.querySelector("#show");
let show1= document.querySelector("#show1");
let show2= document.querySelector("#show2");

let login = ()=>{
    localStorage.setItem("Name","Ananya")
    localStorage.setItem("Age","22")
    localStorage.setItem("City","Sagar")

    show.innerHTML=localStorage.getItem("Name")
    show1.innerHTML=localStorage.getItem("Age")
    show2.innerHTML=localStorage.getItem("City")

    // location.reload()

}


 


let logout=()=>{


    localStorage.removeItem("Name");
    localStorage.removeItem("Age");
    localStorage.removeItem("City");

    location.reload()
    


}