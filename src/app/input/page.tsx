
import styles from './page.module.css';
import { InputComponent } from "../components/InputComponent/InputComponent";

export default function InputPage() {
  return (
		<div className="h-screen flex flex-col">
			<div className="h-1/2 flex flex-wrap items-center justify-center content-center space-y-4">
				<InputComponent	type='text'	state='default' />
				<InputComponent	type='mail'	state='success' />
				<InputComponent	type='password'	state='error' />
			</div>
			<div className={`${styles['component-doc__content']} h-1/2 bg-gray-200 overflow-y-auto flex flex-col`}>
				<h1 className="text-black text-4xl">Input Component</h1>
				<p className="mb-4 text-gray-700">
					<code>InputComponent</code> es un Input reutilizable con variantes de estilo y estado. Puedes personalizarlo usando las siguientes props:
				</p>
				<ul className="list-disc list-inside mb-6 text-gray-700">
					<li><strong>type</strong>: <code>string</code> – El tipo de input, text,mail,password</li>
					<li><strong>state</strong>: <code>'default' | 'error' | 'success'</code> – Define el color del estado el input.</li>
					<li><strong>placeholder</strong>: <code>'default'</code> – Texto del placeholder</li>
					<li><strong>label</strong>: <code>''Example label''</code> – Texto del label</li>
					<li><strong>disabled</strong>: – Activa o desactiva el campo de texto</li>
				</ul>
				<h3 className="text-xl font-semibold mb-2">Ejemplos:</h3>
				<pre className="bg-gray-900 text-green-200 p-4 rounded-md font-mono text-sm overflow-x-auto">
					<code>{`<input className={inputClass} type={type} placeholder={placeholder} disabled={disabled} />`}</code>
				</pre>
			</div>
		</div>
  );
}
