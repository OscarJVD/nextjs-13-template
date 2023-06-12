import { ArrowDownSvg } from '@/modules/shared/icons/arrow-down';
import clsx from 'clsx';
import Select, { components, DropdownIndicatorProps } from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <ArrowDownSvg width={16} height={16} color="#496374" />
    </components.DropdownIndicator>
  );
};

export default function simulator() {
  const controlStyles = {
    base: 'border-azul_gris-50 rounded-md',
    focus: 'border-primary-300 rounded-md',
    nonFocus: 'border-azul_gris-50 rounded-md',
  };

  return (
    <div className="p-4">
      <div>
        <h1 className="text-azul_gris-100">POC react-select</h1>
      </div>

      <div className="my-4">
        <h2>Select react-select sin personalizar</h2>
        <Select options={options} />
      </div>

      <h2>Select Sistema de Diseño</h2>
      <div className="w-[343px]">
        <Select
          styles={{
            placeholder: (base) => ({
              ...base,
              color: 'text-azul_gris-100',
            }),
            control: (base) => ({
              ...base,
              borderColor: 'border-azul_gris-100',
              borderRadius: 'rounded-md',
              transition: 'none',
            }),
            indicatorSeparator: (base) => ({
              ...base,
              display: 'none',
            }),
          }}
          options={options}
          classNames={{
            placeholder: () =>
              'text-azul_gris-100 font-montserrat font-normal text-sm',
            control: ({ isFocused }) =>
              clsx(
                isFocused ? controlStyles.focus : controlStyles.nonFocus,
                controlStyles.base
              ),
          }}
          components={{ DropdownIndicator }}
        />
      </div>
    </div>
  );
}
