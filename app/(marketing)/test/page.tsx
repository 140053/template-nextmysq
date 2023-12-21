import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const TestPage = async () => {
  // Use the Prisma Client to retrieve all records from the "auser" table
  const allAusers = await prisma.auser.findMany();

  // Log the retrieved records to the console (for testing purposes)
  //console.log(allAusers);

  return (
    <div className="flex items-center justify-center flex-col">
      <h1>Test Page</h1>
      {/* You can use the 'allAusers' array to render the data in your component */}
      {allAusers.map((auser) => (
        <div key={auser.id}>{
          /* Render individual auser data here */ 
          auser.username
          }</div>
      ))}
    </div>
  );
};

export default TestPage;
