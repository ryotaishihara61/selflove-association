import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  currentPage: 'home' | 'vivian' | 'vivian-os' | 'membership' | 'donation';
}

const Header = ({ currentPage }: HeaderProps) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'ホーム', path: '/' },
    { id: 'vivian', label: 'ビビアン朗読ワーク', path: '/vivian' },
    { id: 'vivian-os', label: '先生の皆さまへ', path: '/vivian-os' },
    { id: 'membership', label: '入会案内', path: '/membership' },
    { id: 'donation', label: '寄付', path: '/donation' },
    { id: 'blog', label: 'Blog', path: 'https://note.com/ran_ishihara', external: true },
  ];

  const getNavItemClass = (itemId: string) => {
    const isActive = itemId === currentPage;
    // Blogには特別なスタイリング（薄いピンクの背景色）を適用
    if (itemId === 'blog') {
      return 'text-gray-700 hover:text-pink-600 transition-colors cursor-pointer bg-pink-50 px-3 py-2 rounded-lg';
    }
    return isActive
      ? 'text-pink-600 font-semibold underline underline-offset-4 cursor-pointer'
      : 'text-gray-700 hover:text-pink-600 transition-colors cursor-pointer';
  };

  const getMobileNavItemClass = (itemId: string) => {
    const isActive = itemId === currentPage;
    // Blogには特別なスタイリング（薄いピンクの背景色）を適用
    if (itemId === 'blog') {
      return 'text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer bg-pink-50 px-3 py-2 rounded-lg';
    }
    return isActive
      ? 'text-left text-pink-600 font-semibold underline underline-offset-4 cursor-pointer'
      : 'text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer';
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 cursor-pointer" onClick={() => handleNavigate('/')}>
            <img
              src="/assets/images/logo.png"
              alt="セルフラブ協会ロゴ"
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800" style={{ fontFamily: '"Pacifico", serif' }}>
                一般社団法人セルフラブ協会
              </h1>
              <p className="text-sm text-gray-600">Self Love Association Japan</p>
            </div>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.external) {
                return (
                  <a
                    key={item.id}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={getNavItemClass(item.id)}
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.path)}
                  className={getNavItemClass(item.id)}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* モバイルハンバーガーメニューボタン */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
          >
            <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-2xl text-gray-700`}></i>
          </button>
        </div>

        {/* モバイルメニュー */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => {
                if (item.external) {
                  return (
                    <a
                      key={item.id}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={getMobileNavItemClass(item.id)}
                    >
                      {item.label}
                    </a>
                  );
                }
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.path)}
                    className={getMobileNavItemClass(item.id)}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
