import React from 'react'
import { useDrag } from 'react-dnd'
export default function Item(props) {

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'red',
      item: { ...props},
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        getDropResult: monitor.getDropResult()
      }),
      end: (item, monitor) => {
        
      },
    }),
    [],
  )
  const opacity = isDragging ? 0.5 : 1
  return <input type={'text'} disabled value={props.data} className={'itemList'} ref={drag} style={{ opacity }} />
}
