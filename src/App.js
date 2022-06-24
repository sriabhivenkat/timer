import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const timeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`7/24/${year}`) - +new Date();
    let remaining = {};

    if(difference > 0) {
      remaining = {
        weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return remaining;
  }

  const [remainingTime, setRemainingTime] = useState(timeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(timeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Time before Trisha gets back!</h1>
        <div className="countdown">
          <div className="countdown-item">
            <div className="countdown-item-number">{remainingTime.days}</div>
            <div className="countdown-item-label">Days</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-item-number">{remainingTime.hours}</div>
            <div className="countdown-item-label">Hours</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-item-number">{remainingTime.minutes}</div>
            <div className="countdown-item-label">Minutes</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-item-number">{remainingTime.seconds}</div>
            <div className="countdown-item-label">Seconds</div>
          </div>
        </div>
        <div className="percentRemaining">
          <div className="countdown-item">
            <div className="percentRemainingNumber">{(remainingTime?.weeks/8)*100}% remaining in the trip</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
