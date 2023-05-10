import React, { useState, useEffect } from 'react';
import ShowComments from '../../components/showComments/showComments';
import CommentsForm from '../../components/commentsForm/commentsForm';
import Button from '../../components/button/button';
import useMountTransition from '../../useMountTransition';
import styles from './reviews.module.scss';

export interface Props {
    id: number;
}

export default function Reviews({ id }: Props) {
    const [comments, setComments] = useState<IComments[]>([]);
    const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
    const hasTransitionedIn = useMountTransition(isFormVisible, 500);

    useEffect(() => {
        const getComments = async (id: number) => {
            try {
                const res = await fetch(
                    `http://localhost:3000/api/products/${id}/comments`
                );

                const data = await res.json();

                setComments(data);
            } catch (err) {
                console.log(err);
            }
        };

        getComments(id);
    }, [id]);

    const handleFormVisibility = (): void => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <div className={styles.reviews}>
            <h4>Reviews</h4>
            {!comments.length && !isFormVisible ? (
                <div>There is no reviews for this product</div>
            ) : (
                comments.length && (
                    <div>
                        <ShowComments comments={comments} />
                    </div>
                )
            )}
            <div>
                <Button
                    onClick={handleFormVisibility}
                    className="handleCommentsFormBtn"
                >
                    <span>
                        {isFormVisible
                            ? 'Close'
                            : comments.length
                            ? 'Write New Review'
                            : 'Be the first to write a review'}
                    </span>
                </Button>
                {(hasTransitionedIn || isFormVisible) && (
                    <div
                        className={`${styles.form} ${
                            hasTransitionedIn && styles.in
                        } ${isFormVisible && styles.visible}`}
                    >
                        <CommentsForm id={id} />
                    </div>
                )}
            </div>
        </div>
    );
}
