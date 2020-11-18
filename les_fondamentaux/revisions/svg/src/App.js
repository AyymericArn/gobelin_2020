import './App.css';
import Button from './Styles/Button'
import Circle from './Styles/Circle';
import Container from './Styles/Container';
import { useReducer } from 'react'

import reducer, { initialState } from './reducers/circle'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleAddCircle = () => {
    dispatch({type: 'ADD_CIRCLE'})
  }

  const handleOddAnimationStart = () => {
    dispatch({type: 'START_ODD'})
  }

  const handleOddAnimationStop = () => {
    dispatch({type: 'STOP_ODD'})
  }

  const handleShuffle = () => {
    dispatch({type: 'SHUFFLE'})
  }

  return (
    <div className="App">
      <Button onClick={handleAddCircle}>Add circle</Button>
      <Button onClick={handleShuffle} primary>Shuffle</Button>
      <Button onClick={handleOddAnimationStop} primary>Stop odd anim</Button>
      <Button onClick={handleOddAnimationStart} primary>Start odd anim</Button>
      <Container>
        {state.circles.map(circle => <Circle 
          key={circle.id} 
          index={circle.id} 
          animated={circle.animated}
          isSquare = {circle.square}
          transformSquare = {() => dispatch({type: 'SQUARE'})}
        />)}
      </Container>
    </div>
  );
}

export default App;
