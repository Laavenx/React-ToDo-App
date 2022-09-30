import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/item.module.scss";

const element = <FontAwesomeIcon icon={faTrashCan} size="2x" />

export default function Item(props) {
    const [isRemoved, setIsRemoved] = useState(false);

    const handleRemove = function (e) {
        props.onRemove(e);
        setIsRemoved(true);
    };

    return (
        <AnimatePresence>
            {!isRemoved && (
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
                        className={styles.content}
                        onClick={props.onClick}
                        >
                        <div className={styles["content-text"]}>
                            <div className={styles["content-text-wrapper"]}>
                                {props.name}
                            </div>
                        </div>
                        <div className={styles["trash-icon"]} onClick={handleRemove}>
                            {element}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};