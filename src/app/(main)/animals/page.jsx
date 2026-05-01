import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimalsPage = async () => {
  const animalsData = await fetch(
    "https://livestock-booking.vercel.app/animals-data.json",
  );
  const data = await animalsData.json();
  return (
    <>
      <div>
        <section className="max-w-7xl mx-auto px-5 py-10">
          <h2 className="text-2xl font-bold mb-6">Featured Animals</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[...data]
              .sort((a, b) => a.price - b.price)
              .map((animal) => (
                  <div key={animal.id} className="relative pointer-none border border-green-600 rounded-lg p-3 hover:shadow-lg transition cursor-pointer">
                    <div className="relative w-full h-[180px]">
                      <Image
                        src={animal.image}
                        alt={animal.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <h3 className="mt-2 font-semibold">{animal.name}</h3>
                    <p className="text-green-600 font-medium">
                      ৳{animal.price}
                    </p>
                    <p className="text-sm text-gray-500">{animal.location}</p>
                    
                <Link key={animal.id} className="absolute btn bg-green-600 text-white right-4 bottom-3" href={`/animals/${animal.id}`}>Details</Link>
                  </div>
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AnimalsPage;
