import PhotoCard from "@/components/PhotoCard";
import React from "react";

const AllPhotos = async () => {
  const photos = await fetch("https://conceptual18.vercel.app/data.json").then(
    (res) => res.json(),
  );
  console.log(photos)
  return (
    <div>
      <h2 className="text-2xl font-bold m-4">All Photos</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            photos.map(photo => <PhotoCard key={photo?.id} photo={photo} />)
        }
      </div>
    </div>
  );
};

export default AllPhotos;
