import React, { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ModalView } from "../../../atoms/authModalAtom";
import { auth, functions } from "../../../firebase/clientApp";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FIREBASE_ERRORS } from "../../../firebase/errors";
import InputItem from "../../Layout/InputItem";
import axios from "axios";
import { httpsCallable, app } from "../../../firebase/clientApp";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import getUserRole from "@/custom/getUserRole";

type SignUpProps = {
  toggleView: (view: ModalView) => void;
};

const SignUp: React.FC<SignUpProps> = ({ toggleView }) => {

  const [signInWithEmailAndPassword, _, loading, authError] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "18wheeler", // Replace with the desired role for the user
  });
  const [formError, setFormError] = useState("");


  const onSubmit = async (event: any) => {
    event.preventDefault();
    console.log(form);
    if (formError) setFormError("");
    if (!form.email.includes("@")) {
      return setFormError("Please enter a valid email");
    }

    if (form.password !== form.confirmPassword) {
      return setFormError("Passwords do not match");
    }

    try {
      // Call the Firebase Cloud Function for user registration
      const createUserWithRole = httpsCallable(functions, "createUserAndAddUserRole"); // Use the `httpsCallable` function from `functions`

      const response: any = await createUserWithRole({
        email: form.email,
        password: form.password,
        role: form.role,
      });
      console.log("responser", response);

      // If user Sign Up is succcessful, Log user in with credentials in state.
      if (response?.data?.status && response?.data.status === 200) {


        const loginResponse = await signInWithEmailAndPassword(form.email, form.password);

        if (loginResponse) {
          console.log("Login Response", loginResponse);
          console.log("user role:", await getUserRole(loginResponse.user))
        }
        else {
          console.log("Error Somewhere");
        }
      }

    } catch (error) {
      // Handle any errors that occur during registration
      console.error("Error registering user:", error);
      setFormError("Error registering user. Please try again.");
    }
  };

  const onChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <InputItem
        name="email"
        placeholder="email"
        type="text"
        mb={2}
        onChange={onChange}
      />
      <InputItem
        name="password"
        placeholder="password"
        type="password"
        mb={2}
        onChange={onChange}
      />
      <InputItem
        name="confirmPassword"
        placeholder="confirm password"
        type="password"
        onChange={onChange}
      />
      <Text textAlign="center" mt={2} fontSize="10pt" color="red">

      </Text>
      <Button
        width="100%"
        height="36px"
        mb={2}
        mt={2}
        type="submit"
      // isLoading={loading}
      >
        Sign Up
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Have an account?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() => toggleView("login")}
        >
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;
