"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import Link from "next/link";

interface Thesis {
    id: number;
    campus: string;
    embargo: string;
    title: string;
    author: string;
    kurso: string;
    abstract: string;
    // Add other properties as needed...
  }

const SearchBar = () => {
    const [keyword, setKeyword] = useState("");
    const [metadata, setMetadata] = useState<Thesis[]>([]); 

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
                setMetadata(responseData)

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
            <div className="container">
                <div className="">
                    <h1 className="">Recently Added</h1>
                    {/* You can use the 'allAusers' array to render the data in your component */}
                    <div className="ml-50">

                        {metadata.map((thesis) => (

                            <div key={thesis.id}>
                                <div className="border border-solid m-3 p-2">
                                    <Badge variant="outline">{thesis.campus} Campus</Badge>
                                    <Badge variant="outline">Embargo:  {thesis.embargo}</Badge>
                                    {/* Render individual auser data here */}

                                    <h1 className="text-blue-600">
                                        <Link href={"/theses/" + thesis?.id}>
                                            {thesis.title}
                                        </Link>
                                    </h1>
                                    <h4>
                                        Author:<u>{thesis.author}</u> Course: {thesis.kurso}
                                    </h4>
                                    <p>
                                        Abstract: {thesis.abstract && thesis.abstract.length > 200 ? `${thesis.abstract.slice(0, 100)}...` : thesis.abstract}
                                        <small className="text-blue-600"><Link href={"/theses/" + thesis?.id}>Read More..</Link></small>
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
};

export default SearchBar;
