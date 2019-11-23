import React from "react";
import styled from "styled-components";

const Card = styled.div`
    margin-bottom: 2rem;
    background-color: #f6f6e4;
    border-radius: 8px;
    box-shadow: 0px 0px 7px 4px rgba(187, 187, 187, 0.6);
`;

export default ({ peopleData }) => {
    return (
        <Card>
            <h3>{peopleData.name}</h3>
            <p>Height: {peopleData.height}cm</p>
            <p>Mass: {peopleData.mass}kg</p>
            <p>Hair color: {peopleData.hair_color !== null ? peopleData.hair_color : "N/A"}</p>
            <p>Skin color: {peopleData.skin_color !== null ? peopleData.skin_color : "N/A"}</p>
            <p>Eye color: {peopleData.eye_color !== null ? peopleData.eye_color : "N/A"}</p>
        </Card>
    );
};
