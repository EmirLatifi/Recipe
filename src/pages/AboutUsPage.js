import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { BeatLoader } from 'react-spinners';


function AboutUsPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 100)
    })
    return (
        <div className="">
            {loading ?
                (
                    <div className="flex flex-col items-center pt-10">
                        <BeatLoader
                            className=""
                            color={'#000000'}
                            loading={loading}
                            size={20}
                        />
                        <p className="text-center text-3xl font-crimson pt-5">Loading...</p>
                    </div>
                ) :
                (
                    <>
                        <div className="md:w-4/5 xl:w-3/5 flex flex-col mx-auto px-4">
                            <div className="pt-10">
                                <h1 className="text-4xl font-bold pb-4 text-center">About Us</h1>
                                <p className="text-center pb-4">
                                    Welcome to our recipe app! We're passionate about food and believe that cooking should be an enjoyable and accessible experience for everyone.
                                </p>
                            </div>
                            <div className="flex flex-col items-center sm:flex-row gap-4 border-t-2 border-black py-4 ">
                                <div>
                                    <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
                                    <p className="leading-loose text-center">
                                        Our mission is to inspire home cooks by providing a wide range of delicious recipes that are easy to follow and prepare. We want to empower you to explore your culinary creativity and make every meal a memorable one.
                                    </p>
                                </div>
                                <img className="w-80 rounded-lg" src='https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_960_720.jpg'></img>
                            </div>
                            <div className="flex flex-col items-center sm:flex-row gap-4 border-t-2 border-black py-4">
                                <img className="w-80 rounded-lg" src='https://cdn.pixabay.com/photo/2016/05/06/12/25/cook-1375797_960_720.jpg'></img>
                                <div>
                                    <h2 className="text-2xl font-bold mb-4 text-center ">What We Offer</h2>
                                    <p className="leading-loose text-center">
                                        Our recipe app offers a vast collection of recipes from various cuisines around the world. Whether you're a beginner or an experienced cook, you'll find recipes that suit your taste and skill level. From quick and simple weeknight dinners to elaborate gourmet dishes, we've got you covered.
                                    </p>
                                </div>
                            </div>
                            <div className="border-t-2 border-black py-4">
                                <h2 className="text-2xl font-bold pt-2 text-center">Get Started</h2>
                                <p className="leading-loose text-center ">
                                    Ready to dive into the world of delicious recipes? Download our app today and start exploring the culinary wonders that await you. Happy cooking!
                                </p>
                            </div>
                        </div>
                        <div className=" h-28 flex justify-center items-center gap-2 bg-neutral-700 py-2 ">
                            <p className="text-white text-lg">Contact us:</p>
                            <div className="flex gap-5">
                                <FontAwesomeIcon className="text-white text-3xl" icon={faFacebook} />
                                <FontAwesomeIcon className="text-white text-3xl" icon={faInstagram} />
                                <FontAwesomeIcon className="text-white text-3xl" icon={faTwitter} />
                            </div>
                        </div>
                    </>
                )}
        </div>
    )
}

export default AboutUsPage