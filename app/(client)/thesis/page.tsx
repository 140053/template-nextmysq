import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";

const Thesis = () => {
    return (
        <div className="container flex text-center justify-center">
            <Tabs defaultValue="main" className="w-full" >
                <TabsList className="grid w-full grid-cols-1">
                    <TabsTrigger value="main" >Account</TabsTrigger>
                </TabsList>
                <TabsContent value="main">
                    <Card>
                        <CardHeader>
                            <CardTitle>Account</CardTitle>
                            <CardDescription>
                                Make changes to your account here. Click save when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">

                            
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full bg-green-900 text-white hover:bg-yellow-500">Full Text</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}


export default Thesis;