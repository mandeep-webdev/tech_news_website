import { createContext, useEffect, useReducer } from 'react';
let API = 'http://hn.algolia.com/api/v1/search?';
const AppContext = createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
const initialState = {
  query: 'HTML',
  nbPages: 0,
  page: 0,
  hits: [],
  isLoading: false,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const data = await fetch(url);
      const response = await data.json();

      console.log(response);
      dispatch({
        type: 'GET_NEWS',
        payload: {
          hits: response.hits,
          nbPages: response.nbPages,
          isLoading: true,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, []);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
