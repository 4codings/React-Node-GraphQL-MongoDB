import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <p>You clicked {count} times</p>
            <button type="button" onClick={() => setCount(count + 1)}>Click me</button>
        </>
    );
};

export default Counter;
