import { useState } from "react";
import { Checkbox } from "@mui/material";
import AppLogo from "../../components/shared/custom-icons/AppLogo";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../components/shared/Button/Button";
import { useForm } from "react-hook-form";
import ControllTextInput from "../../components/shared/TextInput/ControlledTextInput";
import { LoginDto } from "../../constants/redux/auth/authTypes";
import { useAppDispatch, useAppSelector } from "../../constants/redux/hooks";
import { login } from "../../constants/redux/auth/authApi";

const loginDefaultvalue: LoginDto = {
  email: "",
  password: "",
};

const Login = () => {
  const [apiError, setApiError] = useState("");
  const { loading } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { handleSubmit, control } = useForm<LoginDto>({
    defaultValues: loginDefaultvalue,
  });

  const onSubmit = async (value: LoginDto) => {
    console.log("The value: ", value);

    dispatch(login(value))
      .then((res) => {

        if (res.payload.accessToken) {
        
          navigate("/app/dashboard");

        } else {
          setApiError(res.payload.message);
        }
        console.log(res);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <div className=" bg-primaryLight  h-screen w-screen flex items-center justify-center flex-col gap-8">
      <div className="mx-auto mt-40 mb-12">
        <AppLogo />
      </div>
      <form className="bg-white mx-auto py-8 px-4 w-2/6 rounded-md ">
        <div className="mx-auto text-center mb-8">
          <p className="font-semibold text-3xl m-2">Log In</p>
          <p className=" text-base text-[#667185]">
            Enter your credentials to access your account
          </p>
        </div>

        <ControllTextInput
          label="EMAIL ADDRESS"
          name="email"
          control={control}
        />

        <ControllTextInput
          control={control}
          label="PASSWORD"
          type="password"
          name="password"
        />
        <div className="flex items-center text-xs text-black justify-between mb-5">
          <div>
            <Checkbox />
            <span>Remember for 30 days</span>
          </div>

          <Link to="/forgotPassword" className="text-primary outline-none ">
            Forgot Password?
          </Link>
        </div>
        {apiError && <p className="text-red-500 font-semibold">{apiError}</p>}
        <CustomButton
          label="Log into Account "
          bg="bg-primary hover:bg-primary/90"
          loading={loading}
          onClick={handleSubmit(onSubmit)}
        />

        <p className="text-center mt-10 text-darkGray text-xs">
          Are you new here?{" "}
          <span>
            <Link to="/register" className="text-primary outline-none ">
              Create Account
            </Link>{" "}
          </span>
        </p>
      </form>
      <p>Powered by wavyhealth</p>
    </div>
  );
};

export default Login;
