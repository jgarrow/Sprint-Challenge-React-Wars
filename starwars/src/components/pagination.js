import React from "react";
import styled from "styled-components";

const Pagination = styled.ul`
    display: flex;
    width: 80%;
    margin: 0 auto;
    justify-content: ${props =>
        props.previousExists === false ? "flex-end" : "space-between"};

    li {
        list-style-type: none;
        color: white;
        cursor: pointer;
    }
`;

const Arrow = ({ setApiUrl, apiUrl, text }) => {
    return <li onClick={() => setApiUrl(apiUrl)}>{text}</li>;
};

export default ({ peopleData, setApiUrl }) => {
    return (
        <Pagination
            previousExists={peopleData.previous === null ? false : true}
        >
            {peopleData.previous ? (
                <Arrow
                    setApiUrl={setApiUrl}
                    apiUrl={peopleData.previous}
                    text={"← Previous"}
                />
            ) : (
                ""
            )}
            {peopleData.next ? (
                <Arrow
                    setApiUrl={setApiUrl}
                    apiUrl={peopleData.next}
                    text={"Next →"}
                />
            ) : (
                ""
            )}
        </Pagination>
    );
};
