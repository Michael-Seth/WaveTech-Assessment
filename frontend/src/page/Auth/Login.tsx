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
  const { loading } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { handleSubmit, control } = useForm<LoginDto>({
    defaultValues: loginDefaultvalue,
  });

  const onSubmit = async (value: LoginDto) => {
    console.log(value);
    navigate("/app/dashboard");

    dispatch(login(value))
      .then((res) => {
        console.log(res);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <div className=" bg-primaryLight  h-screen w-screen flex items-center justify-center flex-col gap-8">
      <AppLogo />
      <form className="bg-white mx-auto py-8 px-4 w-2/6 rounded-md ">
        <h5 className="text-black text-2xl text-center">Log In</h5>
        <p className="mb-7 text-sm text-darkGray">
          Enter your credentials to access your account
        </p>

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
