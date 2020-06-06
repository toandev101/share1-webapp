import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Button, TabBar, NavBar, Icon, WingBlank, WhiteSpace, Carousel, List, Grid } from 'antd-mobile'
import { Tabs, Badge } from 'antd-mobile';
import Link from 'next/link'
import './index.css'

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

const data1 = Array.from(new Array(9)).map(() => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('redTab');
  const [hidden, setHidden] = useState(false);

  const [data, setData] = useState(['1', '2', '3', '4', '5']);
  const [imgHeight, setImgHeight] = useState(176);
  const [slideIndex, setSlideIndex] = useState(0);

  const tabs = [
    { title: '1st Tab' },
    { title: '2nd Tab' },
    { title: '3rd Tab' },
    { title: '4th Tab' },
    { title: '5th Tab' },
    { title: '6th Tab' },
    { title: '7th Tab' },
    { title: '8th Tab' },
    { title: '9th Tab' },
  ];
  
  const renderContent = (pageText) => {
    return (
      <div style={{height: '100%' }}>
        <NavBar
          mode="light"
          leftContent="Back"
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >
          Xin chào Bạn
        </NavBar>
        <div style={{ paddingTop: 10 }}>
        <WingBlank>
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => setSlideIndex(index)}
        >
          {data.map((val, index) => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: 'block',
                position: 'relative',
                height: imgHeight,
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}
            >
              Slide {index}
            </a>
          ))}
        </Carousel>
      </WingBlank>
      <Tabs tabs={tabs} tabBarBackgroundColor={'transparent'} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>
          <List>
            <List.Item>
              <Badge text="自动缴费"
                style={{
                  marginLeft: 12,
                  padding: '0 3px',
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  color: '#f19736',
                  border: '1px solid #f19736',
                }}
              />
              <Badge text="自动缴费"
                style={{
                  marginLeft: 12,
                  padding: '0 3px',
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  color: '#f19736',
                  border: '1px solid #f19736',
                }}
              />
              <Badge text="自动缴费"
                style={{
                  marginLeft: 12,
                  padding: '0 3px',
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  color: '#f19736',
                  border: '1px solid #f19736',
                }}
              />
            </List.Item>
          </List>
          </Tabs>
        <Grid data={data1}
      columnNum={2}
      renderItem={dataItem => (
        <div style={{ padding: '12.5px' }}>
          <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
          <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
            <span>I am title..</span>
          </div>
        </div>
      )}
    />
        <WhiteSpace size="lg" />
        <WingBlank size="md">abc</WingBlank>
        
        <WhiteSpace size="lg" />
        <WingBlank size="sm">abc</WingBlank>
        </div>
          
      </div>
    );
  }

  return (
    <Layout title="Trang chủ">
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0, left: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={hidden}
        >
          <TabBar.Item
            title="Life"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={selectedTab === 'blueTab'}
            badge={1}
            onPress={() => {
              setSelectedTab('blueTab')
            }}
            data-seed="logId"
          >
            {renderContent('Life')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="Koubei"
            key="Koubei"
            badge={'new'}
            selected={selectedTab === 'redTab'}
            onPress={() => {
              setSelectedTab('redTab')
            }}
            data-seed="logId1"
          >
            {renderContent('Koubei')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="Friend"
            key="Friend"
            dot
            selected={selectedTab === 'greenTab'}
            onPress={() => {
              setSelectedTab('greenTab')
            }}
          >
            {renderContent('Friend')}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="my"
            selected={selectedTab === 'yellowTab'}
            onPress={() => {
              setSelectedTab('yellowTab')
            }}
          >
            {renderContent('My')}
          </TabBar.Item>
        </TabBar>
      </div>
    </Layout>
  )
}




   

