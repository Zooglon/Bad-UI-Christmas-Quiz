import { FieldOne, FieldTwo, FieldThree } from "./Fields";

export const FormFieldsData = ({ field }: { field: number }) => {
  return fieldsArray[field].component;
};

export const fieldsArray = [
  {
    id: "FIELD-001-TEXT",
    component: <FieldOne />,
  },
  {
    id: "FIELD-002-NUM",
    component: <FieldTwo />,
  },
  {
    id: "FIELD-003-DATE",
    component: <FieldThree />,
  },
];
