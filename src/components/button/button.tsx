import React from 'react';
import styles from './button.module.scss';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className: string;
    children: string | React.ReactNode;
}

function Button({ className, children, ...atributes }: Props) {
    return (
        <button className={styles[className]} {...atributes}>
            {children}
        </button>
    );
}

export default Button;
