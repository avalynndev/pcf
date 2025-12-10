"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PostModal from "@/components/post-modal";
import { Button } from "@/components/ui/button";

export default function ProjectHub() {
  const params = useParams();
  const router = useRouter();
  const { secret } = params as Record<string, string>;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (
      secret &&
      secret !==
        "1807e1a05adef7bb59bcb9dc2b9ce7aa81b00a13d343299a2c4a59bc023a54ff"
    ) {
      router.push("/404");
    }
  }, [secret, router]);

  return (
    <div className="flex items-center justify-center h-screen px-4">
      <div className="text-center space-y-6 bg-secondary p-10 rounded-2xl shadow-xl">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="mt-2">
            Welcome! You can add a new project using the button below.
          </p>
        </div>
        <Button onClick={() => setIsOpen(true)}>Add Project</Button>
        <PostModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
}
