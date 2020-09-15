import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TestimonialSlider from "../components/testimonial-slider"

const CandidatesPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 11}}}}) {
                edges {
                    node {
                        title
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
                            meta_title
                            meta_description
                            hero {
                                header
                                sub_header
                                tagline
                            }
                            section_two {
                                paragraph_one
                                paragraph_two
                                button_title
                                button_one_text
                                button_one_link
                                button_two_text
                                button_two_link
                                button_three_text
                                button_three_link
                            }
                        }
                    }
                }
            }
        }
    `)

    return(
        
        data.allWordpressWpCustomPage.edges.map(post => (
            <Layout>
                <SEO 
                title={post.node.acf.meta_title} 
                description={post.node.acf.meta_description}
                image={post.node.featured_media.localFile.childImageSharp.sizes}
                />
                <HeroBanner>
                    <ImageBackground>
                        <HeroImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                    </ImageBackground>

                    <HeroTitle
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                    >
                        <h1>{post.node.title}</h1>
                        <p>Optomi <span>Technology</span> Talent</p>
                    </HeroTitle>

                    <HeroMain>
                        <h2 
                        data-sal="fade"
                        data-sal-easing="ease"
                        class="bonvivant">{post.node.acf.hero.header}</h2>
                        <h2
                        data-sal="fade"
                        data-sal-easing="ease"
                        class="header"
                        >{post.node.acf.hero.sub_header}</h2>
                        <h3
                        data-sal="slide-up"
                        data-sal-easing="ease"
                        >{post.node.acf.hero.tagline}</h3>
                    </HeroMain>
                    
                </HeroBanner>

                <SectionTwo>

                    <ParagraphOne 
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    dangerouslySetInnerHTML={{ __html: post.node.acf.section_two.paragraph_one }}/>

                    <ParagraphTwo 
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    dangerouslySetInnerHTML={{ __html: post.node.acf.section_two.paragraph_two }}/>

                    <ButtonSection>
                        <h2
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        >{post.node.acf.section_two.button_title}</h2>
                        <div class="button-row">
                            <a 
                            data-sal="slide-up"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            href={post.node.acf.section_two.button_one_link}>{post.node.acf.section_two.button_one_text}</a>
                            <a 
                            data-sal="slide-up"
                            data-sal-duration="1000"
                            data-sal-delay="600"
                            data-sal-easing="ease"
                            href={post.node.acf.section_two.button_two_link}>{post.node.acf.section_two.button_two_text}</a>
                            <a 
                            data-sal="slide-up"
                            data-sal-duration="1000"
                            data-sal-delay="900"
                            data-sal-easing="ease"
                            href={post.node.acf.section_two.button_three_link}>{post.node.acf.section_two.button_three_text}</a>
                        </div>
                    </ButtonSection>

                </SectionTwo>

                <SectionThree>
                    <h2
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >Testimonials</h2>
                    <TestimonialSlider/>
                </SectionThree>

            </Layout>
            
        ))
    )
}

const HeroBanner = styled.div`
    position: relative; 
    min-height: 100vh;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    @media (max-width:800px) {
        align-items: flex-start;
    }
    @media (max-width:600px) {
        display: block;
    }
`

const ImageBackground = styled.div`
    background-color: #000;
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
`

const HeroImg = styled(Img)`
    height: 100vh;
    width: 100%;
    img {
        margin-bottom: 0;
    }
`

const HeroTitle = styled.div`
    position: absolute;
    top: 100px;
    left: 150px;
    h1 {
        font-family: "Helvetica Thin";
        color: #5ab3e8;
        margin-bottom: 0;
        text-transform: lowercase;
        font-size: 72px;
        font-weight: 100;
        line-height: 1;
        @media(max-width:1200px) {
            font-size: 62px;
        }
        @media(max-width:800px) {
            font-size: 52px;
        }
    }
    p {
        font-family: "Helvetica Thin";
        letter-spacing: 2px;
        width: 100%;
        text-align: center;
        z-index: 1;
        font-size: 20px;
        color: rgb(140,145,146);
        span {
            color: #5ab3e8;
        }
        @media(max-width:800px) {
            font-size: 18px;
        }
    }
    @media(max-width: 800px) {
        position: relative;
        top: auto;
        left: auto;
        padding: 20px;
        padding-top: 100px;
        text-align: center;
        width: 100%;
    }
