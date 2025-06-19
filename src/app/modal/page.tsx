
'use client';

import styles from './page.module.css';
import { useState } from 'react';
import { Modal } from '../components/ModalComponent/ModalComponent';

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
		<div className="h-screen flex flex-col">
				<div className="h-1/2 flex flex-wrap items-center justify-center content-center space-y-4">
					<div className="h-screen flex flex-col items-center justify-center">
						<button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600" >
							Abrir modal
						</button>
						<Modal size='large' isOpen={isOpen} onClose={() => setIsOpen(false)}>
							<h2 className="text-xl font-bold">Este es un modal</h2>
							<p className="mt-2">Aquí puedes poner contenido personalizado.</p>
						</Modal>
					</div>
				</div>
				<div className={`${styles['component-doc__content']} h-1/2 bg-gray-200 overflow-y-auto flex flex-col`}>
					<h1 className="text-black text-4xl">Modal Component</h1>
					<p className="mb-4 text-gray-700">
						<code>ModalComponent</code> es un Modal reutilizable con variantes de estilo y estado. Puedes personalizarlo usando las siguientes props:
					</p>
					<ul className="list-disc list-inside mb-6 text-gray-700">
						<li><strong>size</strong>: <code>string</code> – Tamaño de modal small | medium | large  </li>
						<li><strong>childetn</strong>: – Define el contenido del modal</li>
					</ul>
					<h3 className="text-xl font-semibold mb-2">Ejemplos:</h3>		
					<pre className="bg-gray-900 text-green-200 p-4 rounded-md font-mono text-sm overflow-x-auto">
						<code>{`<Modal size='large' isOpen={isOpen} onClose={() => setIsOpen(false)}>`}</code>
					</pre>
				</div>
		</div>
  );
}
