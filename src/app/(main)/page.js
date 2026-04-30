import Image from "next/image";
import Link from "next/link";
import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);
export default function Home() {
  return (
    <>
      <div className="relative w-10/12 h-[250px] md:h-[600px]">
        <Image
          src="/cow-banner.jpg"
          alt="cow"
          fill
          className="object-contain rounded-lg"
        />
        <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10">
          <p className="font-bold text-2xl mb-5 text-green-600">Find Your Perfect Qurbani Animal</p>
          <Link className="btn bg-green-600 text-white" href={'/'}>Browse Now</Link>
        </div>
      </div>

      <div>
        <section className="max-w-7xl mx-auto px-5 py-10">

          {/* Heading */}
          <h2 className="text-2xl font-bold mb-6">
            Featured Animals
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            <div className="border p-3 rounded-lg">
              <img src="/cow.jpg" className="rounded" />
              <h3 className="mt-2">Desi Cow</h3>
              <p className="text-green-600">৳120000</p>
            </div>

            {/* 3 more cards */}

          </div>

        </section>
      </div>
    </>
  );
}
