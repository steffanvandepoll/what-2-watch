import React , { Component} from 'react';
import ShowCard from './ShowCardComponent'

class Search extends Component {
  componentDidMount() {
    this.props.searchShows(this.props.searchValue)
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-12 mt-4">
            <h3>Results for '{this.props.searchValue}'</h3>
            <hr />
          </div>
          {this.props.shows.map((result) => {
            return <ShowCard key={result.show.id} show={result.show}/>;
          })}
        </div>
      </div>
    );
  }
}


export default Search;
