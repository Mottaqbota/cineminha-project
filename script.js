localStorage.setItem('tickets-forsale', 40);
localStorage.setItem('tickets-sold', 0);

let QtdTickets = localStorage.getItem('tickets-forsale');
let TicketsComprados = localStorage.getItem('tickets-sold');

let filmForsale = {
    ticketsForsale: 40,
};

const filmConfig = {
    0: {
      filmeID: 0,
      nameFilm: "Super Mario Bros - O Filme",
      imgFilm: "https://uploads.jovemnerd.com.br/wp-content/uploads/2023/02/super_mario_bros_filme_poster__2b3rnu52-758x1200.jpeg",
      descFilm: ""
    },
    1: {
      filmeID: 1,
      nameFilm: "Velozes e Furiosos X",
      imgFilm: "https://s2.glbimg.com/srEPJBTXJB3_KKThSe0zUSBdlz8=/0x0:1080x1351/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/Q/g/IPSDQ1SVKCAFBEjZsj0w/vin-diesel-poster.jpg",
      descFilm: ""
    },
    2: {
      filmeID: 2,
      nameFilm: "A Morte do Demônio: A Ascensão",
      imgFilm: "https://claquete.com.br/fotos/filmes/poster/15290_medio.jpg",
      descFilm: ""
    },
    3: {
      filmeID: 3,
      nameFilm: "Exorcista do Papa",
      imgFilm: "https://www.cinesystem.com.br/filmes/images/poster/o-exorcista-do-papa.jpg",
      descFilm: ""
    },
    4: {
      filmeID: 4,
      nameFilm: "Guardiões da Galáxia 3",
      imgFilm: "https://legadodamarvel.com.br/wp-content/uploads/2023/02/poster-guardioes-da-galaxia-vol.-3-pose-nebula-legadodamarvel-scaled.webp",
      descFilm: ""
    }
};
      
let rootDiv = document.getElementById('root');
let filmsHTML = '';
      
for (var filmId in filmConfig) {
    var film = filmConfig[filmId];
    filmsHTML += `
        <div class="cardFilme" id="card-film-${film.filmeID}">
            <img class="imgFilme" src="${film.imgFilm}" alt="">
            <h1 class="tituloFilme">${film.nameFilm}</h1>
            <button class="btninfoFilme" onclick="comprar()">Comprar Ticket</button>
            <p class="descFilme" id="desc-film"></p>    
            <div id="qtd-tickets"></div>
        </div>
    `;
}

rootDiv.innerHTML = filmsHTML;

// var filmeID = film;


function comprar(){
    if(QtdTickets < 0){
        alert('Nenhum Ticket à Venda para este filme!')
        return
    };

    if(QtdTickets < 40){
        TicketsComprados++;
        localStorage.setItem('tickets-sold', TicketsComprados);
        alert(`1 Ticket Adquirido! Para o filme: ${film.nameFilm}`)
    };
    document.getElementById("qtd-tickets").style.display = ('flex');
    document.getElementById("qtd-tickets").innerHTML = `<p>Apenas: <strong>${QtdTickets} Tickets</strong> Disponíveis!</p><p><strong>${TicketsComprados} Tickets</strong> foram Vendidos!</p>`;
    
    localStorage.removeItem('tickets-forsale');
    localStorage.setItem('tickets-forsale', QtdTickets --);
}
