import { useState, useEffect, useRef } from 'react';

/**
 * VivianImageSlider - 朗読ワークの様子セクション
 * ワークショップの写真をスライダー形式で表示
 */
const VivianImageSlider = () => {
  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  const imageSlideRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const sessionImages = [
    { src: "/assets/images/vivian/ws-10.jpg", alt: "朗読ワークの様子 10" },
    { src: "/assets/images/vivian/ws-12.jpg", alt: "朗読ワークの様子 12" },
    { src: "/assets/images/vivian/ws-11.jpg", alt: "朗読ワークの様子 11" },
    { src: "/assets/images/vivian/ws-13.jpg", alt: "朗読ワークの様子 13" },
    { src: "/assets/images/vivian/ws-16.jpg", alt: "朗読ワークの様子 16" },
    { src: "/assets/images/vivian/ws-15.jpg", alt: "朗読ワークの様子 15" },
    { src: "/assets/images/vivian/ws-14.jpg", alt: "朗読ワークの様子 14" },
    { src: "/assets/images/vivian/ws-09.jpg", alt: "朗読ワークの様子 9" },
    { src: "/assets/images/vivian/ws-08.jpg", alt: "朗読ワークの様子 8" },
    { src: "/assets/images/vivian/ws-07.jpg", alt: "朗読ワークの様子 7" },
    { src: "/assets/images/vivian/ws-06.jpg", alt: "朗読ワークの様子 6" },
    { src: "/assets/images/vivian/ws-05.jpg", alt: "朗読ワークの様子 5" },
    { src: "/assets/images/vivian/ws-04.jpg", alt: "朗読ワークの様子 4" },
    { src: "/assets/images/vivian/ws-03.jpg", alt: "朗読ワークの様子 3" },
    { src: "/assets/images/vivian/ws-02.jpg", alt: "朗読ワークの様子 2" },
    { src: "/assets/images/vivian/ws-01.jpg", alt: "朗読ワークの様子 1" }
  ];

  // 最大スライド数を計算
  const getMaxSlides = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) {
        // lg: 3列
        return Math.ceil(sessionImages.length / 3) - 1;
      } else if (window.innerWidth >= 768) {
        // md: 2列
        return Math.ceil(sessionImages.length / 2) - 1;
      } else {
        // sm: 1列
        return sessionImages.length - 1;
      }
    }
    return sessionImages.length - 1;
  };

  // 自動スライド
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageSlide((prev) => {
        const maxSlides = getMaxSlides();
        return prev >= maxSlides ? 0 : prev + 1;
      });
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // ウィンドウリサイズ対応
  useEffect(() => {
    const handleResize = () => {
      const maxSlides = getMaxSlides();
      if (currentImageSlide > maxSlides) {
        setCurrentImageSlide(maxSlides);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [currentImageSlide]);

  const nextImageSlide = () => {
    setCurrentImageSlide((prev) => {
      const maxSlides = getMaxSlides();
      return prev >= maxSlides ? 0 : prev + 1;
    });
  };

  const prevImageSlide = () => {
    setCurrentImageSlide((prev) => {
      const maxSlides = getMaxSlides();
      return prev <= 0 ? maxSlides : prev - 1;
    });
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

  const handleImageSlideTouchEnd = () => {
    if (touchStartX.current === 0 || touchEndX.current === 0) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImageSlide();
    } else if (isRightSwipe) {
      prevImageSlide();
    }

    // リセット
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 relative inline-block px-6">
            朗読ワークの様子
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-pink-400 rounded-full"></div>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-400 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-left">
            温かい雰囲気の中で、子どもたちと一緒に心の成長を育んでいます
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div
            ref={imageSlideRef}
            className="relative overflow-hidden rounded-2xl select-none cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleImageSlideTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleImageSlideTouchEnd}
            onMouseLeave={handleImageSlideTouchEnd}
            style={{ touchAction: 'none' }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentImageSlide * 100}%)`
              }}
            >
              {sessionImages.map((image, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2">
                  <div className="relative group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-60 md:h-72 lg:h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ナビゲーションコントロール */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevImageSlide}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-purple-50 transition-colors duration-300 cursor-pointer"
            >
              <i className="ri-arrow-left-s-line text-2xl text-gray-600"></i>
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: getMaxSlides() + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
                    currentImageSlide === index ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextImageSlide}
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

export default VivianImageSlider;
