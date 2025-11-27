"use client";

import { FoodCard } from "@/_components/FoodCard";
import { Footer } from "@/_components/Footer";
import { Header } from "@/_components/Header";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (!token) router.push("/login");
    }
  }, []);
  return (
    <>
      <Header />

      <Footer />
    </>
  );
}
