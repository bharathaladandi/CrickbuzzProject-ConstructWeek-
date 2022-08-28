import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MyCard from "./components/MyCard";
import { getMatches } from "./api/api";
import { Container, Grid, Typography } from "@material-ui/core";
function App() {
  const [matches, setMatches] = useState([]);



  useEffect(() => {
    getMatches()
      .then((data) => {
        console.log(data.data);
        setMatches(data.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <div>{matches?.map((match) => (
              <MyCard key={match.name} match={match}></MyCard>
            ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
