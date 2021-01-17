import React from "react";
import Axios from "axios";

class playerCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    };
    componentDidMount() {
        Axios.get("/api/golfers/all/")
             .then(res => {
                 let player_cards = document.getElementById("players_list");
                 let listContainer = document.createElement("ul");
                 res.data.forEach(element => {
                    let playerImage = document.createElement("img");                    
                    let listItem = document.createElement("li");
                    let styledContainer = document.createElement("div");
                    let first_name = document.createElement("h1");
                    let last_name = document.createElement("h1");
                    let rank = document.createElement("p");
                    let tour = document.createElement("p");
                    let row = document.createElement("hr");

                    first_name.textContent = element.first_name;
                    last_name.textContent = element.last_name;
                    playerImage.src = element.player_image;
                    rank.textContent = element.rank;
                    tour.textContent = element.tour;

                    playerImage.style = "width: 200px; height: 200px;"
                    
                    styledContainer.appendChild(first_name);
                    styledContainer.appendChild(last_name);
                    styledContainer.appendChild(playerImage);
                    styledContainer.appendChild(rank);
                    styledContainer.appendChild(tour);
                    styledContainer.appendChild(row)

                    listItem.appendChild(styledContainer);
                    listContainer.appendChild(listItem);
                    player_cards.appendChild(listContainer);

                 });
                })
    }

    render() {
        return (
            <div>
                <li id="players_list">
                 

                </li>
            </div>
        )
    }

}

export default playerCard;