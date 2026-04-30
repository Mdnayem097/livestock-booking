import Image from "next/image";

export default async function AnimalDetailsPage({ params }) {
  
  // 🟢 FIX: params await করতে হবে
  const { id } = await params;

  const res = await fetch(
    "https://livestock-booking.vercel.app/animals-data.json",
    { cache: "no-store" }
  );

  const data = await res.json();

  const animal = data.find(
    (item) => String(item.id) === String(id)
  );

  if (!animal) {
    return (
      <div className="text-center mt-10 text-red-500">
        Animal not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-5">

      {/* Image */}
      <div className="relative w-full h-[300px]">
        <Image
          src={animal.image}
          alt={animal.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Info */}
      <h1 className="text-3xl font-bold mt-5">
        {animal.name}
      </h1>

      <p className="text-green-600 text-xl font-semibold mt-2">
        ৳{animal.price}
      </p>

      <p><b>Type:</b> {animal.type}</p>
      <p><b>Breed:</b> {animal.breed}</p>
      <p><b>Location:</b> {animal.location}</p>
      <p><b>Weight:</b> {animal.weight} KG</p>

      <p className="mt-4 text-gray-600">
        {animal.description}
      </p>

    </div>
  );
}