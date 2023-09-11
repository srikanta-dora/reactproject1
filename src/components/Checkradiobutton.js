import React from 'react'

const Checkradiobutton = () => {
  return (
    <div  className='boxcheckradiobutton'>
    <ul  className='' >
    <li className='checkbox1' > <input type='checkbox' value="Option1" /><label className='checkboxtxt'>Default</label></li>
    <li className='checkbox1'><input type='checkbox' value="Option2" /><label className='checkboxtxt'>Checked</label></li>
    <li className='checkbox1'><input type='checkbox' value="Option3" /><label className='checkboxtxt'>Disabled</label></li>
    </ul>
      
      
    </div>
  )
}

export default Checkradiobutton
