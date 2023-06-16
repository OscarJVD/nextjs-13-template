import { ArrowDownSvg } from '@/modules/shared/icons/arrow-down';
import clsx from 'clsx';
import Select, {
  components,
  ControlProps,
  DropdownIndicatorProps,
  StylesConfig,
} from 'react-select';

interface CustomSelectProps {
  placeholder?: string;
  options: any[]; // Reemplaza "any[]" con el tipo adecuado para tus opciones
  customStyles?: StylesConfig;
  customClassnames?: {
    placeholder?: () => string;
    control?: (props: ControlProps & { label?: string }) => string;
  };
  customComponents?: {};
}

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <ArrowDownSvg width={16} height={16} color="#496374" />
    </components.DropdownIndicator>
  );
};

export const Control = (props: any) => {
  const { isFocused, hasValue, label = 'Mi label' } = props;

  const labelClassName = clsx(
    'left-2 bg-white font-montserrat text-gris-40 px-1 leading-3 pointer-events-none absolute transition ease-in-out duration-200',
    isFocused || hasValue ? 'top-[-6px] text-[10px]' : 'top-3 text-base'
  );

  return (
    <div className="relative">
      <components.Control {...props} />
      <label className={labelClassName}>{label}</label>
    </div>
  );
};

const defaultComponents = {
  DropdownIndicator,
  Control: (props: any) => <Control {...props} />,
};

const CustomSelect = ({
  placeholder = 'Filtre o seleccione...',
  options,
  customStyles,
  customClassnames,
  customComponents, // Valor por defecto como un objeto vacío
}: CustomSelectProps) => {
  const defaultControlStyles = {
    base: 'border-azul_gris-50 rounded-md',
    focus: 'border-primary-300 rounded-md',
    nonFocus: 'border-azul_gris-50 rounded-md',
  };

  const defaultStyles = {
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
    ...customStyles,
  };

  const defaultClassnames = {
    placeholder: () => 'text-azul_gris-100 font-montserrat font-normal text-sm',
    control: ({ isFocused }) =>
      clsx(
        isFocused ? defaultControlStyles.focus : defaultControlStyles.nonFocus,
        defaultControlStyles.base
      ),
    ...customClassnames,
  };

  const mergedComponents = {
    ...defaultComponents,
    ...customComponents, // Fusión de objetos con el customComponents
  };

  return (
    <Select
      placeholder={placeholder}
      styles={defaultStyles}
      options={options}
      classNames={defaultClassnames}
      components={mergedComponents}
    />
  );
};

export default CustomSelect;
