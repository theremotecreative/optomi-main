import React from "react"
import styled from 'styled-components'
import SlickSlider from './case-study-slider'

const CaseStudies = () => (
    <CaseStudiesMain>
        <MainRow
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="300"
        data-sal-easing="ease"
        >
            <h2>Case Studies</h2>
            <SlickSlider/>
        </MainRow>
    </CaseStudiesMain>
)

const CaseStudiesMain = styled.div`
    padding-top: 80px;
    padding-bottom: 180px;
    width: 100%;
    background-color: #fff;
`

const MainRow = styled.div`
    max-width: 1340px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    h2 {
        font-family: "Helvetica Thin";
        font-size: 60px;
        color: #000;
        font-weight: 100;
        line-height: 1.2;
        letter-spacing: 1px;
        margin-bottom: 50px;
        text-transform: uppercase;
    }
    &:before {
        content: '';
        height: 100%;
        width: 1000px;
        background-color: #fff;
        position: absolute;
        left: -980px;
        top: 0;
        z-index: 2;
    }
`

export default CaseStudies