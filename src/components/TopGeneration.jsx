import PhotoCard from "./PhotoCard";

const TopGeneration = async () => {
  const photos = await fetch("https://conceptual18.vercel.app/data.json").then(
    (res) => res.json(),
  );
  const topPhotos = photos.slice(0, 8);
  console.log(topPhotos);
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold">Top Generation</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default TopGeneration;
