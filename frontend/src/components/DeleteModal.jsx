import { Dialog } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const DeleteModal = ({ isOpen, closeModal, handleDelete }) => {
  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon className="h-12 w-12 text-red-500" />
            </div>
            <div>
              <Dialog.Title className="text-xl font-bold text-gray-900">
                Delete Hospital
              </Dialog.Title>
              <Dialog.Description className="mt-2 text-gray-600">
                Are you sure you want to delete this hospital? This action cannot be undone.
              </Dialog.Description>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-4">
            <button
              onClick={closeModal}
              className="px-4 py-2 text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Confirm Delete
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default DeleteModal