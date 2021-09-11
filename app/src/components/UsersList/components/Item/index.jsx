import React, {memo} from "react";
import {Img, Wrapper, NameTitle} from "./index.styled";

const UsersItemList = ({ userData, handleClick }) => {
    return (
        <Wrapper onClick={handleClick}>
            <Img/>
            <NameTitle>{`${userData.firstName} ${userData.lastName}`}</NameTitle>
        </Wrapper>
    )
}

export default memo(UsersItemList);
