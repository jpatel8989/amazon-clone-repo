import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

// Switch is replced with Routes after version 6 in react-router-dom
function App() {
  const [{ user }, dispatch] = useStateValue();

  //Setting up the listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //Any cleanup operation goes here
      unsubscribe();
    };
  }, []); // The value in the square brackets will be executed only once the function is loaded

  console.log("User is", user);

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/jk"
              element={
                <>
                  {" "}
                  <h1>Hello</h1> <h2>There</h2>{" "}
                </>
              }
            ></Route>
            <Route
              path="/"
              element={
                <>
                  <NavBar />
                  <Home />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
