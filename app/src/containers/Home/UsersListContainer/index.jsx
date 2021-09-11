import React from "react";
import {Wrapper, WrapperContainer} from "./index.styled";
import useUsersListContainer from "./hooks/useUsersListContainer";
import Button from "../../../components/Button";
import UsersList from "../../../components/UsersList";

const UsersListContainer = () => {
    const { allUsers, handleClick, indexUser, buttonHandler } = useUsersListContainer()

    return (
        <WrapperContainer>
            <Wrapper>
                <Button left disabled={indexUser === 0} clickHandler={() => buttonHandler('prev')}/>
                <UsersList data={allUsers} handleClick={handleClick} />
                <Button disabled={indexUser === allUsers.length - 1} clickHandler={() => buttonHandler('next')}/>
            </Wrapper>
        </WrapperContainer>
    )
}

export default UsersListContainer;
