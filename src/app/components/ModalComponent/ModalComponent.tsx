
type Props = {
  isOpen: boolean;
	size: 'small' | 'medium' | 'large';
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, children, size='large' }: Props) => {
  if (!isOpen) return null;

	const sizeMap = {
  				small		: 'min-h-60',
  				medium	: 'min-h-90',
  				large		: 'min-h-120',
				};
	const modalHeight = sizeMap[size] || sizeMap.medium;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div  data-testid="modal-content" className={`bg-white p-6 rounded-md shadow-lg w-full max-w-md ${modalHeight}`} >
        {children}
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Cerrar
        </button>
      </div>
    </div>
  );
};
