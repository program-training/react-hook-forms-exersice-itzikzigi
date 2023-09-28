import { useForm, SubmitHandler } from "react-hook-form";
import Input from "./Input";
import { emailRegex, passwordRegex } from "../utils/regex";
import { ErrorMessage } from "@hookform/error-message";

export interface UserInterface {
  username: string;
  email: string;
  password: string;
}

function RegularForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserInterface>({ mode: "onChange", criteriaMode: "all" });

  const onSubmit: SubmitHandler<UserInterface> = (data, e) => {
    e?.defaultPrevented;
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Change Me To React Hook Form</h1>

      <Input
        error={errors.username}
        label="username"
        validations={register("username", {
          required: "Username is required",
          minLength: { value: 2, message: "UserName to short" },
        })}
      />

      <Input
        label="email"
        error={errors.email}
        validations={register("email", {
          required: "Email is required",
          pattern: { value: emailRegex, message: "Email not valid" },
        })}
      />
      <Input
        label="password"
        error={errors.password}
        validations={register("password", {
          pattern: { value: passwordRegex, message: "password not valid" },
          required: "Password is required",
        })}
      />
      <br />
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}

export default RegularForm;
