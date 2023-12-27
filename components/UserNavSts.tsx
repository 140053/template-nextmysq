"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";


const USerLogSts = () => {
    const { data: session } = useSession();


    return (
        <>
            {!session ? (
                <div>
                    <Button size="sm" variant="outline">
                        <Link className="text-black" href="/sign-in">Login</Link>
                    </Button>
                    
                </div> 
               
            ) : (
                <div className="flex">
                    <p>Welcome, {session.user ? session.user.name : 'Guest'}! </p>
                    <Button
                     size="sm" 
                     variant="outline"
                     onClick={() => signOut() }
                     >Sign Out
                    </Button>
                </div>
                
            )}

        </>
    )

}


export default USerLogSts;