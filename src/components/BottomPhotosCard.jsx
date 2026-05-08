import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import { FaFileDownload } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const BottomPhotosCard = ({ photos }) => {
  return (
    <div>
      <Card className="border">
        <div className="relative w-full aspect-square">
          <Image
            className="rounded-xl object-cover"
            fill
            src={photos?.imageUrl}
            alt={photos?.title}
            sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
          />
          <Chip className="absolute right-2 top-2">{photos?.category}</Chip>
        </div>
        <div>
          <h2 className="font-medium">{photos?.title}</h2>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <p>
              <FcLike />
            </p>
            <p>{photos?.likes}</p>
          </div>
          <div className="flex gap-2 item-center">
            <p>
              <FaFileDownload />
            </p>
            <p>{photos?.downloads}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BottomPhotosCard;
