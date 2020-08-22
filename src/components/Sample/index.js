import React from "react";
import { useDispatch, useSelector,  } from "react-redux";
import * as textAction from '../../redux/text/actions'

const SampleComponent = ({}) => {
  const dispatch = useDispatch();
  const a = useSelector(globalState => globalState.text)
  

  const onFetch = () => {
    dispatch(textAction.fetchTexts());
    console.log(a)
  };
  return (
    <div>
      <h1>hello mtf</h1>
      <button onClick={onFetch}>click</button>
    </div>
  );
};
export default SampleComponent;
