import React,{useState,useEffect} from 'react'

function Clock() {
  const [time,setTime]=useState(0);
  const [date,setDate]=useState("");
  const [day,setDay]=useState();
  

  const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  

  useEffect(()=> {
    const clockInterval=setInterval(()=>{
      setTime(new Date().toLocaleTimeString());
    },500);

    const dateInterval= setInterval(()=> {
      setDate(new Date().toLocaleDateString());
    },1000);

    setDay(days[new Date().getDay()]);

    return()=>{
      clearInterval(clockInterval);
      clearInterval(dateInterval);
    }
  },[time]);

  

  return (
    <>
    <div className='clock'>
      <h1>{time}</h1>
      <div>
        <h2>{day}</h2>
        <p>{date}</p>
      </div>
    </div>
    </>
  )
}

export default Clock
