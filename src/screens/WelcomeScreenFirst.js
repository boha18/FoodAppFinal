import React from 'react'
import TempScreen from '../Component/TempScreen'
import { images } from '../constants'

const WelcomeScreenFirst = () => {
    return (
        <TempScreen source={images.Welcome_1}
            title='Find Your Comfort \n Food Here'
            subTitle='Here You Can Find a Chef that Muy takes Car of You' />
    )
}

export default WelcomeScreenFirst

