import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Search from './Components/Search';
import Buttons from './Components/Buttons';
import MealPlan from './Components/MealPlan';

const baseUrl = "/api/recipes"

class App extends Component {
  constructor(){
    super();

    this.state ={
      recipesToDisplay: [],
      recipes= {id: id,
         name: name,
         url: url,
         image: image},
       userInput:"",
    };

    this.handleChange = this.handleChange.bind(this);
    this.addToPlan = this.addToPlan.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.searchRecipe = this.searchRecipe.bind(this);
  }
  componentDidMount(){
    axios.get(`${baseUrl}`).then(results =>{
      this.setState({ recipes: results.data});
    })
  }

  handleChange(event){
    this.setState({
      userInput: event.target.value
    })

  }

  addToPlan(){
    const {image} = this.state.recipes;
    this.setState({ 
      name: result.data.name,
    })
  }

  deleteRecipe(id){
    axios.delete(`${baseUrl}/recipes/${id}`).then(response =>{
      this.setState({
        recipesToDisplay: response.data
      })
    })
  }

  addRecipe(){
    let newRecipe = {
      name: this.name.value,
      url: this.url.value,
      image: this.image.value
    }
    axios.post(`${baseUrl}`, newRecipe).then(response =>{
      this.setState({
        recipesToDisplay: response.data
      })
    })
  }


  render() {
    let result= this.state.recipes.filter().map()

    return (
      <div className="App">
        {result}
      </div>
    );
  }
}

export default App;
