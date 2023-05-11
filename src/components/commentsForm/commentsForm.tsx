import React, { useState } from 'react';
import Button from '../button/button';
import styles from './commentsForm.module.scss';
import RatingStars from '../ratingStars/ratingStars';

export interface Props {
    id: number;
}

const initialFormData = {
    title: '',
    message: '',
    user: '',
    rating: 0,
};

export default function CommentsForm({ id }: Props) {
    const [data, setData] = useState<CreateCommentType>(initialFormData);

    const postComment = async (id: number, data: CreateCommentType) => {
        await fetch(`http://localhost:3000/api/products/${id}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    };

    const handleCreateComment = async (e: React.MouseEvent) => {
        e.preventDefault();
        await postComment(id, data);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleRating = (newRating: number) => {
        setData({ ...data, rating: newRating });
    };

    return (
        <section>
            <h4 className={styles.heading}>We appreaciate your feedback!</h4>
            <div className={styles.rating}>
                <span>Rate this product </span>
                <RatingStars
                    interactive
                    rating={data.rating}
                    handleRating={handleRating}
                />
            </div>
            <form className={styles.commentsForm}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    className={styles.commentTitle}
                    onChange={handleChange}
                />
                <label htmlFor="user">Your Name</label>
                <input type="text" name="user" onChange={handleChange} />
                <label htmlFor="message">Tell Us More</label>
                <textarea name="message" rows={3} onChange={handleChange} />
                <Button
                    className="btnFillToRight"
                    onClick={handleCreateComment}
                >
                    <span className={styles.submit}>Submit</span>
                </Button>
            </form>
        </section>
    );
}
