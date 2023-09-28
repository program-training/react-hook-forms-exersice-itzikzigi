import { FieldError } from "react-hook-form";
import { UserInterface } from "./RegularForm";
import { FC } from "react";
import { ErrorMessage } from "@hookform/error-message";

export type InputProps = {
  label: keyof UserInterface;
  validations: Record<string, unknown>;
  error: FieldError | undefined;
};

const Input: FC<InputProps> = ({ label, validations, error }) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input
        type="text"
        placeholder={"Enter " + label}
        {...validations}
        aria-invalid={error ? "true" : "false"}
      />
      {/* {error && (
        <ErrorMessage
          name={label}
          errors={error}
          render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
        />
      )} */}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </div>
  );
};
export default Input;
