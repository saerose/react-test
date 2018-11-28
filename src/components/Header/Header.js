import React, { Component } from "react";
import { NavBar, Title } from "./styles";


export default class Header extends Component {
    render() {
        return (
            <NavBar>
                <Title>The biggest blackest box</Title>
            </NavBar>
        )
    }
};