// import BottomPhotosCard from "./BottomPhotosCard";
import PhotoCard from "./PhotoCard";

const TopGeneration = async () => {
  const photos = await fetch("https://conceptual18.vercel.app/data.json").then(
    (res) => res.json(),
  );
  const topPhotos = photos.slice(0, 8);
  // const bottomPhotos = photos.slice(9, 14);
  console.log(topPhotos);
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold">Top Generation</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        {bottomPhotos.map((photos) => (
          <BottomPhotosCard key={photos?.id} photos={photos} />
        ))}
      </div> */}
    </div>
  );
};

export default TopGeneration;
