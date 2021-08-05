import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import ManliestThings from '../ManliestThings/ManliestThings'
import FunctionalThings from '../FunctionalThings/FunctionalThings'
import StyledThings from '../StyledThings/StyledThings'

import SummersThings from "../SummersThings/SummersThings";

import CookingThings from '../CookingThings/CookingThings';


class App extends Component {
  state = { 
    bensThings: [
      { 
        name: 'banana',
        image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        attributes: ['potassium-rich', 'yellow when good', 'not a taco', 'ring ring ring ring ring ring ring']
      },
      {
        name: 'turkey',
        image: 'https://images.unsplash.com/photo-1560011961-4ab41261de01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        attributes: ['such gobbles', 'good when stuffed', 'not a taco', 'why gravy exists']
      },
      {
        name: 'taco',
        image: 'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
        attributes: ['yummy in my tummy', 'salsas may vary', 'definitely a taco', 'very edible']
      },
      {
        name: 'linux',
        image: 'https://i.imgur.com/3BmfSOA.png',
        attributes: ["not a taco", "not Windows", "not macOS", "Penguins?"] 
      },
    ],
    davidsThings: [
      {
        name: "waffle",
        image: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",  
        attributes: ["tasty", "fluffy", "breakfast", "yummy"],
      },
      {
        name: "giraffe",
        image: "https://images.unsplash.com/photo-1538127426967-75a6c73f6d20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",  
        attributes: ["tall", "cool", "fun", "animal", "(David doesn't acually own a giraffe)"], 
      },
      {
        name: "Liam",
        image: "https://i.imgur.com/l2qX34X.jpg",  
        attributes: ["fluffy", "happy", "sleepy", "dumb"], 
      },
      {
        name: "Poptart®",
        image: "https://i.imgur.com/q9zgcaP.jpg",  
        attributes: ["pastry?", "food?", "edible?", "Horrible when toasted!"], 
      },
    ],
    shahzadsThings: [
      {
        name: "functional programming",
        image: "https://imgs.xkcd.com/comics/functional.png",  
        attributes: ["efficient", "reusability", "not a taco", "beautiful"],
      },
      {
        name: "React hooks",
        image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        attributes: ["useEffect", "useState", "not a taco", "state's best friend"], 
      },
      {
        name: "BluBlockers",
        image: "https://susanmaryetta.files.wordpress.com/2011/06/blublocker-the-hangover.png?w=584",
        attributes: ["very attractive", "useful probably!", "good for viewing tacos", "such hip", "worn by all the cool kids"],
      },
      { 
        name: "Healthy food", 
        image: "https://i.imgur.com/gRxOxsA.jpg", 
        attributes: ["makes you live a long time", "consistent poops", "probably tacos sometimes!", "farm to market"], 
      },
    ],

      summersThings: [
      {
        name: "what name",
        image: "https://imgs.xkcd.com/comics/functional.png",  
        attributes: ["crative", "confused", "but still", "beautiful"],
      },
      {
        name: "React hooks",
        image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        attributes: ["useEffect", "useState", "not a taco", "state's best friend"], 
      },
    ],

    dylansThings: [
      {
        name: "Cooking Things",
        image: "https://en.pimg.jp/033/367/357/1/33367357.jpg",  
        attributes: ["tasty", "ingredients", "could be a taco", "yummo"],
      },
      {
        name: "Cooking Pans",
        image: "https://image.shutterstock.com/image-vector/close-frying-pan-wooden-handle-260nw-263535851.jpg",
        attributes: ["saute", "skillet", "taco warmer", "cast-iron"], 
      },
    ],
    zacksThings: [
      {
        name: "Cheetos",
        image: "https://i.insider.com/5f10b52519182471f4679cb9?width=700",  
        attributes: ["tasty", "nutrious", "orange", "dusty"],
      },
      {
        name: "water",
        image: "https://www.aces.edu/wp-content/uploads/2020/06/A-Glass-of-water-on-white-background-1161576130_5760x3840-scaled-e1593446976432.jpeg",
        attributes: ["wet", "quenching", "not taco"], 
      },
      ...
    ]

  } 
  render() {
    return (
      <>
        <Route exact path="/">
          <>
            {/* All the <a> tags should live here */}
            <h1>All-The-Things</h1>

            <Link to="/the-manliest-things">Ben's Things</Link>
            <br />
            <Link to="/the-functional-things">Shahzad's Things</Link>
            <br />
            <Link to="/the-well-styled-things">David's Things</Link>
            <br />
            <Link to="/the-well-styled-things">David's Things</Link>
            <br />
            <Link to="/the-well-styled-things">David's Things</Link>
            <br />
            <Link to="/summers-things">Summer's Things</Link>
            <br />
            <Link to="/the-cooking-things">Dylan's Things</Link>
            <Link to="/the-cool-things">Zack's Things</Link>


          </>
        </Route>
        {/* All the <Route> components should live here */}
        <Route exact path="/the-functional-things">
          <FunctionalThings things={this.state.shahzadsThings} />
        </Route>
        <Route exact path="/the-manliest-things">
          <ManliestThings things={this.state.bensThings} />
        </Route>
        <Route exact path="/the-well-styled-things">
          <StyledThings things={this.state.davidsThings} />
        </Route>

        <Route exact path="/summers-things">
          <SummersThings things={this.state.summersThings} />
        </Route>
        <Route exact path="/the-cooking-things">
          <CookingThings things={this.state.dylansThings} />
        </Route>
        <Route exact path="/cool-things">
          <CoolThings things={this.state.zacksThings} />
        </Route>
      </>
    );
  }
}
 
export default App;

