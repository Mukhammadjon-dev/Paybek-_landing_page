import "./ThirdComponent.css";

function ThirdComponent() {
    return (
        <div className="thirdcomponent_wrapper">
            <div>
                <p className="thirdcomponent_everyday">
                    Everyday essentials
                </p>
                <p className="thirdcomponent_heading">
                    Send less get More
                </p>
                <p className="thirdcomponent_description">
                    We provide best rates for your Top-Up
                </p>
            </div>
            <div className="thirdcomponent_columnwrapper">
                <div className="thirdcomponent_firstcolumn">
                    <div>
                        <p className="thirdcomponent_bluetext"> Home • Top Up </p>
                        <p className="thirdcomponent_blacktext">
                            Top-up Mobiles
                            at your fingertip
                        </p>
                    </div>
                    <div className="thirdcomponent_firstcolumn_picture">
                    </div>
                </div>
                <div className="thirdcomponent_secondcolumn">
                    <div className="thirdcomponent_secondcolumn_picture">
                    </div>
                    <div>
                        <p className="thirdcomponent_bluetext"> Home • Contacts </p>
                        <p className="thirdcomponent_blacktext">
                            Use your Phonebook
                            to recharge your contacts
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ThirdComponent;