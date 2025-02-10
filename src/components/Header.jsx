import { useState } from 'react'


const moonSvg = <svg width="13.5" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5532 10.815C7.66857 10.815 4.51929 7.92783 4.51929 4.36821C4.51929 3.0253 4.96679 1.78158 5.73143 0.75C2.69036 1.69515 0.5 4.33122 0.5 7.43807C0.5 11.3385 3.94929 14.5 8.20357 14.5C11.5929 14.5 14.4696 12.4932 15.5 9.70452C14.375 10.4048 13.0161 10.815 11.5532 10.815Z"/>
</svg>

export default function Header() {

  return (
    <div className="header-div">
      <div className="header-in">
        <h1>Where in the world?</h1>
        <LightSwitch />
      </div>
    </div>
  )
}

function LightSwitch() {
  const [nextTheme, setNextTheme] = useState("Dark");
  
  function handleClick() {
    let domBody = document.querySelector("body")
    if (nextTheme == "Dark") {
      setNextTheme("Light")
      
      domBody.classList.remove("light")
      domBody.classList.add("dark")
    } else {
      setNextTheme("Dark")
      domBody.classList.remove("dark")
      domBody.classList.add("light")
    }
    
  }
  return(
      <div className='mode-switch' onClick={handleClick}>
        {moonSvg}
        {nextTheme} Mode
      </div>
  )
}