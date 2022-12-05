import React from 'react'
import StarSky from './star-sky/StarSky'

export const StarSkyComponent = ({ children }) => (
    <StarSky
        className="star-sky-wrapper"
        debugFPS={true}
        starCount={50}
    >
        {children}
    </StarSky>
)

export default StarSkyComponent