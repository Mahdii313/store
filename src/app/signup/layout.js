"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authorize } from "@/lib/authorize";
import Loading from "@/components/loading";

export default function SignupLayout({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(true);
  useEffect(() => {
    (async () => {
      const auth = await authorize();

      if (auth) {
        router.push("/dashboard");
      } else {
        setAuthorized(false);
      }
    })();
  }, []);

  if (authorized) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loading />;
      </div>
    );
  }
  return (
    <>
      <title>ثبت نام</title>
      <main>{children}</main>
    </>
  );
}
