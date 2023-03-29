import React from 'react';
import Button from '../button/button';
import styles from './quantityHandler.module.scss';

export type Props = {
	quantity: string;
	increaseQuantity: (arg: number) => void;
	decreaseQuantity: (arg: number) => void;
};

function QuantityHandler({
	quantity,
	increaseQuantity,
	decreaseQuantity,
}: Props) {
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
}

export default QuantityHandler;
