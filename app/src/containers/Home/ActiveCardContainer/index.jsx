import React from "react";
import useActiveCardContainer from "./hooks/useActiveCardContainer";
import ActiveCard from "../../../components/ActiveCard";
import {WrapperContainer} from "./styled.index";
import Loader from "../../../components/Loader";

const ActiveCardContainer = () => {
    const { activeUser, loading } = useActiveCardContainer();

    return (
        <WrapperContainer>
            { loading ? <Loader/> : <ActiveCard user={activeUser} />}
        </WrapperContainer>
    )
}

export default ActiveCardContainer;
