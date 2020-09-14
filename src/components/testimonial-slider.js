import React, { Component } from "react"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Slider from "react-slick"

import './slick.css'
import './slick-theme.css'
import './slick-custom.css'

class TestimonialSlider extends Component {

  render() {

    const { data } = this.props; 

      const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
      return (
        <SliderContainer className={"testimonial-slider"}>
          <div
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-delay="1200"
          data-sal-easing="ease"
          >
          <Slider {...settings}>
            {data.allWordpressWpTestimonial.edges.map(post => (
              <Testimonial>
                <Quote dangerouslySetInnerHTML={{ __html: post.node.content }} className={"sliderFade"}/>
                <Meta>
                  <h4>{post.node.acf.author_name}</h4>
                  <p>{post.node.acf.author_position}</p>
                </Meta>
              </Testimonial>
            ))}          
          </Slider>
          </div>
        </SliderContainer>
      );
  }
}

const SliderContainer = styled.div`
    max-width: 940px;
    width: 100%;
    position: relative;
    padding: 50px 0;
    margin: 0 auto;
`

const Testimonial = styled.div`
    outline: 0 !important;
    position: relative;
    display: flex !important;
`

const Quote = styled.div`
    width: 70%;
    padding-right: 100px;
    p {
      font-family: "Helvetica Thin";
      font-size: 28px;
      line-height: 1.3;
      color: #fff;
      text-align: left !important;
    }
`

const Meta = styled.div`
  width: 30%;
  padding-left: 20px;
  border-left: 5px solid #298fc2;
  height: 100%;
    h4 {
      font-family: "Helvetica Thin";
      color: #fff;
      letter-spacing: 1px;
      margin-bottom: 5px;
    }
    p {
      font-family: "Helvetica Thin";
      color: #fff;
      font-size: 16px;
      letter-spacing: 1px;
      margin-bottom: 0;
    }
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpTestimonial(sort: {fields: date, order: DESC}) {
                edges {
                    node {
                      content
                      acf {
                        author_name
                        author_position
                      }
                    }
                  }
            }
        }
      `}
      render={data => <TestimonialSlider data={data} {...props} />}
    />
  );