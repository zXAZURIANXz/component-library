
import styles from './ButtonComponent.module.css'

type Props = {
	text?  : string;
  type?  : 'primary' | 'secondary' | 'danger';
  state? : string;
  icon?  : boolean;
};

export const ButtonComponent = ({ text='Press me', type = 'primary', state = 'default', icon = false }: Props) => {

	const buttonClass = `${styles.button_component} ${styles[type]}`;
	
	return (
		<button className={buttonClass} > {text}</button>	
	)
}
