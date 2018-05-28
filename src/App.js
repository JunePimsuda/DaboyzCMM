import React, { } from 'react';
import './App.css';


//import Head from 'lodash'
import { Layout, Menu, Carousel, Row, Col } from 'antd';
const { Header, Content, Footer } = Layout;

export default () => (
  <Layout className="layout" >
  <section id="Header">
    <Header style={{ position: 'fixed', width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '50px' }} >
        <Menu.Item key="1">
          <a href="#Home" className="active">HOME</a>
        </Menu.Item>
        <Menu.Item key="2">
          <a href="#Staff" >STAFF</a>
        </Menu.Item>
        <Menu.Item key="3">
          <a href="#Vote">VOTE</a>
        </Menu.Item>
        <Menu.Item key="4">
          <a href="#Login">Login | Sign Up</a>
        </Menu.Item>
      </Menu>
    </Header>
  </section>

    <body style={{  background: '#fff' , padding: '80px'}}>
      <div style={{ background: 'transparent', padding: '25', minHeight: '280' , margin: '80px'}} >

      <section id="Home">
        <Row style={{ textAlign:'center', padding: 60}} >
          <Carousel autoplay >
              <div>
                <Row  style={{ textAlign:'center', padding: 50}} >
                  <Col span={12} >
                    <img src="slide1.jpg" alt="Home1" width="1000" height="400" VSPACE="140" padding="20px"/>
                  </Col>
                </Row>
            </div>
            <div>
              <Row  style={{ textAlign:'center', padding: 50}} >
                <Col span={12} style={{ textAlign:'left', padding: 10}} >
                <img src="slide2.jpg" alt="Home2" width="1000" height="400" VSPACE="140"  padding="20px"/>
                </Col>
              </Row>
            </div>
            <div>
              <Row  style={{ textAlign:'center', padding: 50}} >
                <Col span={12} style={{ textAlign:'left', padding: 10}} >
                <img src="slide3.jpg" alt="Home3" width="1000" height="400" VSPACE="140"  padding="20px"/>
                </Col>
              </Row>
            </div>
          </Carousel>
        </Row>
      </section>

      <section id="Staff">
            <Row style={{ textAlign:'center', padding:80}}>
              <div>
                <h1 style={{ textAlign:'center', padding:10}}>Ranking!!!</h1>
              </div>
                <Col span={24}>
                  <img src="1.jpg" alt="Winny" width="300" height="267" padding="20px"/>
                </Col>
                <Col span={24}>
                  <div>
                    <h1 style={{ textAlign:'center', padding:60}}>
                The first of ranking is... Terachot Kongcharoenwattanakul !!!
                    </h1>
                  </div>
                </Col>
            </Row>

            <h1 style={{ textAlign:'center', padding:10}}>Ranking Results of Staff</h1>
              <Row type="flex" justify="center" style={{ textAlign:'center', padding:10}}>
                <Col span={4}>
                  <img src="1.jpg" alt="win" width="150" height="150" padding="50px"/>
                    <h1>The First!!!</h1>
                    <h3>วิน</h3>
                    <h3>Terachot K.</h3>
                    <h3>1996</h3>
                </Col>
                <Col span={4}>
                  <img src="2.jpg" alt="few" width="150" height="150" padding="50px"/>
                  <h1>2.</h1>
                  <h3>ฟิว</h3>
                  <h3>Phuridat T.</h3>
                  <h3>1996</h3>
                </Col>
                <Col span={4}>
                  <img src="3.jpg" alt="guy" width="150" height="150" padding="50px"/>
                  <h1>3.</h1>
                  <h3>ลูฟี่</h3>
                  <h3>Worawut W.</h3>
                  <h3>1996</h3>
                </Col>
                <Col span={4}>
                  <img src="4.jpg" alt="top" width="150" height="150" padding="50px"/>
                  <h1>4.</h1>
                  <h3>ท็อป</h3>
                  <h3>Nutthapol P.</h3>
                  <h3>1996</h3>
                </Col>
              </Row>

              <Row type="flex" justify="center" style={{ textAlign:'center', padding:10}}>
                <Col span={4}>
                  <img src="5.jpg" alt="boss" width="150" height="150" padding="50px"/>
                  <h1>5.</h1>
                  <h3>บอส</h3>
                  <h3>Nutthapol B.</h3>
                  <h3>1996</h3>
                </Col>
                <Col span={4}>
                  <img src="6.jpg" alt="frame" width="150" height="150" padding="50px"/>
                  <h1>6.</h1>
                  <h3>เฟรม</h3>
                  <h3>Chotipong P.</h3>
                  <h3>1996</h3>
                </Col>
                <Col span={4}>
                  <img src="7.jpg" alt="nine" width="150" height="150" padding="50px"/>
                  <h1>7.</h1>
                  <h3>นาย</h3>
                  <h3>Sirapong J.</h3>
                  <h3>1996</h3>
                </Col>
                <Col span={4}>
                  <img src="8.jpg" alt="kann" width="150" height="150" padding="50px"/>
                  <h1>8.</h1>
                  <h3>กาน</h3>
                  <h3>Wachakarn K.</h3>
                  <h3>1996</h3>
                </Col>
              </Row>

              <Row type="flex" justify="center" style={{ textAlign:'center', padding:10}}>
                <Col span={4}>
                  <img src="9.jpg" alt="piak" width="150" height="150" padding="50px"/>
                  <h1>9.</h1>
                  <h3>เปี๊ยก</h3>
                  <h3>Supachai U.</h3>
                  <h3>1996</h3>
                </Col>
                <Col span={4}>
                  <img src="10.jpg" alt="moss" width="150" height="150" padding="50px"/>
                  <h1>10.</h1>
                  <h3>มอส</h3>
                  <h3>Phachra K.</h3>
                  <h3>1996</h3>
                </Col>
                <Col span={4}>
                  <img src="11.jpg" alt="off" width="150" height="150" padding="50px"/>
                  <h1>11.</h1>
                  <h3>อ๊อฟ</h3>
                  <h3>Thanawat J.</h3>
                  <h3>1996</h3>
                </Col>
                <Col span={4}>
                  <img src="12.jpg" alt="Bew" width="150" height="150" padding="50px"/>
                  <h1>12.</h1>
                  <h3>บิว</h3>
                  <h3>Wutthichai T.</h3>
                  <h3>1996</h3>
                </Col>
              </Row>

              <Row type="flex" justify="center" style={{ textAlign:'center', padding:10}}>
                <Col span={4}>
                  <img src="13.jpg" alt="M" width="150" height="150" padding="50px"/>
                  <h1>13.</h1>
                  <h3>เอ็ม</h3>
                  <h3>Gritin P.</h3>
                  <h3>1996</h3>
                </Col>
                <Col span={4}>
                  <img src="14.jpg" alt="golf" width="150" height="150" padding="50px"/>
                  <h1>14.</h1>
                  <h3>กอล์ฟ</h3>
                  <h3>Sirawat C.</h3>
                  <h3>1996</h3>
                </Col>
                <Col span={4}>
                  <img src="15.jpg" alt="max" width="150" height="150" padding="50px"/>
                  <h1>15.</h1>
                  <h3>แม็ก</h3>
                  <h3>Thanakorn P.</h3>
                  <h3>1996</h3>
                </Col>
              </Row>

          </section>



                </div>
              </body>

              <Content style={{  background: '#000' , padding: '0 50px'}}>
              <div style={{ background: 'transparent', padding: '25', minHeight: '280' , margin: '80px'}} >

          <section id="Vote">
          <Row style={{ textAlign:'center', padding:80}}>
              <Col span={24}>
                <img src="slidevote.jpg" alt="sd" width="900" height="80" padding="20px"/>
              </Col>
          </Row>
            <Row type="flex" justify="center" style={{ textAlign:'center', padding:10}}>
              <Col span={6}>
                <img src="/vote/1.jpg" alt="win" width="250" height="350" padding="50px"/>
                  <button type="button"  title="VOTE"> VOTE NOW</button>
              </Col>
              <Col span={6}>
                <img src="/vote/2.jpg" alt="few" width="250" height="350" padding="50px"/>
                <button type="button"  title="VOTE"> VOTE NOW</button>
              </Col>
              <Col span={6}>
                <img src="/vote/3.jpg" alt="guy" width="250" height="350" padding="50px"/>
                <button type="button"  title="VOTE"> VOTE NOW</button>
              </Col>
            </Row>

            <Row type="flex" justify="center" style={{ textAlign:'center', padding:10}}>
              <Col span={6}>
                <img src="/vote/4.jpg" alt="top" width="250" height="350" padding="50px"/>
                <button type="button"  title="VOTE"> VOTE NOW</button>
              </Col>
              <Col span={6}>
                <img src="/vote/5.jpg" alt="boss" width="250" height="350" padding="50px"/>
                <button type="button"  title="VOTE"> VOTE NOW</button>
              </Col>
              <Col span={6}>
                <img src="/vote/6.jpg" alt="frame" width="250" height="350" padding="50px"/>
                <button type="button"  title="VOTE"> VOTE NOW</button>
              </Col>
            </Row>

            <Row type="flex" justify="center" style={{ textAlign:'center', padding:10}}>
              <Col span={6}>
                <img src="/vote/7.jpg" alt="nine" width="250" height="350" padding="50px"/>
                <button type="button"  title="VOTE"> VOTE NOW</button>
              </Col>
              <Col span={6}>
                <img src="/vote/8.jpg" alt="kann" width="250" height="350" padding="50px"/>
                <button type="button"  title="VOTE"> VOTE NOW</button>
              </Col>
              <Col span={6}>
                <img src="/vote/9.jpg" alt="piak" width="250" height="350" padding="50px"/>
                <button type="button"  title="VOTE"> VOTE NOW</button>
              </Col>
            </Row>

            <Row type="flex" justify="center" style={{ textAlign:'center', padding:10}}>
              <Col span={6}>
                <img src="/vote/10.jpg" alt="moss" width="250" height="350" padding="50px"/>
                <button type="button"  title="VOTE"> VOTE NOW</button>
              </Col>
              <Col span={6}>
                <img src="/vote/11.jpg" alt="off" width="250" height="350" padding="50px"/>
                <button type="button"  title="VOTE"> VOTE NOW</button>
              </Col>
              <Col span={6}>
                <img src="/vote/12.jpg" alt="bew" width="250" height="350" padding="50px"/>
                <button type="button"  title="VOTE"> VOTE NOW</button>
              </Col>
            </Row>

            <Row type="flex" justify="center" style={{ textAlign:'center', padding:10}}>
              <Col span={6}>
                <img src="/vote/13.jpg" alt="m" width="250" height="350" padding="50px"/>
                <button type="button"  title="VOTE"> VOTE NOW</button>
              </Col>
              <Col span={6}>
                <img src="/vote/14.jpg" alt="golf" width="250" height="350" padding="50px"/>
                <button type="button"  title="VOTE"> VOTE NOW</button>
              </Col>
              <Col span={6}>
                <img src="/vote/15.jpg" alt="maxx" width="250" height="350" padding="50px"/>
                <button type="button"  title="VOTE"> VOTE NOW</button>
              </Col>
            </Row>

        </section>


      </div>
    </Content>

<section id="Login">
    <Footer style={{ textAlign: 'center',width: '100%'  }}>
    <Row type="flex" justify="center" style={{ textAlign:'center', padding:10}}>
    <Col span={3}>
      <h1>SIGN UP</h1>
      <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <label>
    lastName:
    <input type="text" name="name" />
  </label>
  <label>
    Birthday:
    <input type="text" name="name" />
  </label>
  <label>
    Email:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
    </Col>
    <Col span={3}>
      <h1>LOGIN</h1>
      <form>
  <label>
    Username:
    <input type="text" name="name" />
  </label>
  <label>
    Password:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Login" />
</form>
    </Col>
    </Row>

    </Footer>
  </section>
  <style jsx global>{`


  .ant-menu-horizontal > .ant-menu-item, .ant-menu-horizontal > .ant-menu-submenu{
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-size: 18px;
    letter-spacing: 1px;
  }
  .ant-layout-header{
    background: #fff;
    z-index: 100;
  }
  #components-layout-demo-top .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 1);
    margin: 16px 24px 16px 0;
    float: left;
  }
  .ant-carousel .slick-slide {
    font-family: 'Barlow Semi Condensed', sans-serif;
    letter-spacing: 1px;
    text-align: center;
    height: 590px;
    line-height: 50px;
    background: #fff;
    overflow: visible;
  }
  .ant-carousel .slick-slide h3 {
    color: #000;
  }
  .ant-carousel .slick-initialized .slick-slide{
    display: inline-block;
  }
  .carousel .h1{
    padding-left: 30px;
  }

  .ant-menu-horizontal > .ant-menu-item:hover, .ant-menu-horizontal > .ant-menu-submenu:hover, .ant-menu-horizontal > .ant-menu-item-active, .ant-menu-horizontal > .ant-menu-submenu-active, .ant-menu-horizontal > .ant-menu-item-open, .ant-menu-horizontal > .ant-menu-submenu-open, .ant-menu-horizontal > .ant-menu-item-selected, .ant-menu-horizontal > .ant-menu-submenu-selected{
    border-bottom: 2px solid rgba(30, 48, 0, 0.73);
    color: rgba(30, 48, 0, 0.73);
  }
 `}</style>
  </Layout>
 )
