let id = new URLSearchParams(window.location.search).get("id");
let details = document.querySelector(".details")
fetch(`http://localhost:3000/services/${id}`)
.then(res=>res.json())
.then(data=>{

    
        details.innerHTML+=
        ` <div class="box1">
        <div class="img">
        <img
                src="${data.image}" alt="">
        </div>
        <h1>${data.name}</h1>
        <p>${data.description}</p>
    </div>  `
    })