import { useSelector, useDispatch } from 'react-redux'
// import { incrementCount, decrementCount, resetCount } from '../../redux/actions'

const Counter = () => {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      {/* <button onClick={() => dispatch(incrementCount())}>+1</button>
      <button onClick={() => dispatch(decrementCount())}>-1</button>
      <button onClick={() => dispatch(resetCount())}>Reset</button> */}
    </div>
  )
}

export default Counter
