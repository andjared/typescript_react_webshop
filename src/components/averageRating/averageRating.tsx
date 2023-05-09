import React, { useState, useEffect } from 'react';
import RatingStars from '../ratingStars/ratingStars';
import styles from './averageRating.module.scss';

export interface Props {
    id: number;
}

export default function AverageRating({ id }: Props) {
    const [rating, setRating] = useState<number>(0);
    const [numberOfReviews, setNumberOfReviews] = useState<number>(0);

    useEffect(() => {
        const getComments = async (id: number) => {
            try {
                const res = await fetch(
                    `http://localhost:3000/api/products/${id}/comments`
                );
                if (res.ok) {
                    const data = await res.json();

                    setNumberOfReviews(data.length);

                    const averageRating =
                        data.reduce(
                            (acc: number, curr: IComments) => acc + curr.rating,
                            0
                        ) / data.length;

                    setRating(averageRating);
                }
            } catch (err) {
                console.log(err);
            }
        };
        getComments(id);
    }, [id]);

    if (!numberOfReviews) {
        return null;
    }

    return (
        <div className={styles.rating}>
            <RatingStars rating={rating} interactive={false} />
            <div className={styles.numOfReviews}>({numberOfReviews})</div>
        </div>
    );
}
