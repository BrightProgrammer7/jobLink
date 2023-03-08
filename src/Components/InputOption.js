import React from 'react'
import '../Styles/InputOption.css'


function InputOption({Icon, title, color}) {
  return (
    <div className="inputOption">
        <Icon className='inputOption_icon' style={{color: color}}/>
        <h4 className='inputOption_title' >{title}</h4>
    </div>
  );
}

export default InputOption;