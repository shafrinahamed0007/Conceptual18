import PhotoCard from "@/components/PhotoCard";
import React from "react";

const AllPhotosPage = async () => {
  const photos = await fetch("https://conceptual18.vercel.app/data.json").then(
    (res) => res.json(),
  );
  return <div>
    <h1 className="text-2xl font-bold m-4">All Photos</h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {
            photos.map(photo => <PhotoCard key={photo.id} photo={photo} />)
        }

    </div>
  </div>;
};

export default AllPhotosPage;
