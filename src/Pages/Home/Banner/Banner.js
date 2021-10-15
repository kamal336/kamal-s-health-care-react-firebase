import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import bannerImg3 from '../../../images/bannerImg3.jpg';
import bannerImg8 from '../../../images/bannerImg8.jpg';
import bannerImg7 from '../../../images/bannerImg7.jpg';

const Banner = () => {
    return (
        <Container>
            <Carousel>
            <Carousel.Item interval={1000}>
                <img style={{height:"650px"}}
                className="d-block w-100"
                src={bannerImg3}
                alt="First slide"
                />
          
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img  style={{height:"650px"}}
                className="d-block w-100"
                src={bannerImg8}
                alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img  style={{height:"650px"}}
                className="d-block w-100"
                src={bannerImg7}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;