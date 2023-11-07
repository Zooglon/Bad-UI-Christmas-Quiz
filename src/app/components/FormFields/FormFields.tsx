import { ReactElement } from "react";
import { Button } from "../Button/Button";

type FieldInput = {
  input: {
    id: string;
    title: string;
    instruction: string;
    task: ReactElement;
  };
};

const fieldsArray = [
  {
    id: "FIELD-001-TEXT",
    title: "Test field",
    instruction: "Test field instructions: complete this task to progress",
    task: (
      <div>
        <p>I am the task</p>
      </div>
    ),
  },
  {
    id: "FIELD-002-NUM",
    title: "Test field 2",
    instruction: "Test field instructions: complete this task to progress",
    task: (
      <div>
        <p>I am also the task</p>
      </div>
    ),
  },
  {
    id: "FIELD-003-DATE",
    title: "Test field 3",
    instruction: "Test field instructions: complete this task to progress",
    task: (
      <div>
        <p>I am sill the task</p>
      </div>
    ),
  },
];

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
        <div>
          <h2>{input.title}</h2>
          <h4>{input.instruction}</h4>
        </div>
        <div>{input.task}</div>
        <Button onClick={() => handleClick(input.id)}>Submit</Button>
      </div>
    );
  };

  return <Field input={fieldsArray[field]} />;
};
