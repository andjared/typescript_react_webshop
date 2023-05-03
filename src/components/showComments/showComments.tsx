import React from 'react';
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
							<div className={styles.rating}>
								{[...Array(5)].map((_, index) => {
									index += 1;
									return (
										<span
											key={index}
											className={`${
												index <= rating
													? styles.starOn
													: styles.starOff
											}`}
										>
											<span className={styles.star}>
												&#9733;
											</span>
										</span>
									);
								})}
							</div>
						</div>
						<p className={styles.commentMessage}>{message}</p>
						<span className={styles.commentUser}>{user}</span>
					</div>
				);
			})}
		</article>
	);
}
