// write your code here
document.addEventListener('DOMContentLoaded', function(){
  fetchCards(); 
})

function fetchCards() {
    const cardURL = "http://localhost:3000/ramens"
    fetch(cardURL)
    .then(resp => resp.json())
    .then(ramenData => ramenData.forEach(ramen => renderOneRamen(ramen)))
}

function renderOneRamen(ramen){
    console.log(ramen) 
    let card = document.createElement('card')
    card.className = 'card'
    card.innerHTML = `<img src='${ramen.image}'/>`
    card.src = `${ramen.image}`
    card.alt = `${ramen.name}`
    card.rating = `${ramen.rating}`
    card.restaurant = `${ramen.restaurant}`
    card.comment = `${ramen.comment}`
    card.image = `<img src = ${ramen.image}>`
    //Add Ramen image to display
    document.querySelector('#ramen-menu').append(card)
    //Add event listener
    card.addEventListener('click', function(){
        document.querySelector(`#ramen-detail`).innerHTML =`     <img class="detail-image" src="${ramen.image}" alt="${ramen.name}" />
        <h2 class="name">${ramen.name}</h2>
        <h3 class="restaurant">${ramen.restaurant}</h3>
      </div>`
      document.querySelector(`#rating-display`).innerHTML = `${ramen.rating}`;
      document.querySelector(`#comment-display`).innerHTML = `${ramen.comment}`;
})
}
//Event listeners
document.querySelector(`#new-ramen`).addEventListener('submit', handleSubmit)
//Event handlers
function handleSubmit(e){
    e.preventDefault()
    renderOneRamen(e);
}   

