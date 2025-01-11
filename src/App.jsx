import React, { useState, useEffect } from "react";
import {
  Users,
  Zap,
  Shield,
  ChevronDown,
  ChevronUp,
  Star,
  Brain,
  Clock,
  Lightbulb,
  Lock,
  CreditCard,
  CheckCircle2,
  XCircle,
  ScrollText,
  MessageCircle,
} from "lucide-react";

// Import komponen dari file terpisah
import LoadingAnimation from './components/LoadingAnimation';
import TypingText from './components/TypingText';

// Constant ditambahkan di sini
const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/HhqMyeOD5OrJZepVq0DcMf";
const TELEGRAM_CHANNEL_LINK = "https://t.me/rameansite";

const App = () => {
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Define all data constants here
  const mainMenu = [
    { title: "Kenapa Pakai AI? 🤔", href: "#why-ai" },
    { title: "Kenapa Pilih Claude AI? 🌟", href: "#why-claude" },
    { title: "Harga 💸", href: "#pricing" },
    { title: "FAQ ❓", href: "#faq" },
  ];

  const whyAiReasons = [
    {
      icon: <Clock className="w-12 h-12 text-white" />,
      title: "Menyelesaikan Pekerjaan Lebih Cepat",
      description:
        "AI membuat tugas yang rumit jadi lebih sederhana dan efisien.",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-white" />,
      title: "Wawasan Baru",
      description:
        "Bukan cuma bantu kerjaan, AI juga memberikan ide-ide segar yang belum terpikirkan sebelumnya.",
    },
    {
      icon: <Users className="w-12 h-12 text-white" />,
      title: "Solusi yang Menguntungkan Semua Pihak",
      description:
        "Bersama lebih nyaman, produktivitas meningkat, semua senang!",
    },
  ];

  const claudeAdvantages = [
    "5x Lebih Canggih dibandingkan AI lainnya",
    "Konsisten memberikan jawaban berkualitas di berbagai topik",
    "Mampu menjawab pertanyaan kompleks dengan akurasi tinggi",
    "Mengingat konteks percakapan lebih lama",
  ];

  const versions = {
    free: [
      { feature: "Akses dasar ke Claude AI", available: true },
      { feature: "Penggunaan terbatas", available: false },
      { feature: "Tidak ada fitur canggih", available: false },
    ],
    pro: [
      {
        feature: "Akses ke model Claude 3.5 Sonnet & Claude 3 Opus",
        available: true,
      },
      {
        feature: "Fitur Projects Knowledge untuk upload file & dokumen",
        available: true,
      },
      { feature: "Prioritas akses saat traffic tinggi", available: true },
    ],
  };

  const testimonials = [
    {
      name: "Ahmad R.",
      role: "Content Creator",
      content:
        "Claude AI mempercepat pekerjaan saya 3x lipat! Sangat bermanfaat!",
    },
    {
      name: "Sarah K.",
      role: "Mahasiswa",
      content:
        "Pekerjaan jadi lebih mudah dan efisien, terima kasih Claude AI!",
    },
    {
      name: "Budi W.",
      role: "Digital Marketer",
      content:
        "Bisnis saya jadi lebih produktif. AI ini benar-benar game changer.",
    },
  ];

  const faqs = [
    {
      question: "Apa itu Claude AI?",
      answer:
        "Claude AI adalah AI generasi baru dengan kemampuan pemrosesan bahasa alami yang unggul.",
    },
    {
      question: "Apakah Claude AI gratis?",
      answer:
        "Ada versi gratis dengan fitur terbatas, tapi versi premium memberikan akses penuh.",
    },
    {
      question: "Bagaimana cara berlangganan?",
      answer: "Kamu bisa mendaftar melalui Ramean untuk hemat biaya.",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>

      {isLoading && <LoadingAnimation />}

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        {/* Navbar */}
        <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <ul className="flex justify-center space-x-8">
              {mainMenu.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-blue-900 hover:text-blue-600 transition duration-300"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 pt-32 pb-24 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-16 h-16 bg-white/10 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${5 + i}s infinite ease-in-out`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-bold mb-6 text-white animate-fade-in drop-shadow-md">
              🎉 Cara Mudah Akses Claude AI Premium Tanpa Kantong Jebol! 💰
            </h1>
            <p
              className="text-2xl mb-4 text-white/90 drop-shadow animate-fade-in opacity-0"
              style={{ animationDelay: "2s" }}
            >
              ✨ Pengen akses Claude AI Premium, tapi harga resmi bikin ragu?
              Tenang, RAMEAN punya solusi patungan hemat yang bikin fitur premium jadi terjangkau tanpa ribet!
            </p>
            <p
              className="text-xl mb-8 text-white/80 animate-fade-in opacity-0"
              style={{ animationDelay: "2.5s" }}
            >
              "Daripada bingung sendiri, mending manfaatkan AI!"
            </p>
            <button
              onClick={() => window.open(WHATSAPP_GROUP_LINK, "_blank")}
              className="animate-bounce bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 px-8 py-4 rounded-lg text-xl font-bold hover:from-yellow-300 hover:to-yellow-200 transform hover:scale-105 transition duration-300 shadow-xl hover:shadow-2xl"
            >
              Akses Sekarang 🔥
            </button>
            <div className="mt-12 text-white/90 animate-pulse">
              Scroll ke bawah untuk tahu lebih banyak 👇👇👇
            </div>
          </div>
        </div>

        {/* Why AI Section */}
        <section id="why-ai" className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900 drop-shadow-sm animate-fade-in">
              Kenapa Harus Pakai AI? 🛠️
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyAiReasons.map((reason, index) => (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-b from-white to-blue-50/50 rounded-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition duration-300 border border-blue-100/50 animate-fade-in opacity-0"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-3 rounded-lg shadow-md transform hover:rotate-6 transition duration-300">
                      {reason.icon}
                    </div>
                    <h3 className="text-xl font-bold mt-4 mb-2 text-blue-900">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Claude AI Section */}
        <section
          id="why-claude"
          className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900 drop-shadow-sm">
              Kenapa Pilih Claude AI? 💡
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100/50">
                <p className="text-xl text-blue-900 mb-8 text-center font-medium">
                  Dari berbagai pilihan AI, hanya <strong>Claude AI</strong>{" "}
                  yang memiliki performa unggul:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {claudeAdvantages.map((advantage, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 animate-fade-in opacity-0"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="bg-blue-500 rounded-full p-2 flex-shrink-0 transform hover:rotate-12 transition duration-300">
                        {index === 0 && <Zap className="w-6 h-6 text-white" />}
                        {index === 1 && <Star className="w-6 h-6 text-white" />}
                        {index === 2 && (
                          <Brain className="w-6 h-6 text-white" />
                        )}
                        {index === 3 && (
                          <MessageCircle className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <p className="text-gray-700">
                        <strong className="text-blue-900 block mb-1">
                          {advantage.split(" ")[0]}{" "}
                          {/* Tampilkan kata pertama sebagai highlight */}
                        </strong>
                        {advantage.substring(advantage.indexOf(" ") + 1)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Additional Feature Highlight */}
                <div
                  className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white animate-fade-in opacity-0"
                  style={{ animationDelay: "0.8s" }}
                >
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0">
                      <h3 className="text-2xl font-bold mb-2">
                        Tingkatkan Produktivitas!
                      </h3>
                      <p className="text-blue-100">
                        Claude AI membantu Anda bekerja lebih cepat dan efisien
                        dengan teknologi AI terdepan
                      </p>
                    </div>
                    <button 
                      onClick={() => window.open(WHATSAPP_GROUP_LINK, '_blank')}
                      className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl">
                      Mulai Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Version Comparison Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
              Versi Gratis vs Premium 🔐
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Dengan versi Premium Claude AI Pro, tingkatkan produktivitas tanpa
              batas! 🚀
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Free Version Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Versi Gratis
                  </h3>
                  <p className="text-gray-500">Akses dasar untuk mencoba</p>
                </div>

                <div className="space-y-4">
                  {versions.free.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 rounded-lg bg-gray-50 animate-fade-in opacity-0"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {item.available ? (
                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                      )}
                      <span
                        className={
                          item.available ? "text-gray-700" : "text-gray-500"
                        }
                      >
                        {item.feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => window.open(WHATSAPP_GROUP_LINK, '_blank')}
                  className="w-full mt-8 py-3 px-6 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition duration-300">
                  Coba Gratis
                </button>
              </div>

              {/* Premium Version Card */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-300 relative">
                {/* Popular Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-blue-900 px-6 py-1 rounded-full font-bold text-sm shadow-lg">
                    REKOMENDASI
                  </div>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Versi Pro
                  </h3>
                  <p className="text-blue-100">Akses penuh ke semua fitur</p>
                </div>

                <div className="space-y-4">
                  {versions.pro.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 rounded-lg bg-blue-500/20 animate-fade-in opacity-0"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                      <span className="text-white">{item.feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => window.open(WHATSAPP_GROUP_LINK, '_blank')}
                  className="w-full mt-8 py-3 px-6 rounded-lg bg-yellow-400 text-blue-900 font-bold hover:bg-yellow-300 transition duration-300 shadow-lg hover:shadow-xl">
                  Upgrade ke Pro
                </button>
              </div>
            </div>

            {/* Additional Features Banner */}
            <div className="mt-16 max-w-5xl mx-auto bg-gradient-to-r from-blue-50 to-white rounded-xl p-8 border border-blue-100">
              <div className="text-center">
                <h4 className="text-xl font-bold text-blue-900 mb-6">
                  Keuntungan Tambahan Versi Pro ✨
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center p-4">
                    <Zap className="w-8 h-8 text-blue-500 mb-2" />
                    <p className="text-gray-700">
                      Kecepatan respons lebih cepat
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-4">
                    <ScrollText className="w-8 h-8 text-blue-500 mb-2" />
                    <p className="text-gray-700">Upload file dan dokumen</p>
                  </div>
                  <div className="flex flex-col items-center p-4">
                    <Lock className="w-8 h-8 text-blue-500 mb-2" />
                    <p className="text-gray-700">Prioritas saat jam sibuk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Affordable Access Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
              Cara Akses Claude AI Premium Lebih Hemat 💡
            </h2>

            {/* Official Price Card */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Harga Resmi Claude AI
                  </h3>
                  <div className="flex justify-center items-baseline space-x-2">
                    <span className="text-4xl font-bold text-blue-600">
                      $20
                    </span>
                    <span className="text-gray-500">/bulan</span>
                  </div>
                  <p className="text-red-500 mt-2">
                    (belum termasuk pajak dan kurs)
                  </p>
                </div>

                {/* Challenges */}
                <div className="bg-red-50 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-red-700 mb-4">
                    Kendala: ❌
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3 text-red-600">
                      <XCircle className="w-5 h-5 flex-shrink-0" />
                      <span>Harus bayar dengan kartu kredit internasional</span>
                    </li>
                    <li className="flex items-center space-x-3 text-red-600">
                      <XCircle className="w-5 h-5 flex-shrink-0" />
                      <span>Biaya naik karena kurs</span>
                    </li>
                    <li className="flex items-center space-x-3 text-red-600">
                      <XCircle className="w-5 h-5 flex-shrink-0" />
                      <span>Proses pembayaran rumit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ramean Solution */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg border border-blue-100">
                <div className="text-center mb-8">
                  <div className="inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-bold text-lg mb-6">
                    🎉 Solusi Hemat dengan Ramean!
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    Lebih Terjangkau, Lebih Mudah
                  </h3>
                </div>

                {/* Benefits */}
                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-semibold text-blue-900 mb-4">
                    Keuntungan: ✅
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-blue-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>Bayar pakai Rupiah 💵</span>
                      </div>
                      <div className="flex items-center space-x-3 text-blue-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>Biaya transparan</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-blue-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>Hemat hingga 80%</span>
                      </div>
                      <div className="flex items-center space-x-3 text-blue-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>Pembayaran mudah</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Savings Calculator Banner */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-4">
                      Hemat Biaya Hingga
                    </h4>
                    <div className="text-5xl font-bold text-yellow-400 mb-4">
                      80%
                    </div>
                    <p className="text-blue-100 mb-6">
                      dari harga resmi Claude AI Premium
                    </p>
                    <button 
                      onClick={() => window.open(WHATSAPP_GROUP_LINK, '_blank')}
                      className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl">
                      Lihat Pilihan Paket
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscription Plans Section */}
        <section id="pricing" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
              Pilihan Langganan di Ramean 🛒
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan Anda
            </p>

            {/* Pricing Cards Container */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Sharing Account */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-blue-100">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    Akun Sharing
                  </h3>
                  <div className="flex justify-center items-baseline space-x-2 mb-4">
                    <span className="text-4xl font-bold text-blue-600">
                      Rp95.000
                    </span>
                    <span className="text-gray-500">/bulan</span>
                  </div>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-4 py-1 rounded-full">
                    Paling Populer 🔥
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div
                    className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg animate-fade-in opacity-0"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">
                      Berbagi akun dengan 4-6 pengguna lainnya
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg animate-fade-in opacity-0"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">
                      Akses penuh ke semua fitur premium
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg animate-fade-in opacity-0"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <CreditCard className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Pembayaran mudah</span>
                  </div>
                  <div
                    className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg animate-fade-in opacity-0"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <Zap className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">
                      Hemat hingga 80% dari harga resmi
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => window.open(WHATSAPP_GROUP_LINK, '_blank')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Pilih Paket Sharing
                </button>
              </div>

              {/* Private Account */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-300 text-white">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Akun Private</h3>
                  <div className="flex justify-center items-baseline space-x-2 mb-4">
                    <span className="text-4xl font-bold">Rp370.000</span>
                    <span className="text-blue-200">/bulan</span>
                  </div>
                  <span className="inline-block bg-yellow-400 text-blue-900 text-sm px-4 py-1 rounded-full font-semibold">
                    Premium 👑
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div
                    className="flex items-center space-x-3 p-3 bg-blue-500/20 rounded-lg animate-fade-in opacity-0"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <Lock className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-white">
                      Akun khusus untuk pribadi
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-3 p-3 bg-blue-500/20 rounded-lg animate-fade-in opacity-0"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-white">
                      Semua fitur premium tanpa berbagi
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-3 p-3 bg-blue-500/20 rounded-lg animate-fade-in opacity-0"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-white">
                      Maksimal fleksibilitas penggunaan
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-3 p-3 bg-blue-500/20 rounded-lg animate-fade-in opacity-0"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-white">Support prioritas 24/7</span>
                  </div>
                </div>

                <button 
                  onClick={() => window.open(WHATSAPP_GROUP_LINK, '_blank')}
                  className="w-full bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-bold hover:bg-yellow-300 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Pilih Paket Private
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-16 max-w-3xl mx-auto text-center">
              <h4 className="text-xl font-bold text-blue-900 mb-6">
                Semua Paket Termasuk ✨
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-4">
                  <Shield className="w-8 h-8 text-blue-500 mb-2" />
                  <p className="text-gray-700">Garansi Uang Kembali</p>
                </div>
                <div className="flex flex-col items-center p-4">
                  <MessageCircle className="w-8 h-8 text-blue-500 mb-2" />
                  <p className="text-gray-700">Support via WhatsApp</p>
                </div>
                <div className="flex flex-col items-center p-4">
                  <Users className="w-8 h-8 text-blue-500 mb-2" />
                  <p className="text-gray-700">Komunitas Pengguna</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
              Apa Kata Pengguna? 💬
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Dengarkan pengalaman langsung dari pengguna Claude AI melalui
              Ramean
            </p>

            {/* Testimonial Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-blue-100/50 animate-fade-in opacity-0"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Rating Stars */}
                  <div className="flex items-center mb-6 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg
                      className="w-10 h-10 text-blue-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-gray-600 mb-6 text-lg">
                    {testimonial.content}
                  </p>

                  {/* User Info */}
                  <div className="flex items-center">
                    {/* Avatar Circle with Initials */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold text-lg mr-4">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-2 right-8 transform rotate-45 w-16 h-16 bg-blue-50 rounded-lg -z-10 opacity-50" />
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 text-center">
              <div className="inline-block bg-blue-100 rounded-full px-6 py-2 text-blue-800">
                <span className="font-semibold">100+ Pengguna Aktif</span> sudah
                bergabung dengan Ramean
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-gray-600">
                <div>
                  <div className="text-3xl font-bold text-blue-600">95%</div>
                  <p>Kepuasan Pengguna</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <p>Support Aktif</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">80%</div>
                  <p>Lebih Hemat</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <button 
                onClick={() => window.open(WHATSAPP_GROUP_LINK, '_blank')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:from-blue-700 hover:to-blue-800 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Gabung Sekarang
              </button>
            </div>
          </div>
        </section>

        {/* Other Products Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
              Produk Lainnya di Ramean 🌐
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Tingkatkan produktivitas Anda dengan akses ke berbagai AI tools
              premium
            </p>

            {/* Product Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* ChatGPT Plus Card */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-green-100 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    ChatGPT Plus
                  </h3>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Akses ke GPT-4.0</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">
                      Browsing internet langsung
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">
                      Analisis gambar dan data
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => window.open(WHATSAPP_GROUP_LINK, '_blank')}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Lihat Detail
                </button>
              </div>

              {/* Perplexity Pro Card */}
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-purple-100 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                    <ScrollText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Perplexity Pro
                  </h3>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">
                      AI riset dengan sumber terpercaya
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">
                      Analisis dokumen mendalam
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">
                      Akses ke model AI terbaru
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => window.open(WHATSAPP_GROUP_LINK, '_blank')}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Lihat Detail
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-16 max-w-3xl mx-auto bg-blue-50 rounded-2xl p-8 text-center">
              <h4 className="text-xl font-bold text-blue-900 mb-4">
                Hemat Lebih Banyak! 💰
              </h4>
              <p className="text-gray-600 mb-6">
                Dapatkan diskon khusus saat berlangganan multiple produk AI
                premium melalui Ramean
              </p>
              <button 
                onClick={() => window.open(WHATSAPP_GROUP_LINK, '_blank')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Lihat Paket Bundle
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
              FAQ 📋
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Pertanyaan yang sering ditanyakan seputar Claude AI dan layanan
              Ramean
            </p>

            {/* FAQ Accordion */}
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="mb-4 animate-fade-in opacity-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <button
                    className="w-full text-left p-6 bg-white rounded-xl flex justify-between items-center hover:shadow-md transition duration-300 border border-blue-100"
                    onClick={() =>
                      setSelectedFaq(selectedFaq === index ? null : index)
                    }
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 font-semibold">
                          {index + 1}
                        </span>
                      </div>
                      <span className="font-medium text-gray-900">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`transform transition-transform duration-300 ${selectedFaq === index ? "rotate-180" : ""}`}
                    >
                      <ChevronDown className="w-5 h-5 text-blue-600" />
                    </div>
                  </button>

                  {/* Answer Panel */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${selectedFaq === index ? "max-h-96 mt-2" : "max-h-0"}`}
                  >
                    <div className="p-6 bg-blue-50 rounded-xl">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Questions Banner */}
            <div className="mt-12 max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg border border-blue-100 text-center">
              <h4 className="text-xl font-bold text-blue-900 mb-4">
                Masih Ada Pertanyaan? 🤔
              </h4>
              <p className="text-gray-600 mb-6">
                Jangan ragu untuk menghubungi tim support kami yang siap
                membantu 24/7
              </p>
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={() => window.open(WHATSAPP_GROUP_LINK, '_blank')}
                  className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 shadow-lg hover:shadow-xl">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Chat WhatsApp</span>
                </button>
                <button 
                  onClick={() => window.open(TELEGRAM_CHANNEL_LINK, '_blank')}
                  className="flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-lg hover:shadow-xl">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.484.34 1.192.388c.354.024.82-.044 1.22-.337.403-.294.67-.767.795-1.307.374-1.63 2.853-13.427 3.276-15.38l-.012.046c.296-1.1.187-2.108-.496-2.705-.342-.297-.736-.427-1.13-.444z" />
                  </svg>
                  <span>Telegram</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Join Group CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              {/* Main CTA Content */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Gabung Grup untuk Info Lebih Lanjut! 🚀
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Dapatkan update terbaru, tips penggunaan, dan promo spesial
                  langsung di grup komunitas kami
                </p>

                {/* Social Media Buttons */}
                <div className="grid md:grid-cols-2 gap-4 max-w-xl mx-auto">
                  {/* WhatsApp Button */}
                  <button 
                    onClick={() => window.open(WHATSAPP_GROUP_LINK, '_blank')}
                    className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl font-bold transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                    <svg
                      className="w-6 h-6 group-hover:animate-bounce"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>Grup WhatsApp</span>
                  </button>

                  {/* Telegram Button */}
                  <button 
                    onClick={() => window.open(TELEGRAM_CHANNEL_LINK, '_blank')}
                    className="flex items-center justify-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-xl font-bold transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                    <svg
                      className="w-6 h-6 group-hover:animate-bounce"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.484.34 1.192.388c.354.024.82-.044 1.22-.337.403-.294.67-.767.795-1.307.374-1.63 2.853-13.427 3.276-15.38l-.012.046c.296-1.1.187-2.108-.496-2.705-.342-.297-.736-.427-1.13-.444z" />
                    </svg>
                    <span>Channel Telegram</span>
                  </button>
                </div>

                {/* Benefits List */}
                <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-blue-900" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Update Terbaru
                      </h4>
                      <p className="text-blue-100 text-sm">
                        Info fitur dan pembaruan Claude AI
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-blue-900" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Diskusi Seru
                      </h4>
                      <p className="text-blue-100 text-sm">
                        Sharing tips dan trik sesama pengguna
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-blue-900" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Promo Eksklusif
                      </h4>
                      <p className="text-blue-100 text-sm">
                        Penawaran khusus member grup
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Member Counter */}
              <div className="mt-8 inline-block bg-white/10 backdrop-blur px-6 py-2 rounded-full">
                <p className="text-white">
                  <span className="font-bold">100+</span> member telah bergabung
                  dalam komunitas kami
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Remaining sections will continue here */}
      </div>
    </>
  );
};

export default App;
