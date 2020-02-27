import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
// import {settings} from '../../data/dataStore'; // all comments - this is my attempt from module 15. - to build additional list
// import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';

class App extends React.Component {
  /*
  state = {
    listData: listData,
  }
  */

  static propTypes = {
    listData: PropTypes.array,
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  /*
  addList(title){
    this.setState(state => (
      {
        listData: [
          ...state.listData,
          {
            key: state.listData.length ? state.listData[state.listData.length-1].key+1 : 0,
            title,
            description: 'Other things to do',
            image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
            columns: [],
          },
        ],
      }
    ));
  }
  */

  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
        {/*
          {this.state.listData.map(list => (
          <List key={list.key} {...list} />
        ))}
        */}
        {/*
          <div>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
        </div>
        */}
      </main>
    );
  }
}

export default App;
