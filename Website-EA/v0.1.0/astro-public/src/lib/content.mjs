import release from '../data/products.json';

export const langs = ['vi', 'en'];
export const products = release.catalog;
export const research = release.research;
export const links = {
  market: 'https://www.mql5.com/en/market/product/193733',
  author: 'https://www.mql5.com/en/users/monkeyc',
  research: release.research.source_url,
  smcGuide: 'https://monkeyc07.github.io/SMC/'
};

export const blurbs = {
  'smc-forge': {
    vi: 'EA giao dịch tự động dựa trên Smart Money Concepts, với các chế độ chiến lược và quản lý lệnh trên MT5.',
    en: 'A MetaTrader 5 Expert Advisor with Smart Money Concepts workflows and built-in trade management.'
  },
  'smc-signals-alert': {
    vi: 'Phân tích vùng OB, FVG, Premium/Discount và các giai đoạn tín hiệu trên biểu đồ.',
    en: 'Chart context for OB, FVG, Premium/Discount zones and multi-stage trading signals.'
  },
  'candles-signals': {
    vi: 'Nhận diện mô hình nến phổ biến trên biểu đồ và hỗ trợ cảnh báo tín hiệu.',
    en: 'Highlights common candlestick formations directly on charts with configurable alerts.'
  },
  'ma-cross-signals': {
    vi: 'Hiển thị đường trung bình động, điểm giao cắt và đánh dấu tín hiệu Buy/Sell.',
    en: 'Plots moving averages, detects crosses and marks Buy/Sell signals on the chart.'
  }
};

export const labels = {
  vi: {
    title: 'EA & Indicators — Công cụ MT5',
    nav: { home: 'Trang chủ', products: 'Sản phẩm', research: 'Backtest', insights: 'Bài viết', support: 'Hỗ trợ' },
    preview: 'BẢN KIỂM THỬ NỘI DUNG · Chưa mở Demo/Thanh toán trực tiếp',
    heroEyebrow: 'META TRADER 5 / CHIẾN LƯỢC & CÔNG CỤ',
    heroTitle: 'Giao dịch có phương pháp. Tự động hóa có kiểm soát.',
    heroDesc: 'Khám phá EA, chỉ báo và nghiên cứu chiến lược với thông tin từ các sản phẩm đã công bố trên MQL5.',
    viewProducts: 'Khám phá sản phẩm', viewForge: 'Xem SMC Forge',
    verifiedCatalog: 'Danh mục đã công bố', catalogTitle: 'Sản phẩm trên MQL5',
    catalogDesc: '4 sản phẩm đã công bố: 1 Expert Advisor và 3 Indicator miễn phí trên MQL5.',
    categoryEA: 'Expert Advisor', categoryIndicator: 'Chỉ báo', free: 'Miễn phí qua MQL5', market: 'MQL5 Market',
    more: 'Chi tiết', currentPrice: 'Xem giá hiện tại trên MQL5', downloadMql5: 'Tải trên MQL5',
    release: 'Phiên bản công bố', updated: 'Đối chiếu', highlights: 'Tính năng đã công bố',
    releaseNotice: 'Chỉ mô tả những tính năng thuộc phiên bản công khai. Các phiên bản đang phát triển nội bộ không được coi là sản phẩm đã phát hành.',
    researchTitle: 'So sánh ba cấu hình SMC Forge',
    researchIntro: 'Nghiên cứu backtest tham khảo đã công bố ngày 22/09/2026. Cùng vốn khởi điểm, lot cố định và giai đoạn kiểm thử.',
    startCapital: 'Vốn ban đầu', symbol: 'Sản phẩm', period: 'Giai đoạn', lot: 'Khối lượng',
    profile: 'Cấu hình', netProfit: 'Lãi ròng', pf: 'Profit Factor', dd: 'Drawdown', trades: 'Số lệnh', positive: 'Tháng lãi', preset: 'Preset',
    source: 'Xem bài nghiên cứu gốc',
    risk: 'Backtest là mô phỏng lịch sử, không phải lợi nhuận tài khoản thực và không bảo đảm kết quả tương lai. Spread, dữ liệu, broker và phiên bản EA có thể ảnh hưởng kết quả; cần kiểm tra preset trước khi dùng.',
    insightsTitle: 'Tài liệu đã công bố', insightsIntro: 'Liên kết nguồn thật, không sử dụng bài viết giả.',
    articles: [
      ['Nghiên cứu', 'Lợi nhuận hay sự ổn định: đánh đổi điều gì?', 'Đọc bài viết'],
      ['Hướng dẫn', 'SMC Signals Alert — Hướng dẫn cơ bản', 'Mở tài liệu'],
      ['MQL5', 'Tác giả và danh mục sản phẩm công khai', 'Xem hồ sơ']
    ],
    supportTitle: 'Hướng dẫn tiếp cận sản phẩm', supportIntro: 'Trong giai đoạn này, khách hàng sử dụng MQL5 làm kênh mua hoặc tải sản phẩm.',
    steps: [
      ['Chọn sản phẩm', 'Đọc tính năng và phiên bản đã công bố.'],
      ['Mở MQL5', 'Tải các Indicator miễn phí hoặc xem giá EA trên MQL5.'],
      ['Cài đặt và kiểm thử', 'Cài trong MT5, đọc hướng dẫn, thử nghiệm trên tài khoản Demo và tự đánh giá rủi ro.']
    ],
    unavailable: 'Tính năng Website Demo 30 ngày, OTP, Coffee/VietQR, cấp phép và tải EX5/MQ5 trực tiếp chưa hoạt động.',
    proofTitle: 'Thông tin có nguồn kiểm chứng', proofDesc: 'Các đường dẫn dẫn trực tiếp tới sản phẩm, hướng dẫn và nghiên cứu trên MQL5.',
    footer: 'Thông tin và nghiên cứu kỹ thuật trên MetaTrader 5. Giao dịch luôn có rủi ro.',
    illustration: 'Minh họa giao diện — không phải biểu đồ giao dịch live',
    back: 'Tất cả sản phẩm', notAvailable: 'Chưa phát hành trên website',
  },
  en: {
    title: 'EA & Indicators — MT5 Tools',
    nav: { home: 'Home', products: 'Products', research: 'Research', insights: 'Articles', support: 'Support' },
    preview: 'CONTENT STAGING · No website-based Demo or payment flows',
    heroEyebrow: 'META TRADER 5 / STRATEGIES & TOOLS',
    heroTitle: 'Trade with a method. Automate with control.',
    heroDesc: 'Explore EAs, indicators and strategy research grounded in public MQL5 product listings.',
    viewProducts: 'Explore products', viewForge: 'View SMC Forge',
    verifiedCatalog: 'Published catalog', catalogTitle: 'Products on MQL5',
    catalogDesc: 'Four published products: one Expert Advisor and three free indicators on MQL5.',
    categoryEA: 'Expert Advisor', categoryIndicator: 'Indicator', free: 'Free via MQL5', market: 'MQL5 Market',
    more: 'View details', currentPrice: 'See live price on MQL5', downloadMql5: 'Download on MQL5',
    release: 'Published version', updated: 'Verified', highlights: 'Published capabilities',
    releaseNotice: 'Only customer-facing, published features are described here. Internal development builds are not commercial releases.',
    researchTitle: 'Three SMC Forge configurations compared',
    researchIntro: 'Reference backtest research published on 22 September 2026 under comparable testing conditions.',
    startCapital: 'Starting capital', symbol: 'Symbol', period: 'Period', lot: 'Lot size',
    profile: 'Profile', netProfit: 'Net profit', pf: 'Profit Factor', dd: 'Drawdown', trades: 'Trades', positive: 'Positive months', preset: 'Preset',
    source: 'Read the original research',
    risk: 'Backtests are historical simulations, not live account returns or guarantees. Spreads, broker feeds, versions and execution can change results. Validate preset compatibility before use.',
    insightsTitle: 'Published resources', insightsIntro: 'Verified public sources, not placeholder articles.',
    articles: [
      ['Research', 'More Profit or More Stability? What Do You Trade Away?', 'Read article'],
      ['User guide', 'SMC Signals Alert — Basic User Guide', 'Open guide'],
      ['MQL5', 'Author and published products', 'View profile']
    ],
    supportTitle: 'Getting started with products', supportIntro: 'MQL5 is the purchase and download channel during this content release.',
    steps: [
      ['Choose a product', 'Review the published feature set and version.'],
      ['Open MQL5', 'Download free indicators or check current EA pricing on MQL5.'],
      ['Install and test', 'Install in MT5, read guidance, test on Demo, and evaluate risk before trading.']
    ],
    unavailable: 'Website 30-day Demo, email OTP, Coffee/VietQR, licenses and direct EX5/MQ5 downloads are not operational.',
    proofTitle: 'Publicly checkable claims', proofDesc: 'Links lead to live MQL5 product pages, guides and published research.',
    footer: 'MetaTrader 5 tools and strategy research. Trading involves risk.',
    illustration: 'Interface illustration — not a live trading chart',
    back: 'All products', notAvailable: 'Not available on this website',
  }
};

