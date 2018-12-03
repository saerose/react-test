import React, { Component } from "react";
import Header from "../components/Header/Header";
import CardActions from "../components/CardActionsButtons/CardActions";
import CardDeckButtons from "../components/CardDeckButtons/CardDeckButtons";
import CardList from "../components/CardsList/CardsList";


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