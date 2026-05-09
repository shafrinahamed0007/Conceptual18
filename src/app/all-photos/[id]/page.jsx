import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import { FaFileDownload } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const PhotoDetails = async ({ params }) => {
  const { id } = await params;
  //   console.log("Params Id: ", id);
  const details = await fetch("https://conceptual18.vercel.app/data.json").then(
    (res) => res.json(),
  );

  const detail = details.find((p) => p.id == id);
  console.log(detail);

  return (
    <div>
      <Card className="border w-[50%] ">
        <div className="relative w-full">
          <Image
            className="container mx-auto "
            src={detail?.imageUrl}
            alt={detail?.title}
            height={200}
            width={200}
          />
          <Chip className="right-2 top-2 absolute">{detail?.category}</Chip>
        </div>

        <div className="flex justify-between">
          <div className="text-xl font-bold">{detail?.title}</div>
          <div>
            {detail?.createdAt
              ? new Date(detail.createdAt).toLocaleDateString("en-GB")
              : "N/A"}
          </div>
        </div>
        <div className="font-semibold">
          {detail?.prompt}
          <br />
          Model: {detail?.model}
          <br />
          Resolution: {detail?.resolution} Pixel
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <FcLike />
            {detail?.likes}
          </div>
          <div className="flex items-center gap-2">
            <FaFileDownload />
            {detail?.downloads}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PhotoDetails;
