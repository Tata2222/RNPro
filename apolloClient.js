import {HttpLink} from 'apollo-link-http';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {onError} from 'apollo-link-error';
import {ApolloLink} from 'apollo-link';

const BASE_URL = 'https://e5d42072b662.ngrok.io';
const httpLink = new HttpLink({
  uri: `${BASE_URL}/graphql`,
});
const errorLink = onError(
  ({graphQLErrors, networkError, operation, forward}) => {
    graphQLErrors && console.log('graphErr', graphQLErrors[0].message);
    networkError && console.log('netErr', networkError);
    // return forward(operation)
    return;
  },
);
const authLink = new ApolloLink(async (operation, forward) => {
  try {
    const token = await AsyncStorage.getItem('token');
    console.log('token', token);
    operation.setContext(({headers = {}}) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      },
    }));
    // console.log('fcmToken', fcmToken);
    if (!token) {
      // await requestUserPermission();
      // await checkPermission();
      // await createNoitificationListeners();
      console.log('no token');
    }
  } catch (error) {
    // console.log(`Unable to detect user device!`, error);
  }
  return forward(operation);
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  // link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
