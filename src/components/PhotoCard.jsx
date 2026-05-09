import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const PhotoCard = ({ photo }) => {
  return (
    <Card className="border">
      <div className="relative w-full aspect-square">
        <Image
          className="rounded-xl object-cover"
          fill
          src={photo?.imageUrl}
          alt={photo?.title}
          sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
          // height={200}
          // width={200}
        />
        <Chip className="absolute right-2 top-2">{photo?.category}</Chip>
      </div>
      <div>
        <h2 className="font-medium">{photo?.title}</h2>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <p>
            <FcLike />
          </p>
          {photo?.likes}
        </div>
        <div className="flex gap-2 items-center">
          <p>
            <FaFileDownload />
          </p>
          {photo?.downloads}
        </div>
      </div>

      <Link href={`/all-photos/${photo.id}`}>
        <Button variant="outline" className={"w-full"}>
          View
        </Button>
      </Link>
    </Card>
  );
};

export default PhotoCard;
