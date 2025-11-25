"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const SignUp = () => {
  const [inputUsernameValue, setInputUsernameValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");
  const [inputConfirmPasswordValue, setInputConfirmPasswordValue] =
    useState("");

  const [isValid, setIsValid] = useState(true);
  const [step, setStep] = useState(false);
  const [isValidPass, setIsValidPass] = useState(true);
  const [isValidConfirmPass, setIsValidConfirmPass] = useState(true);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
  const passWordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9\s]).{8,}$/;

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setInputUsernameValue(newEmail);

    setIsValid(emailRegex.test(newEmail));
  };
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setInputPasswordValue(newPassword);
    console.log("1", passWordRegex.test(newPassword), newPassword);

    if (!passWordRegex.test(newPassword)) return setIsValidPass(false);

    setIsValidPass(true);
  };
  const handleConfirmPasswordChange = (event) => {
    const confirmPassword = event.target.value;
    setInputConfirmPasswordValue(confirmPassword);
    if (inputPasswordValue !== inputConfirmPasswordValue)
      console.log("2", inputConfirmPasswordValue, confirmPassword);

    return setIsValidConfirmPass(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setStep(true);
  };
  const handlePreviousButton = () => {
    setStep(false);
  };

  const CreateUser = async () => {
    try {
      await fetch(`http://localhost:8000/users`, {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: "Bearer ",
        },
        body: JSON.stringify({
          email: inputUsernameValue,
          password: inputPasswordValue,
        }),
      });
    } catch (err) {}
  };

  return (
    <div className="w-full h-full flex gap-12 pl-50 justify-between items-center">
      {!step && (
        <Card className="w-full max-w-sm ">
          <CardHeader>
            <Button variant="outline" size="icon" aria-label="Submit">
              <ChevronLeftIcon />
            </Button>
            <CardTitle>Create your account</CardTitle>
            <CardDescription>
              Sign up to explore your favorite dishes.
            </CardDescription>
            <CardAction></CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <Input
                    onChange={handleEmailChange}
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                  {!isValid && (
                    <p className="text-xs" style={{ color: "red" }}>
                      Invalid email. Use a format like example@email.com
                    </p>
                  )}
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              disabled={!isValid}
              onClick={handleSubmit}
              type="submit"
              className="w-full"
            >
              Let's Go
            </Button>
            <Link href={`/login`}>
              <Button variant="outline" className="w-full text-[#2563EB]">
                <p className="text-[#71717A]">Already have an account?</p> Log
                in
              </Button>
            </Link>
          </CardFooter>
        </Card>
      )}
      {step && (
        <Card className="w-full max-w-sm ">
          <CardHeader>
            <Button
              onClick={handlePreviousButton}
              variant="outline"
              size="icon"
              aria-label="Submit"
            >
              <ChevronLeftIcon />
            </Button>
            <CardTitle>Create a strong password</CardTitle>
            <CardDescription>
              Create a strong password with letters, numbers.
            </CardDescription>
            <CardAction></CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <Input
                    onChange={handlePasswordChange}
                    placeholder="Password"
                    id="password"
                    type="password"
                    required
                  />
                  {!isValidPass && (
                    <p className="text-xs" style={{ color: "red" }}>
                      Weak password. Use numbers and symbols.
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center"></div>
                  <Input
                    onChange={handleConfirmPasswordChange}
                    placeholder="Password"
                    id="password"
                    type="password"
                    required
                  />
                  {!isValidConfirmPass && (
                    <p className="text-xs" style={{ color: "red" }}>
                      Those password did’t match, Try again
                    </p>
                  )}
                  {/* <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a> */}
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              disabled={isValidConfirmPass}
              onClick={""}
              type="submit"
              className="w-full"
            >
              Let's Go
            </Button>
            <Button variant="outline" className="w-full text-[#2563EB]">
              <p className="text-[#71717A]">Don’t have an account?</p> Sign up
            </Button>
          </CardFooter>
        </Card>
      )}

      <div className="w-full h-full p-5">
        <img src="/Login.png" />
      </div>
    </div>
  );
};
