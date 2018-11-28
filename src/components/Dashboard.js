import React, { Component } from "react";
import Header from "./Header/Header";


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div>
                        <button>new card</button>
                    </div>
                    <div>Get cards from api</div>
                    <div>create json / pdf / other</div>
                </div>
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