import { response } from 'express';
import React from 'react';
import { Link } from 'react-router-dom';

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    const url = "/api/v1/recipes/index";
    fetch(url)
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        throw new Error("Network response was not okay.");
      })
      .then(response => this.setState({ recipe: response }))
      .catch(() => this.props.history.push("/"));
  }

}
export default Recipes;