"use client";

import Loading from "@/components/loading";
import { authorize } from "@/lib/authorize";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginLayout({ children }) {
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
      <title>ورود</title>
      <main>{children}</main>
    </>
  );
}
