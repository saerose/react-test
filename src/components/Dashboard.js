import React, { Component } from "react";
import Header from "./Header/Header";
import CardActions from "./CardActions/CardActions";


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <CardActions />
                <div>
                    <div>
                        <button>click to black deck list</button>
                    </div>
                    <div>
                        <button>click white deck list</button>
                    </div>
                </div>
                <div>list of cards</div>
            </div>
        )
    }
};