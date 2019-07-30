import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = id => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id=> fetchUser(id));

  
}

export const fetchPosts = () => async (dispatch) => {
  const res = await jsonPlaceholder.get('/posts');
  
  dispatch({ type: 'FETCH_POSTS', payload: res.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get('/users/' + id);
  dispatch({ type: 'FETCH_USER', payload: response.data });
}

// nie prawidlowe, wywali blad zeby uzywac middlewar
// export const fetchPosts = async () => {
//   const response = await jsonPlaceholder.get('/posts')
//   return {
//     type: 'FETCH_POSTS',
//     payload: response
//   };
// };


// export const fetchUser = id => dispatch => {
//   // dzieki tem rozwianzaniu z lodashem bedzie tylko raz w czasie t
//   // rawnai aliakcje fetch wykonany, apozniej brane z pamieci, nie bedzie duplikowac erequestow
//   _fetchUser(id, dispatch);
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get('/users/' + id);
//   dispatch({ type: 'FETCH_USER', payload: response.data })
// });

