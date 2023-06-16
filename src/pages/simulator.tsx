import CustomSelect, { Control } from '@/modules/shared/Select/CustomSelect';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function simulator() {
  return (
    <div className="p-4">
      <div>
        <h1 className="text-azul_gris-100">POC react-select</h1>
      </div>

      {/* <div className="my-4">
        <h2 className="pb-4">Select react-select ejemplo 1</h2>
        <Select options={options} components={{ Control }} placeholder="" />
      </div> */}

      <h2 className="mb-2">Select Sistema de Diseño</h2>
      <div className="w-[343px] relative">
        <CustomSelect
          options={options}
          placeholder="Mi Placeholder"
          customComponents={{
            Control: (props: any) => <Control {...props} label="Mi Label oo" />,
          }}
        />
        {/* <label className="absolute pointer-events-none top-[-7px] left-[10px] text-xs text-gray-700 bg-white px-1">
          Nombre
        </label> */}
      </div>
    </div>
  );
}
