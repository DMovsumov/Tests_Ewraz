import React, {memo} from "react";
import {Wrapper} from "./index.styled";
import UsersItemList from "./components/Item";

const UsersList = ({ data, handleClick }) => {
    return (
        <Wrapper>
            {data.length && data.map((item, index) =>
                <UsersItemList key={item.firstName + item.lastName + index} userData={item} handleClick={() => handleClick(index)}/>)}
        </Wrapper>
    )
};

export default memo(UsersList);
