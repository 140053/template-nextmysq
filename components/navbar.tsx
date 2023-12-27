import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import USerLogSts from "./UserNavSts";
import { DropdownMenuDemo } from "./dropDemo";

export const Navbar = () => {
    return (
        <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-black text-white flex items-center">
            <div className="md-max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Logo />

                <div className="space-x-4 md:block md:w-auto flex items-center lg:justify-between w-full">
                    <Button size="sm" variant="ghost">
                        <Link href="/">Home</Link>
                    </Button>
                    <Button size="sm" variant="ghost">
                        <Link href="/browse">Browse</Link>
                    </Button>
                    <Button size="sm" variant="ghost">
                        <Link href="/about">About</Link>
                    </Button>
                </div>

                <div className="space-x-4  md:w-auto flex items-center  justify-between  ">                   
                    <DropdownMenuDemo />                      
                </div>
            </div>
        </div>
    )
}