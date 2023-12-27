// components/GoogleImage.tsx
import { FC } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface GoogleImageProps {
  imgsrc: string | StaticImport;
}

const GoogleImage: FC<GoogleImageProps> = ({ imgsrc }) => {
  return (
    <div>
      <Image
        src={imgsrc}
        alt="Google Image"
        width={96}
        height={96}
      />
    </div>
  );
};

export default GoogleImage;
