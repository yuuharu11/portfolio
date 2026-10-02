export interface Project {
  id?: string;
  title: string;
  category: string;
  date?: string;
  result?: string;
  description: string;
  role?: string;
  highlight?: string;
  technologies: string[];
  // public/ に置いた画像のパス。例: 'images/my-app.webp'
  image?: string;
  imageAlt?: string;
  demoUrl?: string;
  sourceUrl?: string;
  sourcePrivate?: boolean;
  competitionUrl?: string;
  eventUrl?: string;
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
    '趣味はアニメ鑑賞と旅行です。旅先では聖地巡礼やスキーを楽しんでいます。',
  ],
  githubUrl: 'https://github.com/yuuharu11',
  // 公開してよいメールアドレスを設定すると、メールリンクが表示されます。
  email: 'yuya.yamamoto@co-design.t.u-tokyo.ac.jp',
  interests: ['Physical AI', 'AI Accelerator', 'Computation-in-Memory'],
  skills: [
    // 使用技術の一覧です。習熟度や担当範囲は、研究・制作物の説明で補足します。
    { label: '言語', items: ['Python', 'C++', 'C', 'Verilog', 'JavaScript'] },
    { label: '機械学習', items: ['PyTorch', 'TensorFlow', 'PyTorch Lightning'] },
    { label: '数値計算', items: ['NumPy'] },
    { label: 'ツール', items: ['Git', 'Docker', 'Jupyter Notebook', 'Weights & Biases', 'Google Apps Script'] },
  ],
};

export const projects: Project[] = [
  {
    id: 'parc2026',
    title: 'PARC 2026：VLAモデル開発コンペティション',
    category: 'コンペティション',
    date: '2026.08',
    result: '予選突破',
    description: 'VLAモデルの汎化能力向上を競うPhysical AI Robot Challenge 2026に参加しました。モデルの追加学習と評価を通じて、環境の変化への対応と安定したタスク遂行を両立するモデル開発に取り組み、予選を突破しました。',
    role: 'VLAモデルの追加学習・評価、提出環境の整備',
    highlight: '事前学習済みπ0.5にLoRAによる追加学習を行い、タスクごとのデータ配分や学習済み重みの統合を検討しました。成功率だけでなく、衝突や軌道の滑らかさも考慮して評価しました。',
    technologies: ['Python', 'JAX', 'openpi', 'LoRA', 'Docker'],
    sourceUrl: 'https://github.com/yuuharu11/PARC2026_pre',
    competitionUrl: 'https://weblab.t.u-tokyo.ac.jp/physical-ai-competition/',
  },
  {
    id: 'airobo-project',
    title: '人工知能応用プロジェクト：動的な物体把持のためのVLA制御',
    category: 'プロジェクト・チーム開発',
    date: '2026.06',
    description: '授業の人工知能応用プロジェクトで、ベルトコンベア上を動く物体をロボットアームで掴み、箱へ移すシステムをチーム開発しました。SO-101の実機操作とデータ収集、VLAモデルの追加学習、MuJoCo上での動作検証を行う環境を整備しました。',
    highlight: '実機と同じロボットアーム、コンベア、物体、箱を配置したシミュレーション環境を構築しました。LeRobotを用いて操作データの記録から学習・評価までをつなぎ、物体が動く状況に対応するための行動の再計画も検討しました。',
    technologies: ['Python', 'LeRobot', 'SmolVLA', 'MuJoCo', 'SO-101'],
    sourceUrl: 'https://github.com/yuuharu11/AIRobo-project',
  },
  {
    id: 'pinball',
    title: 'Pinball：ステージクリア型ピンボールゲーム',
    category: 'プロジェクト・チーム開発',
    date: '2024',
    description: 'Windows XPのピンボールを意識し、友人2人と共同開発しました。左右のタップでフリッパーを操作し、ボールをゴールへ導くゲームです。全40ステージの攻略と、3個のボールで到達ステージ数を競うスコアモードを楽しめます。',
    highlight: '風車・バンパー・ワープなどのギミックを組み合わせ、ボールの動きや攻略方法を楽しめるステージ作りを意識しました。左右のタップだけで直感的に操作でき、初めてでも遊びやすいゲームを目指しました。',
    technologies: ['Unity', 'C#'],
    sourceUrl: 'https://github.com/ssaGameTeam/Pinball/tree/develop',
    sourcePrivate: true,
  },
  {
    id: 'ssa-festival',
    title: '東京大学アニメーション研究会：学園祭企画',
    category: 'プロジェクト',
    date: '2023 − 現在',
    description: '声優やアニメ関係者を招く学園祭企画に、PA・Web担当として参加。音響やスライド投影、公式サイトの制作など、技術面の運営を担当しました。',
    highlight: '脚本担当や司会者など、役割を超えた密な連携を心がけ、演出意図に合わせた音響・スライドの運用を通じて、演出の質を高めました。',
    technologies: ['HTML', 'CSS', 'Google Apps Script（GAS）'],
    eventUrl: 'https://ssa.sakura.ne.jp/festival/hista.html',
  },
  {
    id: 'ssa-bulletin',
    title: '東京大学アニメーション研究会：会報の編集・制作',
    category: '制作物',
    date: '2023',
    description: '編集担当として、コミックマーケットでの頒布に向けた会報を制作しました。',
    role: '記事の募集・取りまとめ、誌面構成、校正、レイアウト、入稿データの作成・入稿まで、編集・制作全体を担当',
    highlight: '初めて見る人にも手に取ってもらえるよう、わかりやすい誌面構成や、目を引く表紙・コーナーづくりに取り組みました。',
    technologies: ['Word', 'Canva'],
  },
];

