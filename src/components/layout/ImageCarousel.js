import React, { useState, useEffect } from 'react'

import { className } from '../../util/stringUtil';
import { wrap } from '../../util/mathUtil';

import StarSkyComponent from '../StarSkyComponent'

import * as styles from '../../styles/modules/Carousel.module.css'

import image0 from '../../images/carousel/0.jpg'
import image1 from '../../images/carousel/1.jpg'
import image2 from '../../images/carousel/2.jpg'
import image3 from '../../images/carousel/3.jpg'
import image4 from '../../images/carousel/4.jpg'
import image5 from '../../images/carousel/5.jpg'
import image6 from '../../images/carousel/6.jpg'
import image7 from '../../images/carousel/7.jpg'
import image8 from '../../images/carousel/8.jpg'

const images = [
    image0,
    image7,
    image1,
    image6,
    image2,
    image3,
    image8,
    image4,
    image5,
]

export const ImageCarousel = () => {

    const [index, setIndex] = useState(-1);

    useEffect(() => {
        const carouselInterval = setInterval(
            () => {
                setIndex(wrap(0, images.length - 1, index + 1))
            },
            4000
        )

        return () => {
            clearInterval(carouselInterval)
        }
    }, [index])


    return (
        <StarSkyComponent>
            {images.map((item, i) => (
                <img
                    key={i}
                    src={item}
                    alt="Image Carousel"
                    className={
                        className([
                            styles.carouselImage,
                            (index === i) ? styles.carouselShown : styles.carouselHidden
                        ])
                    }
                />
            ))}
        </StarSkyComponent>
    )
}
