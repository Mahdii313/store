"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authorize } from "@/lib/authorize";
import Loading from "@/components/loading";

export default function Dashboard() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(true);
  useEffect(() => {
    (async () => {
      const auth = await authorize();

      if (!auth) {
        router.push("/login");
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
  return <div className="flex justify-center pt-10 text-9xl">داشبورد</div>;
}
