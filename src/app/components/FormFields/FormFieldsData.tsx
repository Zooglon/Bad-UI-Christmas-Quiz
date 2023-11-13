import { FieldOne, FieldTwo, FieldThree, FieldFour } from "./Fields";

export const FormFieldsData = ({ field }: { field: number }) => {
  return fieldsArray[field].component;
};

export const fieldsArray = [
  {
    id: "FIELD-001",
    component: <FieldOne />,
  },
  {
    id: "FIELD-002",
    component: <FieldTwo />,
  },
  {
    id: "FIELD-003",
    component: <FieldThree />,
  },
  {
    id: "FIELD-004",
    component: <FieldFour />,
  },
];
