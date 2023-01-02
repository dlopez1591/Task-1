function pastEvents (data){
    let pastEvents = []
    for (let event of data.events){
        let currentDate = new Date (data.currentDate)
        let dateEvent = new Date (event.date)
        if(currentDate > dateEvent){
            pastEvents.push(event);
        }
    }
    return pastEvents
    }
    
    
    let cards = document.getElementById("cards");
    function crearCard (array, where){
        let card = document.createElement("div")
        for (let cardSmall of array){
            card.innerHTML += ` <div class="card m-2 d-flex flex-column justify-content-center align-items-center" style="width: 18rem; height: 22rem;">
            <img src=${cardSmall.image} class="card-img-top m-3 " style="width: 220px; height: 130px;" alt="...">
            <div class="card-body d-flex flex-column justify-content-center align-items-center">
              <h5 class="card-title">${cardSmall.name}</h5>
              <p class="card-text" style="text-align: justify;">${cardSmall.description}.</p>
              <a href="./events.html" class="btn btn-primary" style="background-color: #D90368;">View More</a>
            </div>`
    
        }
        where.append(card)
    }
    crearCard(pastEvents (data), cards)