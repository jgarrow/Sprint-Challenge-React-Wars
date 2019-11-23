import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";

import Card from "./components/card";
import Pagination from "./components/pagination";

// get data from API
// data returns array of 10 person objects + url for next and previous pages of people
// to display on browser --> cards for 10 people with next and previous arrows to see more people
// will need --> arrow component that takes a clickHandler --> setApiUrl(data.next) and setApiUrl(data.previous)
// map over data.results to make cards for each person

const CardWrapper = styled.div`
    width: 80%;
    max-width: 960px;
    margin: 0 auto;
`

const App = () => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.
    const [apiUrl, setApiUrl] = useState("https://swapi.co/api/people/");
    const [peopleData, setPeopleData] = useState({});
    //   const [currentPage, setCurrentPage] = useState(1);

    //   let pageNumString = "?page=".concat(currentPage);

    // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.
    useEffect(() => {
        axios
            .get(`${apiUrl}`)
            .then(response => {
                console.log(response.data);
                setPeopleData(response.data);
            })
            .catch(error => console.log("There was an error: ", error));
    }, [apiUrl]);

    return (
        <div className="App">
            <h1 className="Header">React Wars</h1>
            <CardWrapper>
                {peopleData.results && peopleData.results.map((person, index) => <Card peopleData={person} key={index}/>)}
            </CardWrapper>
            <Pagination setApiUrl={setApiUrl} peopleData={peopleData}/>
        </div>
    );
};

export default App;
