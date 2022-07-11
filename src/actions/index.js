export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const SET_CITY = 'SET_CITY';

export const setCity = (payload) => ({
  type: SET_CITY,
  payload,
});

export const increment = () => ({
  type: INCREMENT_COUNTER,
})

export const decrement = () => ({
  type: DECREMENT_COUNTER,
});
