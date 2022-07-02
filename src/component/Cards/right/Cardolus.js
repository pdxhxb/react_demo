import { Card, Col} from 'antd'
import Drag from '../drag/Drag.js'
import { useDrop } from 'react-dnd'
import { useState } from 'react'
export default function Cardplus(props) {
  const [show, setShow] = useState(false)
  const [, drop] = useDrop(
    {
      accept: 'red',
      collect: (minoter) => {
        if (minoter.isOver()) {
          setShow(true)
        }
        if (minoter.getDropResult()) {
          setShow(false)
        }
        return {
          isOver: minoter.isOver(),
          canDrop: minoter.canDrop()
        }
      },
      hover: (item, monitor) => {
      },
      drop: (item, monitor) => {
        props.newChange(item)
      }
    }
  )
  let border = show ? props.border : ''
  return (<Col span={8}>
    <Card title={props.title}
      style={props.style}
      bordered={false}
      headStyle={props.headStyle}
      bodyStyle={{...props.bodyStyle, ...border} }
      ref={drop}
    >
    <Drag arr={props.list} newSlif={props.newSlif}/>
    </Card>
  </Col>)
} 