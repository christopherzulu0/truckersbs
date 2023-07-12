import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import AuthModal from "../../Modal/Auth";
import { useRouter } from "next/router";

type AuthButtonsProps = {};

const AuthButtons: React.FC<AuthButtonsProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const router = useRouter();

  return (
    <>
      <Button
        variant="outline"
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        // onClick={() => setAuthModalState({ open: true, view: "login" })}
        onClick={() => router.push("/auth/login")}
      >
        Log In
      </Button>
      <Button
        variant="solid"
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        // onClick={() => setAuthModalState({ open: true, view: "signup" })}
        onClick={() => router.push("/auth/signup")}
      >
        Sign Up
      </Button>
    </>
  );
};
export default AuthButtons;
