import React, { useState } from 'react';
import ShowComments from '../../components/showComments/showComments';
import CommentsForm from '../../components/commentsForm/commentsForm';
import Button from '../../components/button/button';
import useMountTransition from '../../useMountTransition';
import styles from './reviews.module.scss';

export interface Props {
    id: number;
    comments: IComments[];
}

export default function Reviews({ comments, id }: Props) {
    const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
    const hasTransitionedIn = useMountTransition(isFormVisible, 500);

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
