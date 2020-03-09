import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsFromSearch} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsFromSearch(state, props.id),
});

// const mapDispatchToProps = (dispatch, props) => ({
//   addCard: title => dispatch(createActionAddCard({
//     columnId: props.id,
//     title,
//   })),
// });

export default connect(mapStateToProps)(SearchResults);
