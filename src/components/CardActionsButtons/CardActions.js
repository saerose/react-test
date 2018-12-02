import React, { Component } from "react";
import { ActionWrapper, Button} from "./styles";


export default class CardActions extends Component {
    render() {
        return (
                <ActionWrapper>
                    <Button>New card ✨</Button>
                    <Button>Create JSON 🙉</Button>
                    <Button>Create PDF 🙈</Button>
                </ActionWrapper>
        )
    }
};