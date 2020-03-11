import React from 'react';
import styles from '../Column/Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container';
// import {settings} from '../../data/dataStore';
// import Icon from '../Icon/Icon.js';

class SearchResults extends React.Component {
  static propTypes = {
    // title: PropTypes.string,
    // icon: PropTypes.string,
    cards: PropTypes.array,
    // addCard: PropTypes.func,
  }

  // static defaultProps = {
  //   icon: settings.defaultColumnIcon,
  // }

  checkProps(){
    console.log('this.props:', this.props);
  }

  checkState(){
    console.log('this.state:', this.state);
  }

  render() {
    const {cards} = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>
            {/* <span className={styles.icon}><Icon name={icon} /></span>
            {title} */}
            There is result of searching
            {this.checkProps()}
            {this.checkState()}
          </h3>
          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))
            }
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;
