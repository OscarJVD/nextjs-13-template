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
        <h1 className="text-azul_gris-100">
          Select Sistema de Diseño | POC con librería react-select
        </h1>
      </div>

      <div className="w-[343px] relative">
        <CustomSelect
          options={options}
          placeholder=" "
          customComponents={{
            Control: (props: any) => <Control {...props} label="Mi Label" />,
          }}
        />
      </div>
    </div>
  );
}
