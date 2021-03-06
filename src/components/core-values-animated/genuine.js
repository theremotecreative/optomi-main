import React, { useEffect } from "react"
import styled from 'styled-components'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import GenuineContent from "./core-values/genuine-content"

const Genuine = () => {

    useEffect(() => {
    
        if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: '#g_trigger',
                start: 'top 70%',
                end: 'top 60%',
                id: 'genuine_line',
                },
            })
            tl.to('.g-rotate', {rotation: 1080, left: '20px', opacity: '1', duration: 2, ease: 'power4.out' })
            tl.to('.g-line', { width: '60%', duration: 1, ease: "power2.out" })

        let tlTwo = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: '#g_trigger',
                start: 'top 70%',
                end: 'top 60%',
                id: 'genuine_line',
                },
            })
            tlTwo.to('.g-toggle', {opacity: '1', duration: 1, delay: 1, ease: "power2" })
    
      }, []);

    return(
        <MainContainer id={"g_trigger"}>
            <GenuineContent />
        </MainContainer>
    );

}

const MainContainer = styled.div`
    margin-bottom: 200px;
    position: relative;
`


export default Genuine