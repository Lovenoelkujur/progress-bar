import React, { useEffect, useState } from 'react';
import "./Home.css";
import ProgressBar from '../components/ProgressBar';

const Home = () => {

    const [value, setValue] = useState(0);
    const [sucess, setSucess] = useState(false)

    useEffect(() => {
        setInterval(() => {
            setValue((val) => val + 0.1);
        }, 20)
    }, [])

  return (
    <div className='container'>
        <div className='main'>
            <h1 className='title'>Progress Bar</h1>
            <ProgressBar 
                value={value}
                onComplete={() => setSucess(true)}
            >
            </ProgressBar>
            <span className='display'>{sucess ? "Completed!" : "Loading..."}</span>
        </div>
    </div>
  )
}

export default Home