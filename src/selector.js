import { createSelector } from 'reselect';
import { hasValue, hasAttributesWithValue } from './Utils/Object';

const getUserList = state => state.Users;
const getSearchQuery = state => state.Search;

// reselect function
export const getUserListState = createSelector(
  [ getUserList, getSearchQuery ],
  (users, query) => {
    if (!query.length) {
      return users;
    }

    const users_ids = Object.keys(users);
    const out_users = {};
    let params = query.match(/.+?:\s?[^\s]+/g);

    if (params && params.length) {
      params = params.map(param => {
        const [key, value] = param.split(':');
        return [key.trim(), value.trim()];
      })
      .filter(([key, value]) => !!value)
      .reduce((memo, [key, value]) => ({
        ...memo, [key]: value
      }), {});

      const hasValueCheck = hasAttributesWithValue(params);
      for (const id of users_ids) {
        if (hasValueCheck(users[id])) {
          out_users[id] = users[id];
        }
      }
    } else {
      const hasValueCheck = hasValue(query);

      for (const id of users_ids) {
        if (hasValueCheck(users[id])) {
          out_users[id] = users[id];
        }
      }
    }

    return out_users;
  }
)