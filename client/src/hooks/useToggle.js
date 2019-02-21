import React, { useState } from 'react';

const useToggle = (initialValue) => {
    const [toggleValue, setToggleValue] = useState(initialValue);

    const toggler = () => {
        setToggleValue(!toggleValue);
    };

    return [toggleValue, toggler];
};

export default useToggle;
