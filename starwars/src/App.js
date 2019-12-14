import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Card from "./components/card";
import Pagination from "./components/pagination";

// get data from API
// data returns array of 10 person objects + url for next and previous pages of people
// to display on browser --> cards for 10 people with next and previous arrows to see more people
// will need --> arrow component that takes a clickHandler --> setApiUrl(data.next) and setApiUrl(data.previous)
// map over data.results to make cards for each person

const AppWrapper = styled.div`
    text-align: center;
    margin-bottom: 1rem;
`;

const Header = styled.h1`
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
`;

const CardWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;

    @media (max-width: 960px) {
        width: 90%;
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`;

const App = () => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.
    const [apiUrl, setApiUrl] = useState("https://swapi.co/api/people/");
    const [peopleData, setPeopleData] = useState({});

    // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.
    useEffect(() => {
        axios
            .get(`${apiUrl}`)
            .then(response => setPeopleData(response.data))
            .catch(error => console.log("There was an error: ", error));
    }, [apiUrl]);

    return (
        <AppWrapper>
            <Header>React Wars</Header>
            <CardWrapper>
                {peopleData.results &&
                    peopleData.results.map((person, index) => (
                        <Card peopleData={person} key={index} />
                    ))}
            </CardWrapper>
            <Pagination setApiUrl={setApiUrl} peopleData={peopleData} />
        </AppWrapper>
    );
};

export default App;
