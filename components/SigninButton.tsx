"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";



const SigninButton = () => {
  const { data: session } = useSession();



  if (session && session.user) {
    //console.log("User logged in:", session.user);
    const avatar = session.user.image

    return (
      <div className="flex gap-4 ml-auto">
        <p className="">{session.user.name}</p>
        
        <Avatar>
          <AvatarImage src={avatar ?? undefined} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>


        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <Button onClick={() => signIn()} variant="outline" className="w-full mt-3 text-black">
      Sign In with Google
    </Button>
  );
};

export default SigninButton;
