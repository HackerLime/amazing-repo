import { useState } from 'react';
import cls from './App.module.css';
export const App = () => {
    const [num, setNum] = useState(0);

    return (
        <div className={cls.app}>
            <div>{num}</div>
            <button onClick={() => setNum((prev) => prev + 1)}>
                Increment
            </button>
        </div>
    );
};
