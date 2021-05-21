import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from './Login';
import Home from "./home/home.js";
import List from "./List";
import Header from "./Header";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
);

const Routing = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/List/:type" component={List}></Route>
        <Route path="/login"><Login/></Route>
        <Route exact path="/checkout">
            <Checkout/>
          </Route>
          <Route exact path="/payment">
              <Elements stripe={promise}>  /*higher order function it wraps the payment element 
              <Payment/>
            </Elements>
          </Route>
          <Route path="/Orders"><Orders/></Route>
      </div>
    </BrowserRouter>
  );
};

export default Routing;
