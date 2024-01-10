import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LoginCheck() {
    const router = useRouter();
    const { data: session } = useSession();

    if (!session) {
        router.push("/")
    }
    return true
}