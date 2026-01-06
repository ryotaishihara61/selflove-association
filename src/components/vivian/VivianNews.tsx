import { useState } from 'react';

/**
 * VivianNews - お知らせセクション
 * Vivianに関する最新情報を表示
 */
const VivianNews = () => {
  const [showAllNews, setShowAllNews] = useState(false);

  const newsItems = [
    {
      date: "2025.12.12",
      content: (
        <>
          ブログ更新：
          <a
            href="https://note.com/ran_ishihara/n/n51a4e0719552"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 underline"
          >
            CIESF Leaders Academy (Cambodia) での気付き
          </a>
        </>
      )
    },
    {
      date: "2025.12.02",
      content: (
        <>
          CIESF Leaders Academy (Cambodia) の小学生・中学生を向けにビビアン朗読ワークを実施しました。
          <a
            href="https://www.facebook.com/CLAkindergarten/posts/pfbid0j48BpQ9mxz4L1Xz4pJSPRn4WseWZJnF5hQaQ84hhH6Aun9nhfxKk7Yhj4QF5hetKl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 underline"
          >
            授業の様子
          </a>
        </>
      )
    },
    {
      date: "2025.11.28",
      content: (
        <>
          ビビアンの運営母体として{" "}
          <a
            href="https://selflove.or.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 underline"
          >
            一般社団法人セルフラブ協会
          </a>
          {" "}を設立しました
        </>
      )
    },
    {
      date: "2025.10.28",
      content: (
        <>
          兵庫県の公立小学校でビビアン式セルフラブ授業を実施しました。
          <a
            href="https://www.instagram.com/p/DQYCVv3j3jc/?igsh=ZHFtNzA5ODZybDBq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 underline"
          >
            授業の様子
          </a>
        </>
      )
    },
    {
      date: "2025.10.09",
      content: "兵庫県の公立小学校5年生の授業でビビアン朗読ワークを実施しました"
    },
    {
      date: "2025.10.02",
      content: (
        <>
          桜丘高校一年生の保健の授業で特別講義を実施しました。
          <a
            href="https://sakuragaoka.ac.jp/topics/38977"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 underline"
          >
            授業の様子
          </a>
        </>
      )
    },
    {
      date: "2025.10.01",
      content: "先生、教育関係者向けの資料をダウンロードいただけるようになりました"
    },
    {
      date: "2025.09.30",
      content: "ウェブサイトを公開しました"
    }
  ];

  return (
    <section id="news" className="py-12 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-pink-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2 flex items-center justify-center">
              <i className="ri-newspaper-line text-purple-500 mr-2"></i>
              お知らせ
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(showAllNews ? newsItems : newsItems.slice(0, 2)).map((news, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm p-4 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-500 font-medium">{news.date}</span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {news.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {newsItems.length > 2 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAllNews(!showAllNews)}
                className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center justify-center mx-auto transition-colors duration-300"
              >
                {showAllNews ? (
                  <>
                    <span>閉じる</span>
                    <i className="ri-arrow-up-s-line ml-1"></i>
                  </>
                ) : (
                  <>
                    <span>もっとみる</span>
                    <i className="ri-arrow-down-s-line ml-1"></i>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VivianNews;
