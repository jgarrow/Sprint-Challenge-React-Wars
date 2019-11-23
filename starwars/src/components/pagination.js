import React from "react";
import styled from "styled-components";

const Pagination = styled.ul`
    display: flex;
    width: 80%;
    max-width: 960px;
    margin: 0 auto;
    justify-content: space-between;

    li {
        list-style-type: none;
    }
`

const Arrow = ({ setApiUrl, apiUrl, text }) => {
    return (
        <li onClick={() => setApiUrl(apiUrl)}>
            {text}
        </li>
    )
}

export default ({peopleData, setApiUrl}) => {
    return (
        <Pagination>
            <Arrow setApiUrl={setApiUrl} apiUrl={peopleData.previous} text={"← Previous"} />
            <Arrow setApiUrl={setApiUrl} apiUrl={peopleData.next} text={"Next →"} />
        </Pagination>
    )
}