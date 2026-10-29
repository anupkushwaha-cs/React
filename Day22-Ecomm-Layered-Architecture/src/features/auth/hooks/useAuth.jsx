import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export const useAuth = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    console.log("Registered", data);
  };

  const loginForm = (data) => {
    console.log("Login", data);
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    registerForm,
    loginForm,
  };
};