
import styles from './CardComponent.module.css';

type CardProps = {
  image?			  : string;
  borderStyle?	: 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'none';
  borderColor?	: string;
	children			: React.ReactNode;
  borderRadius?	: string;
};

export default function CardComponent({
  image 			= 'https://tailwindcss.com/_next/static/media/responsive-3.e7467feb.png',
  borderStyle = 'solid',
  borderColor = '#ccc',
	children,
  borderRadius = '8px'
}: CardProps) {

  return (
    <div
			className={styles.card}
      style={{
        border: `${borderRadius}px ${borderStyle} ${borderColor}`,
        borderRadius,
      }}
    >
      {image && (
        <img src={image} alt="Card" className={styles.image} />
      )}

			{children}
    </div>
  );
}
