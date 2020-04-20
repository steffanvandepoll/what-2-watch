import React, { Component, Fragment} from 'react';
import {Card, CardBody, CardHeader, CardImg} from "reactstrap";

import styled from 'styled-components'

import parse from 'html-react-parser'

const ShowBanner = styled.div`
  background: #252c30;
  padding: 40px 20px;
  margin-bottom: 25px;
  color: #FFFFFF;
`;

const StyledCard = styled(Card)`
  background: grey;
`;

const Tag = styled.span`
  background-color: rgba(0,0,0,0.1);
  border: 1px solid #d7d7d7;
  color: #000;
  padding: 4px 10px;
  border-radius: 4px;
  margin: 5px 5px 0 0;
  display: inline-block;
`;


const ShowHeader = ({show, isLoading}) => {

  return (
    <ShowBanner>
      <div className="container">
        <div className="row">
            <div className="col-12 col-md-3">
              <StyledCard>
                 {isLoading || !show ? null : <CardImg width="100%" src={show.image.original} alt={show.name} />}
              </StyledCard>
            </div>
            <div className="col-12 col-md-9 d-flex align-items-center mt-sm-4">
              <h1>{show.name}</h1>
            </div>
        </div>
      </div>
    </ShowBanner>
  );
}


class ShowDetail extends Component {
  componentDidMount() {
    this.props.fetchShow(this.props.id)
  }

  render() {
    //add loading here
    if(!this.props.show){
      return null;
    }

    return(
      <Fragment>
        <ShowHeader show={this.props.show} isLoading={this.props.isLoading} />
        <div className="container">
          <div className="row row-content">
            <div className="col-12 col-md-6">
              <h2>Summary</h2>
              {this.props.show && this.props.show.summary ? parse(this.props.show.summary) : null}
            </div>
            <div className="col-12 col-md-5">
              <Card>
                <CardHeader className="bg-primary text-white">
                  About the show
                </CardHeader>
                <CardBody>
                  <dl className="row p-1">
                    <dt className="col-4">rating</dt>
                    <dd className="col-8">{this.props.show.rating ? this.props.show.rating.average : null}</dd>
                    <dt className="col-4">language</dt>
                    <dd className="col-8">{this.props.show.language}</dd>
                    <dt className="col-4">genres</dt>
                    <dd className="col-8">{this.props.show.genres ? this.props.show.genres.map((genre) => <Tag key={genre}>{genre}</Tag>) : null}</dd>
                    <dt className="col-4">premiered</dt>
                    <dd className="col-8">{this.props.show.premiered}</dd>
                  </dl>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ShowDetail;
