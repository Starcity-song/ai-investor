interface WelcomeScreenProps {
  onQuickStart: (text: string) => void;
}

const QUICK_STARTERS = [
  {
    icon: 'cup',
    title: '奶茶店',
    desc: '想在大学城开一家特色奶茶店',
  },
  {
    icon: 'phone',
    title: 'AI 小程序',
    desc: '做一个 AI 帮你写朋友圈文案的小程序',
  },
  {
    icon: 'book',
    title: '知识付费',
    desc: '想做一个教人用 AI 工具提效的付费课程',
  },
  {
    icon: 'cart',
    title: '跨境电商',
    desc: '在 TikTok Shop 上卖国产美妆产品',
  },
];

function QuickIcon({ type }: { type: string }) {
  switch (type) {
    case 'cup':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="2" x2="6" y2="4" />
          <line x1="10" y1="2" x2="10" y2="4" />
          <line x1="14" y1="2" x2="14" y2="4" />
        </svg>
      );
    case 'phone':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    case 'book':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    case 'cart':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      );
    default:
      return null;
  }
}

export function WelcomeScreen({ onQuickStart }: WelcomeScreenProps) {
  return (
    <div className="welcome">
      <div className="welcome-character">
        <div className="character-bubble">
          <svg className="character-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <div className="character-sparkle sparkle-1" />
          <div className="character-sparkle sparkle-2" />
          <div className="character-sparkle sparkle-3" />
        </div>
      </div>
      <h2 className="welcome-title">你好，我是<span className="highlight">毒舌金主</span></h2>
      <p className="welcome-desc">
        见过 10000+ 商业计划书的资深投资人<br />
        说话毒但真诚，帮你用最低成本验证副业想法
      </p>
      <div className="quick-starters">
        {QUICK_STARTERS.map((item) => (
          <button
            key={item.title}
            className="quick-starter-card"
            onClick={() => onQuickStart(item.desc)}
          >
            <span className="qs-icon">
              <QuickIcon type={item.icon} />
            </span>
            <span className="qs-title">{item.title}</span>
            <span className="qs-desc">{item.desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
