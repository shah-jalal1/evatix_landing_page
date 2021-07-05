import React from 'react';
import image from '../../images/image_03@2x.png'


const Hero = () => {
    return (
        <div style={{ background: 'rgba(250,98,82,255)' }} class="font-sans leading-normal tracking-normal">

            <div class="grid grid-cols-1 divide-y divide-white-500">
                <div></div>
                <div></div>
            </div>

            <div class="container mx-auto flex flex-col md:flex-row items-center">

                <div class="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">

                    <h2 class="leading-normal mb-4 text-white"> Business Workflow </h2>

                    <p class="font-bold text-3xl my-4 text-white">Get The most efficient UI design for your business now</p>

                    <button class="bg-white hover:bg-White-900 text-gray-900 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-gray-900 hover:border-transparent">Hire Me</button>
                    
                </div>

                <div class="w-full lg:w-1/2 lg:py-6 text-center">

                    <img src={image} alt="" />

                </div>
            </div>


          

        </div>
    );
};

export default Hero;