import React, { useState } from 'react';
import styles from './commentsForm.module.scss';
import Button from '../button/button';

interface Props {
	id: number;
}

export default function CommentsForm({ id }: Props) {
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

	const postComment = async (id: number, data: Comments) => {
		await fetch(`http://localhost:3000/api/products/${id}/comments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
	};

	const createComment = async (
		e: React.MouseEvent,
		id: number,
		data: Comments
	) => {
		e.preventDefault();
		data.rating = rating;

		await postComment(id, data);
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
								<span>&#9733;</span>
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
					className='btnFillToRight'
					onClick={(e) => createComment(e, id, data)}
				>
					<span className={styles.submit}>Submit</span>
				</Button>
			</form>
		</section>
	);
}
