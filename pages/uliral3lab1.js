import { useEffect } from "react";

export default function Home() {
  const handleNavigation = (id) => {
    const element = document.getElementById(slugify(id));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-full font-sans text-gray-800 bg-white">
      {}
      <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 sm:px-6">
          <img
            className="h-10 sm:h-12"
            src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
            alt="Toki Logo"
          />
          <nav className="hidden md:flex space-x-6 text-sm sm:text-base font-medium">
            {["Үйлчилгээ", "Давуу тал", "Мэдээ", "Хамтран ажиллах"].map((item, index) => (
              <p
                key={index}
                className="cursor-pointer hover:text-yellow-500 transition"
                onClick={() => handleNavigation(item)}
              >
                {item}
              </p>
            ))}
          </nav>
        </div>
      </header>

      {}
      <section
        id="үйлчилгээ"
        className="min-h-screen flex flex-col justify-center items-center bg-yellow-100 pt-32 text-center px-4"
      >
        <p className="text-gray-700 text-2xl sm:text-4xl font-semibold max-w-2xl sm:max-w-3xl leading-snug">
          ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭГ <span className="text-yellow-500">НЭГ ДОРООС</span>...
        </p>
        <img
          className="mt-10 w-full max-w-xs sm:max-w-md md:max-w-xl"
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-1-2.png"
          alt="Hero"
        />
        <div className="flex mt-6 space-x-4">
          <img className="h-10 sm:h-12" src="https://www.toki.mn/wp-content/uploads/2021/01/apple.png" alt="Apple Store" />
          <img className="h-10 sm:h-12" src="https://www.toki.mn/wp-content/uploads/2021/01/android.png" alt="Google Play" />
        </div>
      </section>

      {}
      {[
        {
          title: "Toki Service",
          desc: "Та такси дуудах, кофе, хоол захиалах, нэгж дата авах, хэрэглээний төлбөрүүдээ төлөх, тоглоом тоглох, цэнэглэх гэх мэт өдөр бүрд хэрэгтэй үйлчилгээнүүдээ нэг дороос хялбар, хурдан авах боломжтой.",
          image: "https://www.toki.mn/wp-content/uploads/2020/06/Artboard-2.png",
          reverse: false,
        },
        {
          title: "Toki Pay",
          desc: "Toki Pay нь таны бодит хэтэвчийг цахимжуулсан цоо шинэ дижитал хэтэвч юм. Бүх банкны картаа холбож төлбөрөө төлөөд, лояалти карт болон бичиг баримтуудаа нэг дор хадгалаарай.",
          image: "https://www.toki.mn/wp-content/uploads/2020/06/Artboard-3.png",
          reverse: true,
        },
        {
          title: "Toki Shop",
          desc: "Та өөрийн хүссэн бараагаа албан ёсны дэлгүүрүүдээс сонголт хийж, нэг дороос шууд захиалах боломжтой.",
          image: "https://www.toki.mn/wp-content/uploads/2020/06/Artboard-4.png",
          reverse: false,
        },
      ].map((item, idx) => (
        <section
          key={idx}
          className={`flex flex-col ${
            item.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center max-w-7xl mx-auto py-16 px-4 sm:px-6`}
        >
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img className="w-4/5 max-w-xs sm:max-w-md md:max-w-lg" src={item.image} alt={item.title} />
          </div>
          <div className="w-full md:w-1/2 md:px-10 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl text-yellow-500 font-bold mb-4">{item.title}</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">{item.desc}</p>
          </div>
        </section>
      ))}

      {}
      <section
        id="давуу-тал"
        className="text-center px-4 mt-20 max-w-4xl mx-auto"
      >
        <h2 className="text-yellow-500 text-2xl sm:text-3xl font-bold mb-4">
          Toki апп өдөр бүр танд тусална
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Toki апп бол хүн бүрийн өдөр тутамд хэрэгтэй бүх үйлчилгээг нэг дор багтаасан таны цаг хугацааг хэмнэх хялбар, хэрэгтэй аппликейшн юм.
        </p>
      </section>

      {}
      <div className="w-full mt-28 h-40 bg-yellow-100 flex justify-center items-center">
        <button
          onClick={() => handleNavigation("Давуу тал")}
          className="rounded-full text-white bg-yellow-400 p-3 px-10 sm:px-16 text-base sm:text-lg font-semibold hover:bg-yellow-500 transition"
        >
          Давуу тал
        </button>
      </div>

      {}
      <footer
        id="хамтран-ажиллах"
        className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 mt-20"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0">
          <img
            className="h-8 sm:h-10"
            src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
            alt="Footer Logo"
          />
          <div className="space-y-2 text-sm">
            <p>Түгээмэл асуултууд</p>
            <p>Сүхбаатар дүүрэг, 8-р хороо, Central tower, 8-р давхар</p>
            <p>77074477, 4477 nfo@toki.mn</p>
            <p>© 2022 | Toki.mn</p>
          </div>
          <div className="text-sm">Нууцлал</div>
        </div>
      </footer>
    </div>
  );
}
