import styles from './Button.module.scss'
import { MouseEventHandler } from 'react'

interface ButtonProps {
	children: string
	onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ children, onClick }: ButtonProps) => (
	<button className={styles.button} onClick={onClick}>
		{children}
	</button>
)
