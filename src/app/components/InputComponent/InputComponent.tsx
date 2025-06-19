


import styles from './InputComponent.module.css'

type Props = {
	type?  : 'text' | 'mail' | 'password';
	state? : 'default' | 'error' | 'success';
	placeholder?  : string;
	label? : string;
	disabled? : boolean;
};

export const InputComponent = ({ type = 'password', state='default', placeholder = 'Placeholder', label = 'Example label', disabled = false}: Props) => {

	const inputClass = `${styles.input_component} ${styles[state]}`;

	return (
		<>
			<p> {label} </p>
			<input className={inputClass} type={type} placeholder={placeholder} disabled={disabled} />
		</>
	)
}
