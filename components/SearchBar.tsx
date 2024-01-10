"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import Link from "next/link";

const SearchBar = () => {
    const [keyword, setKeyword] = useState("");
    const [metadata , setmetadata] = useState([])

    const handleSearch = async (keyword: any) => {
        const submitData = { "name": "John", "age": 30, "car": null, "keywords": keyword };

        try {
            const result = await fetch("http://localhost:3000/api/thesis", {
                method: "POST",
                body: JSON.stringify(submitData),
                headers: {
                    "content-type": "application/json",
                },
            });


            if (result.ok) {
                const responseData = await result.json();
                console.log(responseData);
                setmetadata(responseData)

                // Access specific properties from the response
                //const { title, author, abstract } = responseData;
                //console.log("Title:", title);
                //console.log("Author:", author);
                //console.log("Abstract:", abstract);
                //console.log(result);
            } else {
                console.log("Oops! Something is wrong.");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="flex items-center mb-4">
                <Input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                <Button size="default" variant="default" onClick={() => handleSearch(keyword)}>
                    Search
                </Button>
            </div>
          
        </>
    );
};

export default SearchBar;
