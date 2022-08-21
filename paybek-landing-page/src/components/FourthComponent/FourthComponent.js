import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./FourthComponent.css";



const FourthComponent = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="fourthcomponent_wrapper">
            <div className="fourthcomponent_columnwrapper">
                <div className="fourthcomponent_column">
                    <div>
                        <p className="fourthcomponent_bluetext"> Home • Top Up </p>
                        <p className="fourthcomponent_blacktext">
                            Top-up Mobiles
                            at your fingertip
                        </p>
                    </div>
                    <div className="fourthcomponent_column_picture">
                        <p className="fourthcomponent_picture_text">
                            Over 100+ Top up country
                        </p>
                    </div>
                </div>
            </div>
            <div className="carousel_wrapper">
                <Slider {...settings}>
                    <div className="mainitem"><div className="item picture_1"></div></div>
                    <div className="mainitem"><div className="item picture_2"></div></div>
                    <div className="mainitem"><div className="item picture_3"></div></div>
                    <div className="mainitem"><div className="item picture_4"></div></div>
                    <div className="mainitem"><div className="item picture_5"></div></div>
                    <div className="mainitem"><div className="item picture_6"></div></div>
                    <div className="mainitem"><div className="item picture_7"></div></div>
                </Slider>
            </div>
        </div>
    )
}

export default FourthComponent