let cards = document.getElementById("cards");
function crearCard (array, where){
    let card = document.createElement("div")
    for (let cardSmall of array){
        card.innerHTML += ` <section class="card m-2 d-flex flex-column justify-content-center align-items-center" style="width: 18rem; height: 22rem;">
        <img src=${cardSmall.image} class="card-img-top m-3 " style="width: 220px; height: 130px;" alt="...">
        <section class="card-body d-flex flex-column justify-content-center align-items-center">
          <h5 class="card-title">${cardSmall.name}</h5>
          <p class="card-text" style="text-align: justify;">${cardSmall.description}.</p>
          <a href="#" class="btn btn-primary" style="background-color: #D90368;">Go somewhere</a>
        </section>`

    }
    where.append(card)
}
crearCard(data, cards)