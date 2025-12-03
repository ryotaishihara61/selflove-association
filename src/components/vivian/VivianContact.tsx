/**
 * VivianContact - 朗読ワークのご依頼セクション
 * 朗読ワークの申し込みフォームとプログラム詳細
 */
const VivianContact = () => {
  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 relative inline-block px-6">
              朗読ワークのご依頼
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-400 rounded-full"></div>
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-pink-400 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-left">
              学校・園・地域・コミュニティ、企業イベントや親子の集まりなど、さまざまな場面で開催いただけます。<br />
              朗読と体感ワークを通じて、"心を育む特別な時間"を一緒に届けませんか？
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">こんな場所でご活用いただけます</h3>
                <ul className="space-y-3">
                  {[
                    "小学校・中学校・高校",
                    "道徳・総合・探究学習などに",
                    "学童・フリースクール",
                    "放課後や居場所づくりのプログラムに",
                    "地域コミュニティ・イベント",
                    "世代を超えた交流や文化活動に",
                    "コミュニケーション研修・対話ワークショップ",
                    "社会人や団体向けの人間関係づくりに"
                  ].map((place, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <i className="ri-check-line text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                      <span>{place}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">プログラムの流れ</h3>
                <p className="text-gray-600 mb-4 text-sm">「絵本の朗読」と「虹ワーク」の2部構成です。</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">絵本の朗読（30分）</h4>
                    <p className="text-sm text-gray-600 mb-2">スライド映像と音楽に合わせて物語の世界へ。</p>
                    <p className="text-sm text-gray-600">ただ聴くだけでなく、登場人物を演じ"声"で表現することで、想像力と感性を育みます。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">虹のワーク（30〜60分）</h4>
                    <p className="text-sm text-gray-600 mb-2">対話や体験を通して、</p>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>- 自己理解・自己肯定感</li>
                      <li>- 共感力・コミュニケーション</li>
                      <li>- 多様性の尊重</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-2">を自然に育みます。</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-gray-800 text-sm">⭐️ 一番人気プラン</h5>
                        <p className="text-sm text-gray-600">①朗読 ＋ ②虹ワーク（40〜90分）</p>
                      </div>

                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-gray-800 text-sm">⭐️ お試しプラン</h5>
                        <p className="text-sm text-gray-600">①朗読のみ（30分）</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-file-text-fill text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  お申し込みフォーム
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-left">
                  朗読ワークのご依頼やご質問は、こちらからお気軽にどうぞ。<br />
                  小規模の会や試験的な開催も大歓迎です。まずはご相談ください。
                </p>
              </div>

              <div className="space-y-4">
                {/* Google Form button */}
                <button
                  onClick={() => {
                    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeE_qzlNXSQOW36DWviuqcHwjnhdOqWkXfbKk72bH9qT8oNAg/viewform', '_blank', 'noopener,noreferrer');
                  }}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-8 rounded-lg font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <i className="ri-external-link-fill mr-3"></i>
                  朗読ワークに申し込む
                </button>
                <p className="text-xs text-gray-500 mt-4">
                  ※ 新しいタブでGoogleフォームが開きます
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VivianContact;
