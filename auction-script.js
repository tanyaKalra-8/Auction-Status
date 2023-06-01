let cookie = document.cookie;
if(cookie){
    let obj = cookie.split("=")[1];

    let data = JSON.parse(obj)

    let cardsContainer = document.getElementsByClassName("cards-container")[0];

    let innerCard = `
            <div class="top">
                <div class="status">
                    <b class="status-chip ${data.status.toLowerCase()}">${data.status}</b>
                    <span class="case-number">${data.caseNumber}</span>
                </div>
                <span class="date">${data.date}</span>
            </div>
            <div class="bottom">
                <b class="from-location">${data.fromLocation}</b>
                <span class="to-location">${data.toLocation}</span>
            </div>
    
            <span class="price">${data.fare}</span>
        `;
    
        let cardContainer = document.createElement("div")
        cardContainer.className = "card";
        cardContainer.innerHTML = innerCard;

        cardsContainer.append(cardContainer)
}