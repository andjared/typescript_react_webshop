import React from 'react';
import Button from '../button/button';
import styles from './quantityHandler.module.scss';

type QuantityHandlerProps = {
	quantity: string;
	increaseQuantity: (arg: number) => void;
	decreaseQuantity: (arg: number) => void;
};

const QuantityHandler = ({
	quantity,
	increaseQuantity,
	decreaseQuantity,
}: QuantityHandlerProps) => {
	return (
		<div className={styles.quantityHandler}>
			<Button className='quantityHandlerBtn' onClick={decreaseQuantity}>
				-
			</Button>
			<input placeholder={quantity} className={styles.quantityHandlerInput} />
			<Button className='quantityHandlerBtn' onClick={increaseQuantity}>
				+
			</Button>
		</div>
	);
};

export default QuantityHandler;
