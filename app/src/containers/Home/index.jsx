import React from "react";
import {Wrapper} from "./index.styled";
import UsersListContainer from "./UsersListContainer";
import ActiveCardContainer from "./ActiveCardContainer";

const HomeContainer = () => {
    return (
        <Wrapper>
            <h1>Пользователи</h1>
            <ActiveCardContainer />
            <UsersListContainer />
        </Wrapper>
    )
}

export default HomeContainer;
