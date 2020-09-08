import React, { useEffect } from "react"
import styled from 'styled-components'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const DifLineOneV2 = () => {

    useEffect(() => {
    
        if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#row_one_trigger",
                scrub: 1,
                start: 'top center',
                end: 'top 20%',
                id: 'dif_line_one',
                },
            })
            tl.to('.dif-line-one', { width: '80%' })
    
      }, []);

      return (
        <MainContainer>
            <Copy>Skill-Set Focused</Copy>
            <div style={{ background: 'transparent', height: '35px', width: '100%', position: 'relative', marginBottom: '10px' }}>
                    <Line className="dif-line-one" />
            </div>
            <Percent>100%</Percent>
        </MainContainer>
    );

}

const MainContainer = styled.div`
    max-width: 1340px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin: 0 auto;
    @media(max-width:1500px) {
      max-width: 1140px;
    }
    @media(max-width:1200px) {
      max-width: 940px;
    }
`

const Percent = styled.p`
    font-family: "Helvetica Thin";
    font-size: 60px;
    line-height: 1;
    letter-spacing: 5px;
    color: #fff;
    text-align: right;
    margin-top: -25px;
    padding-right: 100px;
    position: relative;
    z-index: 1;
    @media(max-width:800px) {
      padding-left: 0;
    }
`

const Line = styled.div`
    width: 0%;
    height: 35px;
    background-color: #298fc2;
    position: absolute;
    top: 0px;
    left: 20%;
`

const Copy = styled.p`
    font-family: "Helvetica Thin";
    font-size: 32px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 3px;
    max-width: 100%;
    text-align: right;
    line-height: 1;
    @media(max-width:800px) {
      max-width: 100%;
    }
`

export default DifLineOneV2