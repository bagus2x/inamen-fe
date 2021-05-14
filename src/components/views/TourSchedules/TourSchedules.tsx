import React, { useState } from 'react';

const TourSchedules = () => {
    const [state, setstate] = useState(0);

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => setstate(state + 1)}>klik</button>
        </div>
    );
};

export default TourSchedules;
