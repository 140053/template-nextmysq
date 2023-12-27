"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";



const Thesis = ({ params }: { params: { tid: string } }) => {
  const { data: session } = useSession();
  const router = useRouter();
    if (!session) {
      redirect("/sign-in");
      return;
    }

  useEffect(() => {
    const fetchThesis = async () => {
      
      try {
        const response = await fetch(`/api/thesis/${params.tid}`, {
          method: "POST",
          body
        });
        if (response.ok) {
          const thesisData = await response.json();
          console.log(thesisData);
        } else {
          console.error('Failed to fetch thesis data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchThesis();
  }, [session, params.tid]);


  
  return (
    <div className="container flex text-center justify-center">
      <Tabs defaultValue="main" className="w-full">
        <TabsList className="grid w-full grid-cols-1">
          <TabsTrigger value="main">Account { params.tid}</TabsTrigger>
        </TabsList>
        <TabsContent value="main">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you&apos;re done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {/* Add your Input, Label, or other components here */}
              <div className="space-y-1">
                <Label htmlFor="example">Example</Label>
                <Input id="example" type="text" />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className='w-full bg-green-900 text-white hover:bg-yellow-500'
              >
                Full Text
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Thesis;
