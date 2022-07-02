import { Card, Col, Row } from 'antd'
import { useState } from 'react';
import './Cards.scss'
import Lists from './lists/List.js'
import Cardplus from './right/Cardolus';

const Cards = () => {
  const [count, setCount] = useState(['1', '2'])
  // const [show, setShow] = useState(false)
  const [arr, setArr] = useState([])
  const [list, setList] = useState([])
  const acquire = (e) => {
    let task = e.target.value
    if (task === '') return
    setCount([...count, task])
  }
 
  const newSlif = (item) => {
    setArr(arr.filter(value => value !== item))
  }
  const middleChange = (item) => {
    setArr([...arr, item.data])
        let newCount = count.filter(value => value !== item.data)
        setCount([...newCount])
  }
  const newChange = (item) => {
    setList([...list, item.data])
    let newCount = count.filter(value => value !== item.data)
    setCount([...newCount])
    // setShow(false)
  }
  const rightChange = (item) => {
    setList(list.filter(value => value !== item))
  }
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Prepare to study"
            bordered={false}
            style={{ marginRight: '40px' }}
            headStyle={{ textAlign: 'center', backgroundColor: '#F5E0E1' }}
            bodyStyle={{ marginTop: '40px', backgroundColor: '#F5E0E1', height: '450px' }}>
            <Lists count={count} acquire={acquire} />
          </Card>
        </Col>
        <Cardplus
          title="Leaming..."
          style={{ marginRight: '40px' }}
          bordered={false}
          headStyle={{ background: '#A3D09B', textAlign: 'center' }}
          bodyStyle={{ marginTop: '40px', backgroundColor: '#A3D09B', height: '450px' }}
          border={{ border: '3px solid #2CD9FC' }}
          list={arr} 
          newSlif={newSlif}
          newChange={middleChange}
          />
        <Cardplus headStyle={{ background: '#E2E2E2', textAlign: 'center' }}
          title="Complete"
          style={{ marginRight: '40px' }}
          bodyStyle={{ marginTop: '40px', backgroundColor: '#E2E2E2', height: '450px'}}
          border={{ border: '3px solid green' }}
          newChange={newChange}
          newSlif={rightChange}
          list={list}
        />
      </Row>
    </div>
  )
}

export default Cards;
