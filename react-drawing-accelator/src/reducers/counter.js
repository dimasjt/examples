export default function counter(state = 0, action) {
  let newState = state;

  switch(action.type) {
    case 'INCREMENT': {
      return newState + action.payload;
    }
    case 'DECREMENT': {
      return newState - action.payload;
    }
    default: {
      return state;
    }
  }
};

