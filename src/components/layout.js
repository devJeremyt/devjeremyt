import React from "react"
import { css } from "@emotion/core"
import Header from '../components/proHeader'
import "./layout.css"


class Layout extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      personal: false,
    }
  }

  render(){
    return (
      <div
    css={css`
      margin: 0 auto 5% auto;
      max-width: 1000px;
    `}
  >
    <Header/>
    {this.props.children}
  </div>
    )
  }

}

export default Layout;

