import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Card = styled.div`
    margin-bottom: 2rem;
    background-color: #f6f6e4;
    border-radius: 8px;
    box-shadow: 0px 0px 7px 4px rgba(187, 187, 187, 0.6);
    text-align: left;
    padding-left: 25px;
`;

const MovieContainer = styled.ul`
    padding-left: 0;
`;

const Movie = styled.li`
    list-style-position: inside;
`;

export default ({ peopleData }) => {
    const [filmUrls, setFilmUrls] = useState(peopleData.films);
    const [films, setFilms] = useState([]);

    useEffect(() => {
        filmUrls.forEach(filmUrl => {
            axios
                .get(`${filmUrl}`)
                .then(response => {
                    setFilms(prevFilms => [...prevFilms, response.data.title]);
                })
                .catch(error =>
                    console.log("There was an error getting the films ", error)
                );
        });
    }, []);

    return (
        <Card>
            <h3>{peopleData.name}</h3>
            <p>Films:</p>
            <MovieContainer>
                {films.map((film, index) => (
                    <Movie key={index}>{film}</Movie>
                ))}
            </MovieContainer>
            <p>Height: {peopleData.height}cm</p>
            <p>Mass: {peopleData.mass}kg</p>
            <p>
                Hair color:{" "}
                {peopleData.hair_color !== null ? peopleData.hair_color : "N/A"}
            </p>
            <p>
                Skin color:{" "}
                {peopleData.skin_color !== null ? peopleData.skin_color : "N/A"}
            </p>
            <p>
                Eye color:{" "}
                {peopleData.eye_color !== null ? peopleData.eye_color : "N/A"}
            </p>
        </Card>
    );
};
