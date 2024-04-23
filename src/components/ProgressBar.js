import React, { useEffect, useState } from 'react';
import "./ProgressBar.css";

const ProgressBar = ({value = 0, onComplete = () => {} }) => {

    const [percent, setPercent] = useState(value);

    useEffect(() => {
        // Handles the percent (0% - 100%)
        setPercent(Math.min(100, Math.max(value, 0)));

        if(value >= 100){
            onComplete();
        }

    }, [value])

  return (
    <div className='progress'>
        <span
            style={{
                color: percent > 49 ? "white" : "black"
            }}
        >
            {percent.toFixed()}%
        </span>
        <div 
            style={{
                width: `${percent}%`
            }}
            className='fill-color'
        >

        </div>
    </div>
  )
}

export default ProgressBar