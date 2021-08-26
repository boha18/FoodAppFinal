import React from 'react'
import TempScreen from '../Component/TempScreen'
import { images } from '../constants'

const WelcomeScreenSecond = () => {
    return (
        <TempScreen source={images.Welcome_2}
            title={'Food Ninja is Where Your \n Comfort Food Lives'}
            subTitle={'Enjoy a Fast and Smooth Delivery at \n Your Doorstep'} />
    )
}

export default WelcomeScreenSecond;
