import React from 'react';
import RatingStars from '../ratingStars/ratingStars';
import styles from './averageRating.module.scss';

export interface Props {
    comments: IComments[];
}

export default function AverageRating({ comments }: Props) {
    const numberOfReviews = comments.length;

    const rating =
        comments.reduce(
            (acc: number, curr: IComments) => acc + curr.rating,
            0
        ) / comments.length;

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
