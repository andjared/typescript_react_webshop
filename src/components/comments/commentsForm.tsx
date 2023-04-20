import React, { useState } from 'react';
import styles from './commentsForm.module.scss';
import Button from '../button/button';

export default function CommentsForm() {
	//initial values
	const formData = {
		title: '',
		message: '',
		user: '',
		rating: 0,
	};

	const [data, setData] = useState<Comments>(formData);
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const createComment = (e: React.MouseEvent, data: Comments) => {
		e.preventDefault();
		data.rating = rating;
		console.log(data);
	};

	return (
		<section className={styles.container}>
			<h4 className={styles.heading}>We appreaciate your feedback!</h4>
			<div className={styles.rating}>
				<span>Rate this product </span>
				<div>
					{[...Array(5)].map((_, index) => {
						index += 1;
						return (
							<button
								type='button'
								key={index}
								className={`${
									index <= (hover || rating) ? styles.starOn : styles.starOff
								}`}
								onClick={() => setRating(index)}
								onMouseEnter={() => setHover(index)}
								onMouseLeave={() => setHover(rating)}
							>
								<span className='star'>&#9733;</span>
							</button>
						);
					})}
				</div>
			</div>
			<form className={styles.commentsForm}>
				<label htmlFor='title'>Title</label>
				<input
					type='text'
					name='title'
					className={styles.commentTitle}
					onChange={handleChange}
				/>
				<label htmlFor='user'>Your Name</label>
				<input type='text' name='user' onChange={handleChange} />
				<label htmlFor='message'>Tell Us More</label>
				<textarea name='message' rows={3} onChange={handleChange} />
				<Button
					className='addToCartBtn'
					onClick={(e) => createComment(e, data)}
				>
					<span className={styles.submit}>Submit</span>
				</Button>
			</form>
		</section>
	);
}
