// Homepage.js

import prisma from '@/prisma/prisma'; // Adjust the import path accordingly

const Homepage = async () => {
  try {
    // Use the Prisma Client to retrieve all records from the "auser" table
    const allAusers = await prisma.auser.findMany();

    // Log the retrieved records to the console (for testing purposes)
    // console.log(allAusers);

    return (
      <div className="flex items-center justify-center flex-col">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <h1>Test Page</h1>
            {/* You can use the 'allAusers' array to render the data in your component */}
            {allAusers.map((auser) => (
              <div key={auser.id}>
                {/* Render individual auser data here */}
                {auser.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } finally {
    // No need to disconnect here since the prisma instance is shared
  }
};

export default Homepage;
