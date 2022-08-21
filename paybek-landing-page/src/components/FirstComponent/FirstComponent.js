import "./FirstComponent.css";
import { motion } from "framer-motion"

function FirstComponent() {

    return (
        <div className="firstcomponent_wrapper">
            <div className="firstline_pictures">
                <motion.div
                    animate={{ x: 40, scale: 1.15 }}
                    initial={{ scale: 0 }}
                    transition={{ duration: 1 }}
                    className="firstline_1">
                </motion.div>
                <motion.div
                    animate={{ x: -40, scale: 1.15 }}
                    initial={{ scale: 0 }}
                    transition={{ duration: 1 }}
                    className="firstline_2">
                </motion.div>
            </div>

            <div className="secondline_pictures">
                <motion.div
                    animate={{ x: 40, scale: 1.2 }}
                    initial={{ scale: 0 }}
                    transition={{ duration: 0.3 }}
                    className="secondline_1">
                </motion.div>
                <motion.div
                    animate={{ x: -40, scale: 1.2 }}
                    initial={{ scale: 0 }}
                    transition={{ duration: 0.3 }}
                    className="secondline_2">
                </motion.div>
            </div>
            <motion.div
                animate={{ x: 0, scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ duration: 0.5 }}
                className="title_box">
                <p className="title_box_headline">
                    The Fastest Way To Send
                    Top-Up Worldwides
                </p>
                <p className="title_box_description">
                    We deliver mobile Top-Up to millions
                    worldwide.
                </p>
                <button className="title_box_ctabutton">
                    Download Now
                </button>
            </motion.div>
        </div >
    )
}
export default FirstComponent;