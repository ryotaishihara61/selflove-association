import { useState, useEffect } from 'react';

interface BlogPost {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  imageUrl: string;
}

/**
 * VivianBlog - ブログセクション
 * noteのRSSフィードからブログ記事を取得して表示
 */
const VivianBlog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loadingBlog, setLoadingBlog] = useState(true);

  // URLからnote記事IDを抽出
  const extractNoteId = (url: string): string => {
    const match = url.match(/\/n\/(n[a-z0-9]+)/i);
    return match ? match[1] : '';
  };

  // 画像マッピング（note記事IDベース）
  const imageMapping: { [key: string]: string } = {
    "na0e3e274fdf3": "/assets/images/vivian/blog/blog_001.jpg",
    "n6a7594d046cb": "/assets/images/vivian/blog/blog_002.jpg",
    "necbd3d08b169": "/assets/images/vivian/blog/blog_003.jpg"
  };

  // デフォルト画像の取得
  const getDefaultImage = (index: number): string => {
    const queries = [
      'Beautiful childrens book illustration, soft pastel colors, rainbow theme, educational and heartwarming',
      'Self love concept illustration, colorful and inspiring, children education',
      'Heartwarming illustration of diverse children reading together, colorful rainbow background',
      'Gentle watercolor illustration, child with rainbow, emotional learning theme',
      'Whimsical children book art, self acceptance theme, warm colors',
      'Educational illustration for children, friendship and diversity, rainbow colors'
    ];
    const query = queries[index % queries.length];
    return `https://readdy.ai/api/search-image?query=${encodeURIComponent(query)}&width=400&height=300&seq=blog-default-${index}&orientation=landscape`;
  };

  // ブログ記事の画像URL取得
  const getBlogImageUrl = (link: string, index: number): string => {
    const noteId = extractNoteId(link);
    // imageMappingに登録があればそれを使用
    if (noteId && imageMapping[noteId]) {
      return imageMapping[noteId];
    }
    // なければデフォルト画像を循環使用
    return getDefaultImage(index);
  };

  // noteRSSフィードからブログ投稿を取得
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        // 自前のPHPプロキシを使用（CORSエラー回避）
        const proxyUrl = '/api/note-rss-proxy.php';
        const response = await fetch(proxyUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const xmlText = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, 'text/xml');
        const items = xml.querySelectorAll('item');

        if (items.length === 0) {
          throw new Error('No blog items found in RSS feed');
        }

        const posts: BlogPost[] = Array.from(items).slice(0, 6).map((item, index) => {
          const title = item.querySelector('title')?.textContent || '';
          const description = item.querySelector('description')?.textContent?.replace(/<[^>]*>/g, '').slice(0, 100) + '...' || '';
          const link = item.querySelector('link')?.textContent || '';
          const pubDate = item.querySelector('pubDate')?.textContent || '';

          // 画像URLの取得
          const imageUrl = getBlogImageUrl(link, index);

          return {
            title,
            description,
            link,
            pubDate: new Date(pubDate).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' }),
            imageUrl
          };
        });

        setBlogPosts(posts);
        setLoadingBlog(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        // エラー時はサンプル記事を表示
        const samplePosts: BlogPost[] = [
          {
            title: 'ブログ記事をお楽しみに',
            description: '最新の記事を準備中です。もう少しお待ちください...',
            link: 'https://note.com/ran_ishihara',
            pubDate: new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' }),
            imageUrl: getDefaultImage(0)
          }
        ];
        setBlogPosts(samplePosts);
        setLoadingBlog(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 relative inline-block px-6">
            Blog
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-400 rounded-full"></div>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-pink-400 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-left">
            ビビアン朗読ワークやセルフラブ、SEL教育について発信しています
          </p>
        </div>

        {loadingBlog ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // 画像が読み込めない場合はデフォルト画像を使用
                      const target = e.target as HTMLImageElement;
                      target.src = getDefaultImage(index);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-purple-600 font-medium mb-2">
                    {post.pubDate}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center text-purple-600 font-medium group-hover:text-purple-800 transition-colors duration-300">
                    続きを読む
                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="https://note.com/ran_ishihara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <i className="ri-article-line mr-3"></i>
            ブログ一覧を見る
          </a>
        </div>
      </div>
    </section>
  );
};

export default VivianBlog;
