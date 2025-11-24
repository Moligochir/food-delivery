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

  const [isValid, setIsValid] = useState(true);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
  const passWordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9\s]).{8,}$/;


  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setInputUsernameValue(newEmail);
    
    setIsValid(emailRegex.test(newEmail));
  };
const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      
    } 
  };

  // const UserLogin = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:8000/users/login`, {
  //       method: "POST",
  //       headers: {
  //         accept: "application/json",
  //         "content-type": "application/json",
  //         Authorization: "Bearer ",
  //       },
  //       body: JSON.stringify({
  //         email: inputUsernameValue,
  //         password: inputPasswordValue,
  //       }),
  //     });

  //     const jsonData = await response.json();
  //     console.log(jsonData, "hariu bainuu");
  //     localStorage.setItem("jsonData", token);
  //     router.push("/");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="w-full h-full flex gap-12 pl-50 justify-between items-center">
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
                />{!isValid && <p className="text-xs" style={{ color: 'red' }}>Invalid email. Use a format like example@email.com</p>}
              </div>
              
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button onClick={handleSubmit} type="submit" className="w-full">
            Let's Go
          </Button>
          <Link href={`/login`}><Button variant="outline" className="w-full text-[#2563EB]">
            <p className="text-[#71717A]">Already have an account?</p> Log in 
          </Button>
          </Link>
        </CardFooter>
      </Card>
      {isValid &&<Card className="w-full max-w-sm ">
        <CardHeader>
          <Button variant="outline" size="icon" aria-label="Submit">
            <ChevronLeftIcon />
          </Button>
          <CardTitle>Log in </CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction></CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-4">
              <div className="grid gap-2">
                
                <Input
                  onChange={""}
                  placeholder="Password"
                  id="password"
                  type="password"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center"></div>
                <Input
                  onChange={""}
                  placeholder="Password"
                  id="password"
                  type="password"
                  required
                />
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button onClick={""} type="submit" className="w-full">
            Login
          </Button >
          <Button variant="outline" className="w-full text-[#2563EB]">
            <p className="text-[#71717A]">Don’t have an account?</p> Sign up
          </Button>
          
        </CardFooter>
      </Card>}

      <div className="w-full h-full p-5">
        <img src="/Login.png" />
      </div>
    </div>
  );
};
