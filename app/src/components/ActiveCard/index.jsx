import React, {memo, useMemo} from "react";
import {Title, Wrapper, Img} from "./index.styled";

const ActiveCard = ({ user }) => {
    const {firstName, lastName, thirdName, position, dateEmployment, dateBirth, experience, age} = user;

    return (
        <Wrapper>
            <Img/>
            <Title><strong>Имя:</strong> {firstName}</Title>
            <Title><strong>Фамилия:</strong> {lastName}</Title>
            <Title><strong>Отчество:</strong> {thirdName}</Title>
            <Title><strong>Должность:</strong> {position}</Title>
            <Title><strong>Дата трудоустройства:</strong> {new Date(dateEmployment).toLocaleDateString()}</Title>
            <Title><strong>Дата рождения:</strong> {new Date(dateBirth).toLocaleDateString()}</Title>
            <Title><strong>Стаж:</strong> {experience}</Title>
            <Title><strong>Возраст:</strong> {age}</Title>
        </Wrapper>
    )
}

export default memo(ActiveCard);
