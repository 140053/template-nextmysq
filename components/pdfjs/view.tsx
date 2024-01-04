import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import { useRouter } from "next/navigation"
  
  export function AlertDialogDemo() {
    const router = useRouter();
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="w-full bg-green-900 text-white hover:bg-yellow-500" variant="outline">Full Text</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-5xl">Friendly Reminder! </AlertDialogTitle>
            <AlertDialogDescription className="text-3xl">
            The author authorized the university library to upload and serve the digital copy of their work to the bona fide students. 
            Unauthorized sharing and distribution of these resources are prohibited. 
            Thank you!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => router.push("/pdf")} >Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  