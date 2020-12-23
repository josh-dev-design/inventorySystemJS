
const dapi = async () =>{
        const response = await fetch('http://localhost:3000/get-Inventory-System-books')
    if(response.ok){
        const vald = await response.json()
        return Promise.resolve(vald)
    } else{
        return Promise.resolve('Not Found')
    }
}

let arr = []
dapi().then(data =>{
    
    arr = data
 
    let x = data.quantity
    for(let i = 0; i < data.length; i++){
        const quantity = document.getElementById('quantity')
        const title = document.getElementById('title')
        const author = document.getElementById('author')
        const price = document.getElementById('price')


        const createTitleTd = document.createElement('td')
        title.appendChild(createTitleTd)
        title.append(data[i].title)
        

        const createQuantityTd =document.createElement('td')

        quantity.appendChild(createQuantityTd)
        quantity.append(data[i].quantity)

        const createAuthorTd = document.createElement('td')
        author.appendChild(createAuthorTd)
        author.append(data[i].author)

        const createPriceTd = document.createElement('td')
        price.appendChild(createPriceTd)
        price.append("₱ " + data[i].price)
    }
})

const containerSection = document.getElementById('container-section')
const hoverButton = document.getElementById('addhover').addEventListener('click', ()=>{
    if(containerSection.style.display === "block"){
        containerSection.style.display = "none"
    }else{
        containerSection.style.display = "block"
    }
})

