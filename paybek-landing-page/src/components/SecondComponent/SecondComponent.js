import "./SecondComponent.css";
import { motion } from "framer-motion"


function SecondComponent() {
    return (
        <div className="secondcomponent_wrapper">
            <div>
                <p className="secondcomponent_everyday">
                    Everyday essentials
                </p>
                <p className="secondcomponent_heading">
                    Send less get More
                </p>
                <p className="secondcomponent_description">
                    We provide best rates for your Top-Up
                </p>
            </div>
            <div>
                <div className="secondcomponent_picturewrapper">
                    <img className="secondcomponent_familypicture" />
                    <div className="secondcomponent_picturetext_wrapper">
                        <p className="secondcomponent_picturetext_headline">
                            Top Up Family
                        </p>
                        <p className="secondcomponent_picturetext_description">
                            We provide best rates for your Top-Up
                        </p>
                    </div>
                </div>
            </div>
            <div className="secondcomponent_doublecard_wrapper">
                <div className="secondcomponent_firstcard">
                    <p className="secondcomponent_doublecard_text">
                        Pay with mulltiple cards
                    </p>
                    <div className="secondcomponent_cardsrow">
                        <div className="cardrows_card">
                            <img className="cardrows_card_picture1" />
                        </div>
                        <div className="cardrows_card">
                            <img className="cardrows_card_picture2" />
                        </div>
                        <div className="cardrows_card">
                            <img className="cardrows_card_picture3" />
                        </div>
                        <div></div>
                    </div>
                    <div className="secondcomponent_cardsrow">
                        <div></div>
                        <div className="cardrows_card">
                            <img className="cardrows_card_picture4" />
                        </div>
                        <div className="cardrows_card">
                            <img className="cardrows_card_picture4" />
                        </div>
                        <div className="cardrows_card">
                            <img className="cardrows_card_picture4" />
                        </div>
                    </div>
                    <div className="secondcomponent_mastercard">
                    </div>
                </div>
                <div className="secondcomponent_secondcard">
                    <p className="secondcomponent_doublecard_text">
                        Get $5 for every invited friend
                    </p>
                    <div className="secondcomponent_userwrapper">
                        <div className="secondcomponent_smalldollar">
                        </div>
                        <div className="secondcomponent_bigdollar"></div>
                        <div className="secondcomponent_userlogo">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SecondComponent;