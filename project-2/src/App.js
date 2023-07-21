import { useReducer } from 'react';
import { globalState } from './contexts/AppContext/data';
import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('Chamou muda', action.payload);
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  // eslint-disable-next-line no-unused-vars
  const { counter, title, body } = state;

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleDateString('pt-BR'),
          })
        }
      >
        muda
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>inverter</button>
    </div>
  );
}

export default App;