`

const HeroMain = styled.div`
    max-width: 1240px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 100px;
    position: relative;
    text-align: center;
    .bonvivant {
        font-family: "BonVivant";
        color: #fff;
        text-align: center;
        font-size: 90px;
        font-weight: 100;
        margin-bottom: 10px;
        transition-duration: 2s;
        transition-delay: 1s;
    }
    .header {
        font-family: "Helvetica Thin";
        color: #fff;
        margin-bottom: 5px;
        text-transform: lowercase;
        font-size: 60px;
        font-weight: 100;
        line-height: 1.2;
        letter-spacing: 10px;
        transition-duration: 2s;
        transition-delay: 1.5s;
    }
    h3 {
        font-family: "Helvetica Thin";
        color: #fff;
        font-size: 22px;
        font-weight: 100;
        letter-spacing: 5px;
        line-height: 1.3;
        text-transform: uppercase;
        transition-duration: 1s;
        transition-delay: 2s;
    }
    @media(max-width:1500px) {
        .bonvivant {
            font-size: 72px;
        }
        .header {
            font-size: 46px;
        }
        h3 {
            font-size: 20px;
        }
    }
    @media(max-width:1200px) {
        .bonvivant {
            font-size: 60px;
        }
        .header {
            font-size: 36px;
        }
        h3 {
            font-size: 18px;
        }
    }
    @media(max-width:500px) {
        padding-top: 35px;
        .bonvivant {
            font-size: 42px;
        }
        .header {
            font-size: 28px;
        }
        h3 {
            font-size: 14px;
        }
    }
`

const SectionTwo = styled.div`
    position: relative;
    width: 100%;
    background-color: #000;
    padding: 80px 20px;
`

const ParagraphOne = styled.div`
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 80px;
    text-align: center;
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 24px;
        color: #fff;
        line-height: 1.3;
        @media(max-width: 500px) {
            font-size: 20px;
        }
    }
`

const ParagraphTwo = styled.div`
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 80px;
    text-align: center;
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 24px;
        color: #fff;
        line-height: 1.3;
        @media(max-width: 500px) {
            font-size: 20px;
        }
    }
`

const ButtonSection = styled.div`
    max-width: 1340px;
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #8a8d8f;
    h2 {
        font-family: "BonVivant";
        color: #fff;
        text-align: center;
        font-size: 90px;
        font-weight: 100;
        margin-bottom: 80px;
    }
    .button-row {
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        margin: 0 auto;
        margin-bottom: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
            font-family: "Helvetica Thin";
            color: #8a8d8f;
            font-size: 32px;
            font-weight: 100;
            letter-spacing: 10px;
            line-height: 1.3;
            text-transform: uppercase;
            text-decoration: none;
            padding: 0 60px;
        }
        @media(max-width: 1500px) {
            a {
                font-size: 24px;
            }
        }
        @media(max-width: 1200px) {
            a {
                font-size: 20px;
                padding: 0 40px;
                letter-spacing: 8px;
            }
        }
        @media(max-width: 870px) {
            a {
                padding: 0 20px;
            }
        }
        @media(max-width:750px) {
            flex-wrap: wrap;
            a {
                padding: 20px;
                width: 100%;
                text-align: center;
            }
        }
    }
    @media(max-width: 1500px) {
        max-width: 1140px;
        h2 {
            font-size: 72px;
        }
    }
    @media(max-width: 1200px) {
        max-width: 940px;
        h2 {
            font-size: 60px;
        }
    }
`

const SectionThree = styled.div`
    position: relative;
    background-color: #000;
    padding: 80px 20px;
    h2 {
        max-width: 1140px;
        width: 100%;
        font-family: "Helvetica Thin";
        color: #8a8d8f;
        margin: 0 auto;
        margin-bottom: 5px;
        text-transform: uppercase;
        font-size: 60px;
        font-weight: 100;
        line-height: 1.2;
        letter-spacing: 10px;
        @media(max-width:800px) {
            42px;
        }
    }
    @media(max-width:600px) {
        h2 {
            font-size: 32px;
            text-align: center;
            letter-spacing: 5px;
        }
    }
`


export default CandidatesPage