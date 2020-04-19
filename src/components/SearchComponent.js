import React , { Component} from 'react';
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
  return show.image ?
    (
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
    ) : null;
}

class Search extends Component {
  componentDidMount() {
    this.props.searchShows(this.props.searchValue)
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-12 mt-4">
            <h3>Search</h3>
            <hr />
          </div>
          {this.props.shows.map((result) => {
            return <Show key={result.show.id} show={result.show}/>;
          })}
        </div>
      </div>
    );
  }
}


export default Search;
