import React, { Component } from "react";
import Header from "./Header/Header";
import CardActions from "./CardActionsButtons/CardActions";
import CardDeckButtons from "./CardDeckButtons/CardDeckButtons";
import CardList from "./CardsList/CardsList";


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <CardActions />
                <CardDeckButtons />
                <CardList />
            </div>
        )
    }
};