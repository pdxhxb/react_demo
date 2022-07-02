import React from 'react'
import './Drag.scss'
const Drag = (props) => {
  return (
    <div>
      {props.arr.map((ite, index) => {
        return (<div key={index}><input type={'text'} disabled className={'itemList'} value={ite} /><p className='delete' onClick={() => {if (props.newSlif !== undefined) {
          props.newSlif(ite)
        }}}>+</p> </div>)
      })}
    </div>
  )
}
export default Drag