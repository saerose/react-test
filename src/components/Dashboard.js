import React, { Component } from "react";
import Header from "./Header/Header";
import CardActions from "./CardActionsButtons/CardActions";
import CardDeckButtons from "./CardDeckButtons/CardDeckButtons";


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <CardActions />
                <CardDeckButtons/>
                <div>list of cards</div>
            </div>
        )
    }
};