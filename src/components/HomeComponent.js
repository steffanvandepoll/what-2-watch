import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardImgOverlay} from 'reactstrap';

import styled from 'styled-components'
import { Link } from "react-router-dom";

const StyledCard = styled(Card)`
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 8px;

  .card-img-overlay{
    top: auto;
    background-color: rgba(0, 0, 0, 0.6);
    color:#FFFFFF;
    .card-subtitle{
      font-weight: bold;
    }
  }

  &:hover{
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 8px;
  }
`;


const Show = ({show}) => {
  return(
    <div className="col-lg-3 col-md-6 mb-4">
      <Link to={`/show/${show.id}`}>
        <StyledCard>
          <CardImg width="100%" src={show.image.medium} alt={show.name} />
          <CardImgOverlay>
            <CardTitle>{show.name}</CardTitle>
            <CardSubtitle>rating: {show.rating.average}</CardSubtitle>
          </CardImgOverlay>
        </StyledCard>
      </Link>
    </div>
  );
}

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
        return <Show key={show.id} show={show._embedded.show}/>;
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
