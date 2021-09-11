import React from "react";
import {ButtonWrap} from "./styled.index";

const Button = ({left, disabled, clickHandler}) => {
    return (
        <ButtonWrap disabled={disabled} onClick={clickHandler}>
            {left ? '<' : '>'}
        </ButtonWrap>
    )
}

export default Button
