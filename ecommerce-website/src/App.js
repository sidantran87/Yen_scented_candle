import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slides/counterSlice";
import { Button } from 'antd';
// import styles from "./Counter.module.css";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Button type="default"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button type="default"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
}
export default Counter
