import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const { count, toggle } = useSelector((state) => state);
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });
  const reset = () => dispatch({ type: "RESET" });

  return (
    <div className="counter">
      <h1>Counter App</h1>
      <div className="counter-body">
        <div>
          <button onClick={increment}>+</button>
          <button className={`counter-value ${toggle ? "plus" : "minus"}`}>
            {count}
          </button>
          <button onClick={decrement}>-</button>
        </div>
        <button className="reset-btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
