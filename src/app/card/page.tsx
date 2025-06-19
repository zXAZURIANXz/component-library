
import styles from './page.module.css';
import CardComponent from "../components/CardComponent/CardComponent";

export default function CardPage() {
  return (
    <div className="h-screen flex flex-col">
			<div className="h-1/2 flex flex-wrap items-center justify-center content-center space-y-4">
				<CardComponent >
					<p> contenido de la tarjeta</p>
				</CardComponent>
			</div>
			<div className={`${styles['component-doc__content']} h-1/2 bg-gray-200 overflow-y-auto flex flex-col`}>				
				<h1 className="text-black text-4xl">Card Component</h1>
				<p className="mb-4 text-gray-700">
					<code>CardComponent</code> El CardComponent es un componente de presentación reutilizable diseñado para encapsular y mostrar contenido de forma organizada y visualmente destacada.
				</p>
				<ul className="list-disc list-inside mb-6 text-gray-700">
					<li><strong>image</strong>: imagen para el card</li>
					<li><strong>borderStyle</strong>: estilo de borde</li>
					<li><strong>borderColor</strong>:color de borde</li>
					<li><strong>children</strong>: contenido de la tarjeta</li>
					<li><strong>borderRadius</strong>: especifica el radio de curvatura de las esquinas del componente, permitiendo ajustar su apariencia para adaptarse a distintos estilos de diseño. </li>
				</ul>
				<h3 className="text-xl font-semibold mb-2">Ejemplo de uso:</h3>
				<pre className="bg-gray-900 text-green-200 p-4 rounded-md font-mono text-sm overflow-x-auto">
					<code>{`<CardComponent image='asset.png' borderStyle='solid' boderColor='red' borderRadius='25px  >`}</code>
				</pre>
			</div>
		</div>
  );
}
