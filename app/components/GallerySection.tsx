import Image from "next/image";

const images = [
  // { src: "/match1.jpg", alt: "Live match 1" },
  // { src: "/match2.jpg", alt: "Live match 2" },
  // { src: "/match3.jpg", alt: "Live match 3" },
  { src: "/sample1.jpg", alt: "App interface" },
  { src: "/sample2.jpg", alt: "Mobile app preview" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-blue-950 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-red-400">
        Gallery
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={300}
              className="object-cover w-full h-64 md:h-72 lg:h-80 rounded-2xl transition-transform duration-500 group-hover:scale-110"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
              <p className="text-white font-semibold text-lg md:text-xl text-center px-4">
                {img.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
