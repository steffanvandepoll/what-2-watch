import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

//components
import Header from "./HeaderComponent"
import Home from './HomeComponent';
import ShowDetail from './ShowDetailComponent';

//actions
import { fetchShows, fetchShowDetails } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    shows: state.shows,
    showDetails: state.showDetails,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchShows: () => { dispatch(fetchShows())},
  fetchShowDetails: (id) => { dispatch(fetchShowDetails(id))}
});

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showId: null
    };
  }

  componentDidMount() {
    this.props.fetchShows();
  }

  fetchShow(id){
    //only fetch show if we need it
    if(id === this.state.showId){
      return;
    }

    this.setState({
      showId: id
    })
    this.props.fetchShowDetails(id);
  }

  render() {
    return (
      <Fragment>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch location={this.props.location}>
                <Route exact path='/' component={() => <Home shows={this.props.shows} showsLoading={this.props.shows.isLoading} errMess={this.props.shows.errMess}  />} />
                <Route path='/show/:showId' component={({match}) => <ShowDetail id={match.params.showId} fetchShow={this.fetchShow.bind(this)} show={this.props.showDetails.showDetails} isLoading={this.props.showDetails.isLoading} errMess={this.props.showDetails.errMess}/> } />
                <Redirect to="/" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
