import React from 'react'
import { css } from "@emotion/core"
import styled from '@emotion/styled'


class Toggle extends React.Component{
    constructor(props){
        super(props)
    }

    
    render(){
        return(
            <label css={css`
                width: 60px;
                height: 34px;
                display: inline-block;
                position: relative;               
            `}>
                <input type='checkbox' css={css`
                    opacity:0;
                    width:0;
                    height0;
                `}></input>
                <Slider></Slider>
            </label>
        )
    }
}
let Slider = styled.span`
    position : absolute;
    cursor: pointer;
    top:0;
    right:0;
    left: 0;
    bottom:0;
    background-color: #000;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;

    &:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom:4px;
        background-color: white;
        transition: .4s;
        border-radius:50%;
    }

    input:checked + &:before{
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
        
    }

    input:checked + & {
        background-color: gray;
    }
    `

export default Toggle;