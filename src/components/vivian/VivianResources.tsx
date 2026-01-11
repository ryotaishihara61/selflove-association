/**
 * VivianResources - 資料ダウンロードセクション
 * 教育関係者向けの資料を提供
 */
const VivianResources = () => {
  const resources = [
    {
      title: "先生向けご案内チラシ（PDF）",
      description: "学校や教育現場でビビアン朗読ワークを導入される際のご案内資料です。",
      url: "/pdf/vivian/education_flyer.pdf",
      icon: "ri-file-text-fill"
    },
    {
      title: "朗読ワーク資料 vivian登場人物（PDF）",
      description: "朗読ワークで使用する登場人物の詳細資料です。",
      url: "/pdf/vivian/vivian_characters.pdf",
      icon: "ri-user-star-fill"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 relative inline-block px-6">
              資料ダウンロード
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-400 rounded-full"></div>
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-pink-400 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-left">
              教育関係者の皆様向けに、ビビアン朗読ワークの導入や実施に役立つ資料をご用意しています。<br />
              ご自由にダウンロードしてご活用ください。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* アイコン */}
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center group-hover:from-pink-200 group-hover:to-purple-200 transition-colors duration-300">
                    <i className={`${resource.icon} text-4xl text-pink-600 group-hover:text-purple-600 transition-colors duration-300`}></i>
                  </div>

                  {/* タイトル */}
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                    {resource.title}
                  </h3>

                  {/* 説明 */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {resource.description}
                  </p>

                  {/* ダウンロードボタン */}
                  <div className="mt-4 flex items-center text-pink-600 font-semibold group-hover:text-purple-600 transition-colors duration-300">
                    <i className="ri-download-2-fill mr-2"></i>
                    <span>ダウンロード</span>
                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* 補足情報 */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <i className="ri-information-fill text-3xl text-blue-500 mr-3"></i>
                <h3 className="text-xl font-bold text-gray-800">資料のご利用について</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-left">
                これらの資料は、教育現場でのビビアン朗読ワークの導入や実施を検討される方々を対象としています。<br />
                資料の内容に関するご質問や、朗読ワークの実施に関するご相談は、<a href="mailto:info@selflove.or.jp" className="text-pink-600 hover:text-purple-600 underline">info@selflove.or.jp</a> までお気軽にお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VivianResources;
