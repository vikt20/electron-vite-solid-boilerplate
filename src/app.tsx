import { createSignal, onCleanup, Component  } from "solid-js";
import { render } from "solid-js/web";

const CountingComponent: Component = () => {
	const [count, setCount] = createSignal(0);
    const name = 'MyButton'
    function clickBtn (event) {
        let cnt = count() + 1;
        setCount(cnt)
    }
	
	return <div>Count value is {count()} 
        <div>
        <button onClick={clickBtn}>{name}</button>
        </div>
    </div>;
};

export default CountingComponent