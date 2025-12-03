import { useState, useEffect, useRef } from 'react';

/**
 * VivianTestimonials - 朗読ワークの事例セクション
 * 体験者の声をスライダー形式で表示
 */
const VivianTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const testimonials = [
    {
      name: "教師",
      role: "",
      comment: "虹のワークで、弱みの裏側にある魅力を見つけるために、視点や解釈が自然と広がっていくのを実感しました。教室の空気がやわらぎ、子ども同士の関わり方も変わってきています。",
      image: "🎓",
      isIcon: true
    },
    {
      name: "小学生",
      role: "",
      comment: "みんなの前で声に出すのはドキドキしたけど、すごく楽しかった！\"わかる！あなたの虹が素敵！\"って思えたし、自分らしさを褒めてもらえてうれしかったです。",
      image: "📚",
      isIcon: true
    },
    {
      name: "中高生",
      role: "",
      comment: "自分の気持ちや考えを人に言うのが苦手だったけど、ここでは安心できました。同じ場で友だちを応援できたことも、すごくうれしかったです。",
      image: "✨",
      isIcon: true
    },
    {
      name: "子育て中の親",
      role: "",
      comment: "子どもが\"弱いところも虹なんだよね\"と言ってくれて胸がいっぱいになりました。親としても\"そのままでいい\"と受けとめる自信につながりました。",
      image: "💝",
      isIcon: true
    },
    {
      name: "一般女性",
      role: "",
      comment: "自分の気持ちを声に出すだけで心がすっと軽くなりました。朗読を通して安心して人とつながれる感覚を味わえたのが、とても新鮮でした。",
      image: "🌈",
      isIcon: true
    },
    {
      name: "経営者",
      role: "",
      comment: "本音の声を引き出し合える、対話し合える、まさにこういう教育現場が欲しいと思っていました。このプログラムが様々な地域に広がってほしいと強く感じました。",
      image: "💼",
      isIcon: true
    }
  ];

  // 自動スライド
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // タッチ/スワイプハンドラー
  const handleStart = (clientX: number) => {
    touchStartX.current = clientX;
    touchEndX.current = 0;
  };

  const handleMove = (clientX: number) => {
    touchEndX.current = clientX;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    handleMove(e.targetTouches[0].clientX);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (touchStartX.current !== 0) {
      handleMove(e.clientX);
    }
  };

  const handleTestimonialTouchEnd = () => {
    if (touchStartX.current === 0 || touchEndX.current === 0) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextTestimonial();
    } else if (isRightSwipe) {
      prevTestimonial();
    }

    // リセット
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 relative inline-block px-6">
            朗読ワークの事例
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-400 rounded-full"></div>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-pink-400 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-left">
            実際に『ビビアン』の朗読ワークを体験された方々の声をご紹介します。子どもから大人まで、それぞれの立場でこんな気づきや変化がありました。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            ref={testimonialRef}
            className="relative overflow-hidden select-none cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTestimonialTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleTestimonialTouchEnd}
            onMouseLeave={handleTestimonialTouchEnd}
            style={{ touchAction: 'none' }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg mx-auto max-w-2xl">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mr-4">
                        <span className="text-2xl">{testimonial.image}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed italic text-lg mb-6">
                      「{testimonial.comment}」
                    </p>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill"></i>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ナビゲーションコントロール */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-purple-50 transition-colors duration-300 cursor-pointer"
            >
              <i className="ri-arrow-left-s-line text-2xl text-gray-600"></i>
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
                    currentTestimonial === index ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-purple-50 transition-colors duration-300 cursor-pointer"
            >
              <i className="ri-arrow-right-s-line text-2xl text-gray-600"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VivianTestimonials;
