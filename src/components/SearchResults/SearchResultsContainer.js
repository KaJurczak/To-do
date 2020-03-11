import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsFromSearch} from '../../redux/cardsRedux.js';
// import {createAction_changeSearchString} from '../../redux/searchStringRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsFromSearch(state, props.match.params.id),
});

// const mapDispatchToProps = (dispatch, props) => ({
//   addCard: title => dispatch(createAction_changeSearchString({
//     columnId: props.id,
//     title,
//   })),
// });

export default connect(mapStateToProps)(SearchResults);
