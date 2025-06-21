import { useState } from 'react';

export const App = () => {
    const [num, setNum] = useState(0);

    return (
        <div>
            <div>{num}</div>
            <button onClick={() => setNum((prev) => prev + 1)}>
                Increment
            </button>
        </div>
    );
};