export const forLang = (lang) => labels[langs.includes(lang) ? lang : 'vi'];
export const productTitle = (item, lang) => `${item.name} | EA & Indicators`;
export const feature = (featureText) => featureText;
export const path = (lang, route = '') => `/${lang}${route ? `/${route.replace(/^\//, '')}` : ''}`;

export const featuresVi = {
  'smc-forge': [
    'Chiến lược POI Reaction, Liquidity Sweep và FVG Retracement',
    'Các kiểu vào lệnh Direct / Confirm',
    'Bối cảnh đa khung thời gian, vùng OB/FVG và thanh khoản',
    'Break-even, trailing, SL/TP và bảng quản lý trên chart'
  ],
  'smc-signals-alert': [
    'Vùng Premium / Discount, OB và FVG',
    'Các trạng thái tín hiệu Pre-watch, Ready và Confirm',
    'Ngữ cảnh biểu đồ và cảnh báo push',
    'Một số tính năng Telegram nâng cao chỉ có trong bản Pro theo mô tả MQL5'
  ],
  'candles-signals': [
    'Các mẫu Pinbar, Engulfing, Hammer và Shooting Star',
    'Morning Star, Evening Star và các nhóm mô hình tùy chọn',
    'Lọc độ mạnh và bối cảnh của tín hiệu',
    'Đánh dấu vùng mô hình và cảnh báo popup, push, Telegram'
  ],
  'ma-cross-signals': [
    'Hai đường Moving Average có thể tùy chỉnh',
    'Nhận diện giao cắt tăng/giảm, đánh dấu tín hiệu Buy/Sell',
    'Hiển thị đường MA từ khung thời gian được chọn',
    'Tùy chọn hiển thị mũi tên tín hiệu'
  ]
};
export const localizedFeatures = (p, lang) => lang === 'vi' ? featuresVi[p.slug] : p.features;
