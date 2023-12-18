let s2boxes = document.querySelector(".favorites");

function getDataJson(){
fetch("http://localhost:3000/favorites")
.then(ress=>ress.json())
.then(data=>{
  data.forEach(item => {
   
        
        s2boxes.innerHTML+=
        `  <div class="box1">
        <div class="img">
        <img
                src="${item.image}" alt="">
        </div>
        <h1>${item.name}</h1>
        <p>${item.description}</p>
        
        <button onClick='deleteItem(${item.id})'>Delete</button>
        
    </div> `
    })
})
}
getDataJson()


const deleteItem = (id) => {
    axios.delete('http://localhost:3000/favorites/'+id)
    .then(res=>{
      console.log(res.data);
      alert(`${id} nömrəli  uğurla silindi`)
      window.location.reload();
    })
  }