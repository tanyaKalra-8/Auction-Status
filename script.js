// https://gauravgitacc.github.io/postAppData/auctionData.json
// let response = fetch(
//   "https://gauravgitacc.github.io/postAppData/auctionData.json"
// );

//fetch returns a promise
//that promise will indicate network call

// response.then((serverResponse) => {
//     //serverResponse is going to be instance of Response class
//     //data will be encoded

//     let data = serverResponse.json();

//     //data is of promise again

//     data.then((result) =>{
//         console.log(result);
//     })
//     data.catch((error) =>{
//         console.log("Failed to parse the data", error)
//     });
// })

// response.catch((error) => {
//     console.log("some error", error);
// })

//----------------------------------------------------

let cardsContainer = document.getElementsByClassName("cards-container")[0];
function addDataOnToUI(resultsList) {
  //takes care of the Dom manipulation

    for(let i=0;i<resultsList.length;i++){
        let card = resultsList[i];

        let innerCard = `
            <div class="top">
                <div class="status">
                    <b class="status-chip ${card.status.toLowerCase()}">${card.status}</b>
                    <span class="case-number">${card.caseNumber}</span>
                </div>
                <span class="date">${card.date}</span>
            </div>
            <div class="bottom">
                <b class="from-location">${card.fromLocation}</b>
                <span class="to-location">${card.toLocation}</span>
            </div>
    
            <span class="price">${card.fare}</span>
        `;
    
        let cardContainer = document.createElement("div")
        cardContainer.className = "card";
        cardContainer.innerHTML = innerCard;
        cardContainer.addEventListener("click", () => {
          document.cookie = `card= ${JSON.stringify(card)}; path=/auction.html`
          window.location.href= `/auction.html?case_number= ${card.caseNumber}`
        })

        cardsContainer.append(cardContainer)
    }
}

//other way using asyn and await

async function fetchData() {
  try {
    const result = await fetch(
      "https://gauravgitacc.github.io/postAppData/auctionData.json"
    );
    const data = await result.json();
    addDataOnToUI(data);
  } catch (error) {
    alert("Some error occured", error);
  }
}

fetchData();