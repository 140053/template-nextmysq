"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs";
import { PrismaClient } from '@prisma/client';
import { useState } from 'react';

const prisma = new PrismaClient();


const LoginPage = () => {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async () => {
    // Fetch user from the database using Prisma
    try {
      const user = await prisma.auser.findUnique({
        where: {
          username: "admin@local.a"
        },
      });
      
      console.log(user)

      
    } finally {
      await prisma.$disconnect;
    }
  };



  return (
    <div className="container flex text-center justify-center">
      <div className="border border-solid shadow ">
        <Tabs defaultValue="account" className="w-[700px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account" >Login</TabsTrigger>
            <TabsTrigger value="password">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>
                  Login your Credentials. if you haven't yet have your credentials contact the librarian.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" value={username}  onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleLogin} >Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button >Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>


  )

}

export default LoginPage;
