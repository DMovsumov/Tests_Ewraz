import React from "react";
import PropTypes from 'prop-types'
import {WrapperContainer} from "./index.styled";

const MainLayout = ({ children }) => {
    return (
        <WrapperContainer>
            {children}
        </WrapperContainer>
    )
}

export default MainLayout;

MainLayout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}
