import React, { useState } from 'react'

import Item from '../item/Item.js'

const Lists = (props) => {
  const [show, setShow] = useState(false)
  const [empty, setempty] = useState('')
  const add = () => {
    setShow(true)
  }
  const newText = (e) => {
    setempty(e.target.value)
  }
  const clearAway = (e) => {
    props.acquire(e)
    setempty('')
    setShow(false)
  }

  return (
    <div>
      <div className='list'>
        {props.count.map((item) => {
          return <Item data={item} key={item} />
        })}
      </div>
      {show && <input type={'text'} value={empty} onChange={newText} onBlur={clearAway} autoFocus />}
      <p className='p1' onClick={add}>+</p>
    </div>)
}

export default Lists
