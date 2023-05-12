import React, { useState } from 'react';
import styles from './ratingStars.module.scss';

export interface Props {
    interactive: boolean;
    rating: number;
    handleRating?: (rating: number) => void;
}

export default function RatingStars({
    rating,
    handleRating,
    interactive,
}: Props) {
    const [hover, setHover] = useState<number>(0);

    const handleClick = (index: number) => {
        handleRating?.(index);
    };

    const handleMouseEnter = (index: number) => {
        setHover(index);
    };

    const handleMouseLeave = () => {
        setHover(rating);
    };

    return (
        <div className={styles.rating}>
            {Array.from({ length: 5 }).map((_, index) => {
                index += 1;
                return (
                    <button
                        key={index}
                        className={`${styles.btn} ${
                            index <= (hover || rating)
                                ? styles.starOn
                                : styles.starOff
                        }`}
                        onClick={
                            interactive ? () => handleClick(index) : undefined
                        }
                        onMouseEnter={
                            interactive
                                ? () => handleMouseEnter(index)
                                : undefined
                        }
                        onMouseLeave={
                            interactive ? handleMouseLeave : undefined
                        }
                    >
                        <span className={styles.star}>&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
}
