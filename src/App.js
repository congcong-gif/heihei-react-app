import React, { useState, useEffect } from 'react'
import './css/one.css'
import Header from './view/xuenan/index'

import Login from './view/login/login'

// import Detail from './view/yango/detail'
// import Head from './view/xuenan/head'
import Nav from './view/xuenan/nav'
// import Banner from './component/Banner'
// import { Route } from 'react-router-dom'
import axio from './http'

import Home from "../src/view/dyc/home"
axio().then((res) => {
  console.log(res)
})
// const transfrom={
//   position:'relative',
//   transform: 'translateX(4.5rem)'
// }

function App() {
  const [flag, setFlag] = useState(false)
  useEffect(() => {
    console.log(flag);
  }, [flag])
  return (
    <div className="App">

      <Login></Login>

      {/* <Detail></Detail> */}
      {/* <Header></Header> */}
      <Header setFlag={setFlag} flag={flag}></Header>
      {/* <Head></Head> */}
      {
        flag ? <Nav></Nav> : ""
      }

      <div style={
        {
          transform: `translateX(${flag ? 4.5 : 0}rem)`
        }
      }>
        {/* <Banner ></Banner> */}
        <Home></Home>
      </div>
      {/* <Route path="/" exact component={首页}></Route>
      <Route path="/course" exact component={课程表}></Route>
      <Route path="/lecturer" exact component={讲师}></Route> */}

    </div>

  );
}
export default App
