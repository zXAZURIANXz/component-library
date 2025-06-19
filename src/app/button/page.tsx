
import styles from './page.module.css';
import { ButtonComponent } from "../components/ButtonComponent/ButtonComponent";

export default function ButtonPage() {
  return (
		<div className="h-screen flex flex-col">
			<div className="h-1/2 flex flex-wrap items-center justify-center content-center space-y-4">
				<ButtonComponent text='Button Primary'   type='primary'   state='default' />
				<ButtonComponent text='Button Secondary' type='secondary' state='default' />
				<ButtonComponent text='Button Danger'    type='danger'    state='default' />
			</div>
			<div className={`${styles['component-doc__content']} h-1/2 bg-gray-200 overflow-y-auto flex flex-col`}>
				<h1 className="text-black text-4xl">Button Component</h1>
				<p className="mb-4 text-gray-700">
					<code>ButtonComponent</code> es un botón reutilizable con variantes de estilo y estado. Puedes personalizarlo usando las siguientes props:
				</p>
				<ul className="list-disc list-inside mb-6 text-gray-700">
					<li><strong>text</strong>: <code>string</code> – El texto que se mostrará en el botón.</li>
					<li><strong>type</strong>: <code>'primary' | 'secondary' | 'danger'</code> – Define el color del botón.</li>
					<li><strong>state</strong>: <code>'default'</code> – Estado visual del botón (extensible).</li>
				</ul>
				<h3 className="text-xl font-semibold mb-2">Ejemplos:</h3>
				<pre className="bg-gray-900 text-green-200 p-4 rounded-md font-mono text-sm overflow-x-auto">
					<code>{`<ButtonComponent text="Button Primary" type="primary" state="default" />`}</code>
				</pre>
			</div>
		</div>
  );
}
