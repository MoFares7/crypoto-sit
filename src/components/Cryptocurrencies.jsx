import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { useState } from 'react';


const Cryptocurrencies = () => {

        const { data: cryptoList, isFetching } = useGetCryptosQuery();
        const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);

        return (
                <>
                        <Row getters={[32, 32]} className='crypto-card-container'>
                                {cryptos?.map((currency) => (
                                        <Col xs={24} sm={12} lg={6} className="crypto-card"
                                                key={currency.uuid}>
                                                <Link to={`/crypto/${currency.id}`}>
                                                        <Card>

                                                        </Card>
                                                </Link>
                                        </Col>
                                ))}
                        </Row>
                </>
        )
}

        export default Cryptocurrencies
