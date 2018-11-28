import React, { Component } from "react";


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>The biggest blackest box</h1>
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