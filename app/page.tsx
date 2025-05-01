import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image (Blurred) */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/background.jpeg"
          alt="Background"
          fill
          quality={100}
          className="object-cover blur-sm opacity-60"
        />
      </div>

      {/* Content (Not Blurred) */}
      <div className="min-h-screen flex flex-col items-center justify-center text-white font-sans">
        <Head>
          <title>Misbah Aiman</title>
        </Head>

        {/* Profile Image */}
        <div className="rounded-full overflow-hidden w-40 h-40 border-4 border-white shadow-lg mb-4">
          <Image 
            src="/profile.png" 
            alt="Misbah Aiman" 
            width={250} 
            height={250} 
          />
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl font-bold tracking-wide">MISBAH AIMAN</h1>
        <p className="text-green-400 text-sm mt-2 uppercase tracking-wider">Programmer • Graphic Designer</p>
          
        <div className="flex items-center justify-center px-4">
          <p className="text-white text-justify max-w-md mt-6">
            Passionate about code and creativity, I am a Computer Science student with a flair for clean design and logical thinking. I love turning ideas into digital experiences — blending programming and visual storytelling.
          </p>
        </div>
      </div>
    </div>
  );
}