import { ChangeEvent } from "react";
import {
  Controller,
  Control,
  FieldErrorsImpl,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import TextInput, { ITextInputProps } from "./TextInput";
import { onNumberValidator } from "../../../constants/utils/utils";

type OmitTextField = Omit<ITextInputProps, "name" | "error" | "onChange"> & {
  subText?: string;
  isNumber?: boolean;
};

export interface IControllTextInput<TFieldValues extends FieldValues>
  extends OmitTextField {
  errors?: Partial<FieldErrorsImpl<TFieldValues>>;
  control: Control<TFieldValues, any>;
  name: Path<TFieldValues>;
  rules?: Omit<
    RegisterOptions<TFieldValues, Path<TFieldValues>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

const ControllTextInput = <TFormValue extends FieldValues>(
  props: IControllTextInput<TFormValue>
) => {
  const { name, control, label, rules, type, isNumber, ...rest } = props;

  return (
    <Controller
      control={control}
      name={name}
      // eslint-disable-next-line no-unused-vars
      render={({
        field: { ref, onChange, ...fields },
        fieldState: { error },
      }) => (
        <TextInput
          customStyles="w-full"
          label={label}
          error={error?.message}
          inputRef={ref}
          onChange={
            isNumber
              ? (e: ChangeEvent<HTMLInputElement>) => {
                  onNumberValidator(e, onChange);
                }
              : onChange
          }
          type={type}
          {...rest}
          {...fields}
        />
      )}
    />
  );
};

export default ControllTextInput;
