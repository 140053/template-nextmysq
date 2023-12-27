"use client"
import { Button } from "./ui/button"


const TestApi = () => {
    const fireitup = async () =>{
        const res = await fetch("/api/thesis", {
            method: "POST",
            body: JSON.stringify({status: "hello"})
        })
        console.log(res)
    }
    return (
        <>
            <Button
            size="icon"
            variant="secondary"
            onClick={fireitup}
            >
                Click
            </Button>
        </>
    )
}

export default TestApi;