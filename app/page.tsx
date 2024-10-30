import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <section className="flex flex-col md:flex-row items-center bg-black p-6 md:p-8 rounded-lg shadow-lg max-w-md md:max-w-3xl">
        <header className="overflow-hidden" style={{ marginLeft: "-50px" }}>
          <Image
            src="/image/img1.jpeg"
            alt="Next.js logo"
            width={300}
            height={100}
            className="rounded-lg"
          />
        </header>
        <header className="pl-6">
          <h1 className="text-white text-2xl font-bold">Jess Wilson</h1>
          <h3 className="text-gray-400 pt-2 text-lg">UX Engineer</h3>
          <p className="text-gray-500 pt-2 text-sm max-w-xs mx-auto md:mx-0">
            Empowering users through captivating interfaces, turning ideas into pixel-perfect realities.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start mt-4">
            <button className="bg-black text-white px-8 py-1 rounded-2xl border border-white">
              Profile
            </button>
            <button className="bg-white text-black px-8 py-1 border rounded-2xl">
              Follow
            </button>
          </div>
        </header>
      </section>
    </main>
  );
}




