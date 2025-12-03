import { useState } from 'react';

/**
 * VivianPrograms - 朗読×セルフラブ 体感ワーク・プログラムセクション
 * 活用プログラムの紹介と画像スライダー
 */
const VivianPrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState(0);

  const programs = [
    {
      title: "子どもから大人まで",
      description: "誰もが自分の感情を大切にし、心を安心させながら、人とのつながりを深め、自分らしく生きる力を育んでいきます。",
      image: "/assets/images/vivian/ws-10.jpg"
    },
    {
      title: "仲間と一緒に",
      description: "コミュニティや集まりの場で、お互いの違いを受け入れ、支え合う心が自然に育ちます。",
      image: "/assets/images/vivian/ws-12.jpg"
    },
    {
      title: "学校や学びの場で",
      description: "道徳や探究の時間に取り入れることで、自己理解・他者理解・自己肯定感、人間関係スキルが、ぐっと深まります。",
      image: "/assets/images/vivian/ws-11.jpg"
    },
    {
      title: "親子で楽しむ時間に",
      description: "朗読を通じて気持ちを分かち合い、親子の対話や心の成長をあたたかくサポートします。",
      image: "/assets/images/vivian/ws-09.jpg"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 relative inline-block px-6">
            朗読×セルフラブ 体感ワーク・プログラム
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-400 rounded-full"></div>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-pink-400 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-left">
            「声に出し、気持ちを味わいながら、弱みを"虹"に変える学びの時間」
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  selectedProgram === index
                    ? 'bg-white shadow-xl border-2 border-purple-200'
                    : 'bg-white/70 hover:bg-white hover:shadow-lg'
                }`}
                onClick={() => setSelectedProgram(index)}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
          <div className="relative">
            <img
              src={programs[selectedProgram].image}
              alt={programs[selectedProgram].title}
              className="w-full rounded-2xl shadow-xl object-cover h-96"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VivianPrograms;
