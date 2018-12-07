import React, { Component } from "react";
import CardActions from "../components/CardActionsButtons/CardActions";
import CardDeckButtons from "../components/CardDeckButtons/CardDeckButtons";
import CardList from "../components/CardsList/CardsList";
import Header from "./Header/Header";


export default class Dashboard extends Component {
    render() {
        return (
            <div>
              <Header />
              <CardDeckButtons />
              <CardActions />
              <CardList />
            </div>
        )
    }
};