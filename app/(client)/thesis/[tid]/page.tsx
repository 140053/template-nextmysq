"use client"

import ThesisFetcher from '@/components/ThesisFetcher';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const Thesis = ({ params }: { params: { tid: string } }) => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push('/sign-in');
    return null;
  }

  return (
    <div className="container flex text-center justify-center">
      <ThesisFetcher tid={params.tid} />
    </div>
  );
};

export default Thesis;
