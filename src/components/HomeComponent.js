import React from 'react';

import ShowCard from './ShowCardComponent'

const ShowListByGenre = ({shows, genre, max}) => {
  let list = shows.filter((show) => show._embedded.show.genres.includes(genre));

  //don't include shows without a rating
  list = list.filter((show) => show._embedded.show.rating.average);

  //sort by rating
  list = list.sort((a, b) => (a._embedded.show.rating.average < b._embedded.show.rating.average) ? 1 : -1)

  return(
    <div className="row">
      <div className="col-12 mt-4">
        <h3>{genre}</h3>
        <hr />
      </div>

      {list.slice(0, max).map((show) => {
        return <ShowCard key={show.id} show={show._embedded.show}/>;
      })}

    </div>
  )
}

function Home(props) {
    return(
      <div className="container">
        <ShowListByGenre shows={props.shows.shows} genre='Fantasy' max={4}/>
        <ShowListByGenre shows={props.shows.shows} genre='Action' max={4}/>
        <ShowListByGenre shows={props.shows.shows} genre='Drama' max={4}/>
      </div>
    );
}

export default Home;
