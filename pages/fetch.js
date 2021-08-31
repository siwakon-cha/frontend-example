import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'antd';

const FetchPage = () => {
  const [stateList, setStateList] = useState([]);

  useEffect(() => {
    async function fetch(){
      let arr = []
      for (let i = 1; i < 20; i++ ){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        arr.push(res.data)
      }
      setStateList(arr)
    }

    fetch()
  }, []);

  return (
    <Card>
      <Row gutter={8}>
      {stateList && stateList.map(item => {
        return <Col span={4} key={item.name}>
          <Row justify="center">
            <img src={item.sprites.front_default} alt="" width={100} height={100}/>
          </Row>
          <Row justify="center">
            {item.name}
          </Row>
        </Col>
      })}
      </Row>
    </Card>
  );
};

export default FetchPage;
