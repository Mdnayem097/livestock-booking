import Image from "next/image";
import Link from "next/link";
import "animate.css";


export default async function Home() {
  const animalsData = await fetch('https://livestock-booking-jojr.vercel.app/animals-data.json')
  const data = await animalsData.json()

  return (
    <>
    <div className="flex justify-center items-center">
      <div className="relative w-10/12 h-[250px] md:h-[600px]">
        <Image
          src="/cow-banner-removebg-preview.png"
          alt="cow"
          fill
          className="object-contain object-center rounded-lg"
        />
        <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10">
          <p className="hidden md:block font-bold text-2xl mb-5 text-green-600 animate__animated animate__fadeIn">Find Your Perfect Qurbani Animal</p>
          <Link className="btn bg-green-600 text-white " href={'/'}>Browse Now</Link>
        </div>
      </div>
      </div>

      <div>
        <section className="max-w-7xl mx-auto px-5 py-10">
          <h2 className="text-2xl font-bold mb-6">
            Featured Animals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[...data]
              .sort((a, b) => a.price - b.price)
              .map((animal) => (

                <Link key={animal.id} href={`/animals/${animal.id}`}>

                  <div className="border border-green-600 rounded-lg p-3 hover:shadow-lg transition cursor-pointer">

                    <div className="relative w-full h-[180px]">
                      <Image
                        src={animal.image}
                        alt={animal.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <h3 className="mt-2 font-semibold">
                      {animal.name}
                    </h3>
                    <p className="text-green-600 font-medium">
                      ৳{animal.price}
                    </p>
                    <p className="text-sm text-gray-500">
                      {animal.location}
                    </p>

                  </div>

                </Link>

              ))}

          </div>
        </section>

        <section className=" py-10 px-5 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-6">Tips For Buying Sacrificial Animals</h2>
            <ul className="space-y-3">
              <li>✔ Animal healthy কিনা check করুন</li>
              <li>✔ বয়স কমপক্ষে নির্দিষ্ট হতে হবে</li>
              <li>✔ চোখ, দাঁত, চলাফেরা ঠিক আছে কিনা দেখুন</li>
              <li>✔ trusted seller থেকে কিনুন</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Post-Qurbani Guidelines</h2>
            <ul className="space-y-3">
              <li>✔ পরিষ্কার জায়গায় মাংস কাটুন</li>
              <li>✔ রক্ত ও বর্জ্য মাটির নিচে পুঁতে ফেলুন</li>
              <li>✔ কোরবানির পর মাংস ভালোভাবে পানি দিয়ে ধুয়ে নিতে হবে</li>
              <li>✔ আত্মীয়, প্রতিবেশী ও দরিদ্র মানুষের মাঝে মাংস ভাগ করে দিন</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
