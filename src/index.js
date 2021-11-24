import React from 'react';
import {RootNavigator} from './navigation/RootNavigator';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import client from '../apolloClient';
import {ApolloProvider} from '@apollo/react-hooks';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
