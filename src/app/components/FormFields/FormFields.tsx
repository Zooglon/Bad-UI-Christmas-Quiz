import { ReactElement, useState } from "react";
import { Button } from "../Button/Button";
import { fieldsArray, FormFieldsData } from "./FormFieldsData";
import "./FormFields.scss";

type FieldInput = {
  input: {
    id: string;
    component: ReactElement;
  };
};

export const FormFields = ({
  field,
  setCanContinue,
}: {
  field: number;
  setCanContinue: (arg: boolean) => void;
}) => {
  const handleClick = (id: string) => {
    // Check is correct (?)
    // Submit form answer details,
    // Progress page
    console.log(`Form: ${id} completed`);
    setCanContinue(true);
  };

  const Field = ({ input }: FieldInput) => {
    return (
      <div className="formContainer">
        <FormFieldsData field={field} />
        <Button onClick={() => handleClick(input.id)}>Submit</Button>
      </div>
    );
  };

  return <Field input={fieldsArray[field]} />;
};
