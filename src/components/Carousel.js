import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import 'react-alice-carousel/lib/alice-carousel.css'
import "../Style/styles.css"

function Carousel() {

    const [country, setCountry] = useState([
        {
            id: 1,
            name: "American",
            flag: "https://cdn-icons-png.flaticon.com/128/197/197484.png"
        },
        {
            id: 2,
            name: "British",
            flag: "https://cdn-icons-png.flaticon.com/128/197/197374.png"
        },
        {
            id: 3,
            name: "Canadian",
            flag: "https://cdn-icons-png.flaticon.com/128/4628/4628640.png"
        },
        {
            id: 4,
            name: "Croatian",
            flag: "https://cdn-icons-png.flaticon.com/128/197/197503.png"
        },
        {
            id: 5,
            name: "Chinese",
            flag: "https://cdn-icons-png.flaticon.com/128/197/197375.png"
        },
        {
            id: 6,
            name: "Dutch",
            flag: "https://cdn-icons-png.flaticon.com/128/197/197571.png"
        },
        {
            id: 7,
            name: "Egyptian",
            flag: "https://cdn-icons-png.flaticon.com/128/323/323324.png"
        },
        {
            id: 8,
            name: "Filipino",
            flag: "https://cdn-icons-png.flaticon.com/128/10597/10597932.png"
        },
        {
            id: 9,
            name: "French",
            flag: "https://cdn-icons-png.flaticon.com/128/197/197560.png"
        },
        {
            id: 10,
            name: "Greek",
            flag: "https://cdn-icons-png.flaticon.com/128/5921/5921998.png"
        },
        {
            id: 11,
            name: "Indian",
            flag: "https://cdn-icons-png.flaticon.com/128/3909/3909444.png"
        },
        {
            id: 12,
            name: "Irish",
            flag: "https://cdn-icons-png.flaticon.com/128/10576/10576451.png"
        },
        {
            id: 13,
            name: "Italian",
            flag: "https://cdn-icons-png.flaticon.com/128/10576/10576616.png"
        },
        {
            id: 14,
            name: "Jamaican",
            flag: "https://cdn-icons-png.flaticon.com/128/3909/3909450.png"
        },
        {
            id: 15,
            name: "Japanese",
            flag: "https://cdn-icons-png.flaticon.com/128/4628/4628642.png"
        },
        {
            id: 16,
            name: "Malaysian",
            flag: "https://cdn-icons-png.flaticon.com/128/10597/10597843.png"
        },
        {
            id: 17,
            name: "Mexican",
            flag: "https://cdn-icons-png.flaticon.com/128/4854/4854216.png"
        },
        {
            id: 18,
            name: "Moroccan",
            flag: "https://cdn-icons-png.flaticon.com/128/197/197551.png"
        },
        {
            id: 19,
            name: "Polish",
            flag: "https://cdn-icons-png.flaticon.com/128/4628/4628690.png"
        },
        {
            id: 20,
            name: "Portuguese",
            flag: "https://cdn-icons-png.flaticon.com/128/3909/3909361.png"
        },
        {
            id: 21,
            name: "Russian",
            flag: "https://cdn-icons-png.flaticon.com/128/4628/4628645.png"
        },
        {
            id: 22,
            name: "Spanish",
            flag: "https://cdn-icons-png.flaticon.com/128/10601/10601048.png"
        },
        {
            id: 23,
            name: "Thai",
            flag: "https://cdn-icons-png.flaticon.com/128/10576/10576553.png"
        },
        {
            id: 24,
            name: "Tunisian",
            flag: "https://cdn-icons-png.flaticon.com/128/10562/10562141.png"
        },
        {
            id: 25,
            name: "Turkish",
            flag: "https://cdn-icons-png.flaticon.com/128/4628/4628673.png"
        },
        {
            id: 26,
            name: "Vietnamese",
            flag: "https://cdn-icons-png.flaticon.com/128/197/197473.png"

        }

    ]);
    const [letters, setLetters] = useState([
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ])


    const renderCountryItems = () => {
        return country.map((item) => (
            <Link key={item.name} to={`/CountryPage/${item.name}`}>
                <img src={item.flag} className="w-12 mx-auto" alt={item.name} />
            </Link>
        ));
    };

    const renderLetterItems = () => {
        return letters.map((letter) => (
            <Link key={letter} to={`/LetterPage/starts-with/${letter}`}>
                <div className="w-3 mx-auto text-white"><div className="w-2">{letter}</div></div>
            </Link>
        ));
    };

    return (
        <div className="carousel-container bg-stone-700 pt-10">
            <div className="w-11/12 mx-auto">
                <AliceCarousel
                    items={renderCountryItems()}
                    responsive=
                    {
                        {
                            0: { items: 6 },
                            768: { items: 10 },
                            1024: { items: 13 },
                            1280: { items: 16 }

                        }
                    }
                    disableButtonsControls
                    mouseTracking
                />
            </div>
            <div className="w-11/12 mx-auto pt-10">
                <AliceCarousel
                    items={renderLetterItems()}
                    responsive=
                    {
                        {
                            0: { items: 14 },
                            568: { items: 17 },
                            1024: { items: 27 }
                        }
                    }
                    disableButtonsControls
                    dotsDisabled={false}
                    mouseTracking
                />
            </div>
        </div>
    )
}

export default Carousel