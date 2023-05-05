import React from 'react';
import styles from './ratingStars.module.scss';

export interface Props {
    rating: number;
}

export default function RatingStars({ rating }: Props) {
    return (
        <div className={styles.rating}>
            {[...Array(5)].map((_, index) => {
                index += 1;
                return (
                    <span
                        key={index}
                        className={`${
                            index <= rating ? styles.starOn : styles.starOff
                        }`}
                    >
                        <span className={styles.star}>&#9733;</span>
                    </span>
                );
            })}
        </div>
    );
}
