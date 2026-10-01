export interface Project {
  title: string;
  category: string;
  description: string;
  role: string;
  highlight: string;
  technologies: string[];
  // public/ に置いた画像のパス。例: 'images/my-app.webp'
  image?: string;
  imageAlt?: string;
  demoUrl?: string;
  sourceUrl?: string;
}

// まずはこのファイルの文章を、自分の内容に置き換えてください。
export const portfolio = {
  name: '山本 湧也',
  englishName: 'Yuya Yamamoto',
  affiliation: ['東京大学大学院 工学系研究科 電気系工学専攻', '修士課程1年 竹内研究室'],
  // public/ に置いた写真・PDFのパス。未設定なら表示されません。
  profileImage: '',
  cvPath: '',
  introduction: 'Physical AIの推論高速化に向けた、ソフトウェア・ハードウェア協調設計の研究に取り組んでいます。',
  about: [
    'ソフトウェアとハードウェアの両面からAI推論の効率化を検討し、高速化に向けた新しい手法を提案することを目指しています。',
  ],
  githubUrl: 'https://github.com/yuuharu11',
  // 公開してよいメールアドレスを設定すると、メールリンクが表示されます。
  email: '',
  interests: ['Physical AI', 'AI Accelerator', 'Computation-in-Memory'],
  skills: [
    // 使用技術の一覧です。習熟度や担当範囲は、研究・制作物の説明で補足します。
    { label: '言語', items: ['Python', 'C++', 'C', 'Verilog', 'JavaScript'] },
    { label: '機械学習', items: ['PyTorch', 'TensorFlow', 'PyTorch Lightning'] },
    { label: '数値計算', items: ['NumPy'] },
    { label: 'ツール', items: ['Git', 'Docker', 'Jupyter Notebook', 'Weights & Biases', 'Google Apps Script'] },
  ],
};

// サンプルです。実績を示すものではないので、公開前に置き換えてください。
export const projects: Project[] = [
  {
    title: '制作物のタイトル 01',
    category: 'WEB APPLICATION',
    description: '誰のどんな課題を解決するアプリなのか、概要を記載してください。',
    role: '担当した範囲を記載',
    highlight: '実装で工夫した点や、技術を選んだ理由を記載してください。',
    technologies: ['技術 01', '技術 02'],
  },
  {
    title: '制作物のタイトル 02',
    category: 'PERSONAL PROJECT',
    description: '制作のきっかけや、使う人に提供する価値を記載してください。',
    role: '担当した範囲を記載',
    highlight: '難しかったことと、どのように解決したかを記載してください。',
    technologies: ['技術 01', '技術 02'],
  },
];

export interface HistoryEntry {
  date: string;
  title: string;
  description?: string;
  url?: string;
}

// 新しい項目を上に追加します。不要なセクションは [] にすると非表示になります。
export const news: HistoryEntry[] = [];
export const education: HistoryEntry[] = [
  {
    date: '2026.04 − 現在',
    title: '東京大学大学院 工学系研究科 電気系工学専攻 修士課程',
    description: '修士課程1年・竹内研究室',
  },
  {
    date: '2024.04 − 2026.03',
    title: '東京大学 工学部 電子情報工学科',
  },
  {
    date: '2022.04 − 2024.03',
    title: '東京大学 教養学部 理科一類',
  },
  {
    date: '2018.04 − 2021.03',
    title: '東京都立八王子東高等学校 普通科',
  },
];
export const experience: HistoryEntry[] = [];
export const publications: HistoryEntry[] = [];
export const awards: HistoryEntry[] = [];
