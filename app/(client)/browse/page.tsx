"use client"
import TestApi from "@/components/TestApi";

const BrowsePage = () => {
    try{
        const data = fetch("/api/thesis", {
            method: "POST",
            body:JSON.stringify({test: "lik"})
        })
        

    }catch(e){
        console.log(e)
    }
    

    return(
        <>
            <div>
                <h1>Browse</h1>
                
            </div>
        </>
    )
}

export default BrowsePage;