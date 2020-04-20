import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardImgOverlay} from 'reactstrap';
import { Link } from 'react-router-dom';


import styled from 'styled-components'

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

const ShowCard = ({show}) => {
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

export default ShowCard;
