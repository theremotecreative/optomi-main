import React, { Component } from "react"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

class GivingBack extends Component {

    constructor(props) {
        super(props);
        this.container = null;
        this.trigger = null;
        this.tl = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: "#giving_trigger",
            scrub: true,
            start: 'top bottom',
            end: 'top 30%',
            id: 'giving_parallax',
            toggleActions: 'play reset play reset',
          }
        });
      }
      componentDidMount() {
        this.tl.to(this.container, {
            opacity: '1',
        });
      }

      render() {

        const { data } = this.props; 

        return(

            data.allWordpressWpHomeSection.edges.map(post => (
                <MainSection id={"giving_trigger"}>
    
                    <ImageBackground ref={div => (this.container = div)}>
                        <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                    </ImageBackground>
    
                    <MainRow
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >
                        <MainDiv>
                            <MainContent 
                                dangerouslySetInnerHTML={{ __html: post.node.content }}
                            />
                            <Logo sizes={post.node.acf.logo.localFile.childImageSharp.sizes} alt={"Opt to Give"} />
                        </MainDiv>
                        
                    </MainRow>
                    
                </MainSection>
            ))

        );

    }

}

const MainSection = styled.div`
    background-color: #000;
    position: relative;
    height: 80vh;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 1;
`

const BackgroundImg = styled(Img)`
    height: 100vh;
`

const ImageBackground = styled.div`
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
`

const MainRow = styled.div`
    max-width: 1340px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin: 0 auto;
`

const MainDiv = styled.div`
    max-width: 390px;
    margin-left: auto;
`

const MainContent = styled.div`
    z-index: 2;
    position: relative;
    h2 {
        font-family: "BonVivant";
        color: #fff;
        text-align: center;
        font-size: 72px;
        font-weight: 100;
        margin-bottom: 50px;
    }
    p {
        font-family: "Helvetica Thin";
        color: #fff;
        font-size: 24px;
        line-height: 1.3;
    }
`

const Logo = styled(Img)`
    width: 300px;
    margin: 0 auto;
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 3}}}}) {
                edges {
                    node {
                        title
                        content
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 2800) {
                                        ...GatsbyImageSharpSizes
                                    }
                                }
                            }
                        }
                        acf {
                            logo {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 2355) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
      `}
      render={data => <GivingBack data={data} {...props} />}
    />
  );