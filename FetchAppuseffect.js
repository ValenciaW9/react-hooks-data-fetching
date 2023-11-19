import React, { useState, useEffect } from "react";

function FetchAppuseffect() {
    const [peopleInSpace, setPeopleInSpace] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      fetch("http://api.open-notify.org/astros.json")
        .then((response) => response.json())
        .then((data) => {
          setPeopleInSpace(data.people);
          setIsLoaded(true);
        });
    }, []);
  
    // if the data hasn't been loaded, show a loading indicator
    if (!isLoaded) return <h3>Loading...</h3>;
  
    return <div>{peopleInSpace.map((person) => person.name)}</div>;
  }

  export default FetchAppuseffect;