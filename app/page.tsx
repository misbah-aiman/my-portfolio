import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white text-center px-4">
      <Head>
        <title>Misbah Aiman</title>
      </Head>

      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/background.jpeg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="blur-sm opacity-60"
        />
      </div>

      {/* Profile Image */}
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
        <Image src="/profile.png" alt="Misbah Aiman" width={250} height={250} />
      </div>

      {/* Name & Title */}
      <h1 className="text-4xl font-bold">MISBAH AIMAN</h1>
      <p className="text-green-400 text-sm mt-2 uppercase">Programmer • Graphic Designer</p>
    </div>
  );
}