export interface HistoryEntry {
  date: string;
  title: string;
  topic?: string;
  description?: string;
  url?: string;
  linkLabel?: string;
}

// 新しい項目を上に追加します。不要なセクションは [] にすると非表示になります。
export const news: HistoryEntry[] = [];
export const education: HistoryEntry[] = [
  {
    date: '2026.04 − 現在',
    title: '東京大学大学院 工学系研究科 電気系工学専攻 修士課程',
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
export const experience: HistoryEntry[] = [
  {
    date: '2026.08 − 2026.09',
    title: '研究開発インターンシップ、NTT株式会社',
    description: '映像AI推論ハードウェアにおける演算精度最適化',
  },
  {
    date: '2026.07 − 2026.08',
    title: '開発インターン、株式会社フィックスターズ',
    description: 'VLAモデルのハードウェアアクセラレータ向け開発',
  },
  {
    date: '2026.07 − 2026.08',
    title: 'ティーチングアシスタント, 東京大学',
    description: '学部3年生向け実験 アナログ回路の指導補助を担当',
  },
];
export interface Research {
  title: string;
  description: string;
  conference: { name: string; status: string; url: string };
  image?: string;
  imageAlt?: string;
  repositoryUrl?: string;
  repositoryPrivate?: boolean;
}

// 非公開リポジトリもリンクできます。repositoryPrivate で表示を区別します。
export const research: Research[] = [
  {
    title: 'Liquid Neural Networksの推論高速化とメモリセントリックコンピューティング',
    description: 'ロボットのリアルタイム制御に向けて、不揮発性メモリを中心としたLiquid Neural Networksの推論アクセラレータを提案しました。ロボットの模倣学習を用い、量子化やデバイス誤差が制御性能に与える影響を評価しました。',
    conference: { name: 'AICAS 2026', status: '発表済み', url: 'https://2026.ieee-aicas.org/' },
  },
  {
    title: 'VLAモデルによるロボット制御の頑健性向上',
    description: 'VLA（Vision-Language-Action）モデルを用いたロボット制御において、外乱や環境の変化に対応する手法を研究しています。査読中のため、手法の詳細は非公開です。',
    conference: { name: 'ICRA 2027', status: '投稿済み', url: 'https://2027.ieee-icra.org/' },
  },
];

export interface Publication {
  id: string;
  category: '国際学会' | '国内学会';
  title: string;
  authors?: string[];
  venue: string;
  venueUrl?: string;
  date?: string;
  role?: string;
  status: string;
  summary?: string;
  review?: string;
  paperId?: string;
  url?: string;
  repositoryUrl?: string;
  repositoryPrivate?: boolean;
}

export const publications: Publication[] = [
  {
    id: 'aicas-lnn',
    category: '国際学会',
    title: 'NV-Memory Centric Liquid Neural Network Accelerator for Reflexive Robotic Control',
    authors: ['Yuya Yamamoto', 'Naoko Misawa', 'Chihiro Matsui', 'Ken Takeuchi'],
    venue: 'The 8th IEEE International Conference on Artificial Intelligence Circuits and Systems (AICAS 2026)',
    venueUrl: 'https://2026.ieee-aicas.org/',
    date: '2026.09.16',
    role: '主著',
    status: '発表済み',
    // hardware-aware-liquid-policies/README.md と docs/EXPERIMENTS.md に基づく概要案。
    // AICAS原稿は未確認のため、論文固有の数値・速度向上率は記載していません。
    summary: 'ロボットのリアルタイム制御に向けて、不揮発性メモリを中心としたLiquid Neural Networkの推論アクセラレータを提案しました。模倣学習によるロボット操作タスクを用い、演算ブロックごとの量子化やReRAMのデバイス誤差が制御性能に与える影響を評価し、ハードウェア制約下でのモデル規模と制御性能の関係を明らかにしました。',
  },
  {
    id: 'aicas-kv-cache',
    category: '国際学会',
    title: 'KV Cache Management for Block Diffusion Language Models on Multi-Level NV-Memory',
    authors: ['Masafumi Higashi', 'Shota Suzuki', 'Yuya Yamamoto', 'Naoko Misawa', 'Chihiro Matsui', 'Ken Takeuchi'],
    venue: 'The 8th IEEE International Conference on Artificial Intelligence Circuits and Systems (AICAS 2026)',
    venueUrl: 'https://2026.ieee-aicas.org/',
    date: '2026.09.16',
    role: '共著',
    status: '発表済み',
    paperId: '1571264636',
  },
  {
    id: 'design-gaia-lnn',
    category: '国内学会',
    title: '不揮発性メモリを中心としたハードウェアによるLiquid Neural Networkベースのリアルタイムロボット制御の高速化',
    authors: ['山本 湧也', '三澤 奈央子', '松井 千尋', '竹内 健'],
    venue: 'デザインガイア',
    status: '発表予定',
    review: '査読なし',
  },
];
export const awards: HistoryEntry[] = [
  {
    date: '2026.08',
    title: 'Physical AI Robot Challenge 2026（PARC 2026）予選突破',
    url: '#parc2026',
    linkLabel: 'プロジェクト紹介',
  },
  {
    date: '2026.03',
    title: '優秀卒論賞・学科長特別賞',
    description: '卒業研究に対する受賞。',
  },
];

// 資格は合格・取得年月、語学スコアは受験年月を記載します。
export const qualifications: HistoryEntry[] = [
  {
    date: '2025.07',
    title: '応用情報技術者試験 合格',
  },
  {
    date: '2024.12',
    title: '基本情報技術者試験 合格',
  },
  {
    date: '2022.09',
    title: '普通自動車第一種運転免許 取得',
  },
];
