import React from 'react';
import RatingStars from '../ratingStars/ratingStars';
import styles from './showComments.module.scss';

export interface Props {
    comments: IComments[];
}

export default function ShowComments({ comments }: Props) {
    return (
        <article className={styles.container}>
            {comments.map((comment) => {
                const { id, title, user, message, rating } = comment;
                return (
                    <div key={id} className={styles.comment}>
                        <div className={styles.commentHeading}>
                            <h4 className={styles.commentTitle}>{title}</h4>
                            <RatingStars rating={rating} />
                        </div>
                        <p className={styles.commentMessage}>{message}</p>
                        <span className={styles.commentUser}>{user}</span>
                    </div>
                );
            })}
        </article>
    );
}
