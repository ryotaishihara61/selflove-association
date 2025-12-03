/**
 * VivianPurchase - 絵本の購入セクション
 * 絵本の購入ページへのリンク
 */
const VivianPurchase = () => {
  return (
    <section id="purchase" className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-center lg:text-left space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 relative inline-block px-6">
                    絵本の購入はこちら
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-10 bg-yellow-300 rounded-full"></div>
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-10 bg-purple-400 rounded-full"></div>
                  </h2>
                  <p className="text-xl text-gray-200 leading-relaxed mb-8 text-left">
                    ご家庭でも「ビビアン」の物語をお楽しみいただけます。<br />
                    お子様との特別な読み聞かせ時間を作りませんか？
                  </p>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <button
                    onClick={() => {
                      window.open('https://selflovelab.base.shop/items/87374284', '_blank', 'noopener,noreferrer');
                    }}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-8 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  >
                    <i className="ri-shopping-cart-fill mr-3"></i>
                    購入する
                  </button>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full blur-2xl"></div>
                <img
                  src="https://static.readdy.ai/image/eaa52119033ac8864aa00eb190fc57f3/d33963635a7dcde0f681569d0439a989.png"
                  alt="絵本ビビアン - 購入ページ"
                  className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-2xl animate-pulse">
                  📚
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-2xl">
                  🎁
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VivianPurchase;
