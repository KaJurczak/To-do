import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData, settings} from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    list: this.props.list || [],
  }

  static propTypes = {
    list: PropTypes.node,
  }

  addList(title){
    this.setState(state => (
      {
        list: [
          ...state.list,
          {
            key: state.list.length ? state.list[state.list.length-1].key+1 : 0,
            title,
          },
        ],
      }
    ));
    // <List />
  }

  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />
        <div>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
        </div>
      </main>
    );
  }
}

export default App;
