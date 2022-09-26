import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from "framer-motion";
import "../styles/item.css";

const element = <FontAwesomeIcon icon={faTrashCan} size="2x" />

export default function Item(props) {
    const [isRemoved, setIsRemoved] = useState(true);

    const handleRemove = function () {
        props.onRemove();
        setIsRemoved(false);
    };

    return (
        <AnimatePresence>
            {isRemoved && (
                <motion.div
                    initial={{ opacity: 0, y: "-40%" }}
                    animate={{ opacity: 1, y: "0%" }}
                    exit={{
                        opacity: 0,
                        transition: {duration: 0.15}
                    }}
                    transition={{
                        duration: 0.6,
                        ease: [0, 0.71, 0.1, 1]
                    }}
                >
                    <div
                        className="content">
                        <div className="content-text">
                            {props.name}
                        </div>
                        <div className="trash-icon" onClick={handleRemove}>
                            {element}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};