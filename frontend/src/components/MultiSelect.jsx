import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const MultiSelect = ({ options, selected, onChange }) => {
  const [query, setQuery] = useState('')

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <Combobox as="div" value={selected} onChange={onChange} multiple>
      <div className="relative">
        <Combobox.Input
          className="w-full rounded-lg border-2 border-gray-200 bg-white py-2 pl-3 pr-10 focus:border-primary"
          displayValue={(items) => items.join(', ')}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
        </Combobox.Button>
        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg">
          {filteredOptions.map((option) => (
            <Combobox.Option
              key={option}
              value={option}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                  active ? 'bg-primary text-white' : 'text-gray-900'
                }`
              }
            >
              {({ selected }) => (
                <>
                  <span className={`block truncate ${selected ? 'font-medium' : ''}`}>
                    {option}
                  </span>
                  {selected && (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <CheckIcon className="h-5 w-5" />
                    </span>
                  )}
                </>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  )
}

export default MultiSelect