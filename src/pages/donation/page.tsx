import Header from '../../components/Header';

const DonationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50">
      <Header currentPage="donation" />

      {/* ヒーローセクション */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.8)), url('/assets/images/donation/hero-donation.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">寄付のお願い</h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            セルフラブ教育の普及と発展のために、皆様のご支援をお願いいたします
          </p>
        </div>
      </section>

      {/* メインコンテンツ */}
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">

            {/* 寄付の目的 */}
            <section className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">寄付の目的</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img
                      src="/assets/images/donation-activity.jpeg"
                      alt="セルフラブ教育の様子"
                      className="rounded-lg shadow-lg object-cover w-full h-80 object-top"
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      皆様からのご寄付は、セルフラブ教育の普及と発展のために大切に活用させていただきます。
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <i className="ri-community-line text-purple-600 text-sm"></i>
                        </div>
                        <p className="text-gray-700">学校や各コミュニティでのワークショップ活動費</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <i className="ri-graduation-cap-line text-pink-600 text-sm"></i>
                        </div>
                        <p className="text-gray-700">教育プログラムの開発・改善</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <i className="ri-group-line text-orange-600 text-sm"></i>
                        </div>
                        <p className="text-gray-700">講師の育成・研修</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <i className="ri-book-line text-green-600 text-sm"></i>
                        </div>
                        <p className="text-gray-700">教材・資料の制作</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <i className="ri-global-line text-blue-600 text-sm"></i>
                        </div>
                        <p className="text-gray-700">国際的な教育連携の推進</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 寄付申込フォーム */}
            <section>
              <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-2xl p-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">寄付のお申し込み</h2>
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="ri-heart-line text-3xl text-orange-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">ご支援をお願いいたします</h3>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    セルフラブ教育の普及のために、皆様のあたたかいご支援をお願いいたします。<br />
                    寄付に関するお問い合わせは、以下のメールアドレスまでご連絡ください。
                  </p>
                  <a
                    href="mailto:info@selflove.or.jp?subject=寄付に関するお問い合わせ"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer inline-flex items-center"
                  >
                    <i className="ri-mail-line mr-2"></i>
                    メールで問い合わせる
                  </a>
                  <p className="text-gray-500 text-sm mt-4">
                    メールアドレス：info@selflove.or.jp
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img
                src="/assets/images/logo.png"
                alt="セルフラブ協会ロゴ"
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-2xl font-bold">一般社団法人セルフラブ協会</h3>
            </div>
            <p className="text-gray-300 mb-6">Self Love Association Japan</p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-semibold mb-2">お問い合わせ</h4>
                <a href="mailto:info@selflove.or.jp" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  info@selflove.or.jp
                </a>
              </div>
              <div>
                <h4 className="font-semibold mb-2">所在地</h4>
                <p className="text-gray-300">東京都千代田区九段南一丁目5番6号<br />りそな九段ビル5階KSフロア</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">SNS</h4>
                <div className="flex justify-center">
                  <a
                    href="https://www.instagram.com/selflove.laboratory/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer"
                  >
                    <i className="ri-instagram-fill text-4xl text-white"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 text-sm">
                Copyright © Self Love Association Japan. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DonationPage;
