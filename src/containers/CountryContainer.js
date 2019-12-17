import React from 'react';
import Question from "../components/Question";

class CountryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      loading: true
    };
  }

  componentDidMount(){
    let url = 'https://restcountries.eu/rest/v2/all';
    if (this.props.region !== "all") {
      url = `https://restcountries.eu/rest/v2/region/${this.props.region}`
    }

    fetch(url)
      .then((res) => res.json())
      .then((countries) => this.setState({
          countries,
          loading: false
        }));
  }

  render(){
    if (this.state.loading) {
        return (
            <div className ="loader"/>
        );
    }

    return(
      <>
        <button onClick={() => {window.location.reload()}}>Start over</button>

        <Question countries={this.state.countries} categories={this.props.categories} number={this.props.number}/>
      </>
    )
  }
}

export default CountryContainer;

