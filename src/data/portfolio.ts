import type { ImageMetadata } from 'astro';
import c102Cover from '../../img/C102.jpg';
import c103Cover from '../../img/C103.jpg';

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
  images?: { src: ImageMetadata; alt: string; caption: string }[];
  demoUrl?: string;
  demoLabel?: string;
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
  introduction: 'Physical AIの推論高速化に向けた、ソフトウェア・ハードウェア協調設計に関する研究に取り組んでいます。',
  about: [
    'また、アニメやゲームを中心としたエンターテインメントに小さいころから親しんでおり、大学ではアニメーション研究会に所属し、アニメの魅力を伝えるため、会報制作や学園祭企画に取り組んできました。',
    '旅行も好きで、アニメの舞台になった聖地を訪れたり、冬にはスキーを楽しんだりしています。',
  ],
  githubUrl: 'https://github.com/yuuharu11',
  // 公開してよいメールアドレスを設定すると、メールリンクが表示されます。
  email: 'yuya.yamamoto@co-design.t.u-tokyo.ac.jp',
  interests: ['Physical AI', 'AI Accelerator', 'Computation-in-Memory'],
};

export const projects: Project[] = [
  {
    id: 'parc2026',
    title: 'PARC 2026：Physical AI開発コンペティション',
    category: 'コンペティション',
    date: '2026.08',
    result: '予選突破',
    description: 'VLAモデルの汎化能力向上を競うPhysical AI Robot Challenge 2026に参加しました。VLAモデルの学習と評価を通じて、環境の変化への対応と安定したタスク遂行を両立するモデル開発に取り組み、予選を突破しました。',
    highlight: '事前学習済みπ0.5にLoRAによる追加学習を行い、成功率・衝突・軌道の滑らかさなどの評価指標を踏まえて、効果的な学習条件を検討しました。タスクごとのデータ配分や学習済み重みの統合を調整し、評価結果をもとにモデルを改善しました。',
    technologies: ['Python', 'JAX', 'openpi', 'LoRA', 'Docker'],
    sourceUrl: 'https://github.com/yuuharu11/PARC2026_pre',
    competitionUrl: 'https://weblab.t.u-tokyo.ac.jp/physical-ai-competition/',
  },
  {
    id: 'airobo-project',
    title: '人工知能応用プロジェクト：動的な物体把持のためのVLA制御',
    category: 'プロジェクト・チーム',
    date: '2026.06',
    description: '人工知能応用プロジェクトにおいて、ベルトコンベア上を動く物体をロボットアームで掴み、箱へ移すモデルをチーム開発しました。SO-101の実機操作とデータ収集、VLAモデル（SmolVLA）の追加学習、MuJoCo上での動作検証を行う環境を整備しました。',
    role: '実機の動作環境に合わせ、ロボットアーム、コンベア、物体、箱を配置したシミュレーション環境を構築しました。',
    highlight: '物体の位置・速度から推論遅延を考慮した将来位置を予測し、VLAへの入力を補正することで、動く物体の把持に対応する手法を提案しました。また、シミュレーション環境で教師方策を用いて学習用データセットを作成し、学習データを増やすことで効率的に性能向上を図りました。',
    technologies: ['Python', 'LeRobot', 'MuJoCo', 'SO-101'],
    sourceUrl: 'https://github.com/yuuharu11/AIRobo-project',
  },
  {
    id: 'pinball',
    title: 'Pinball：ステージクリア型ピンボールゲーム',
    category: '制作物・チーム',
    date: '2024',
    description: 'Windows XPのピンボールを意識したピンボールゲームを友人と2人で共同開発しました。左右のタップでフリッパーを操作し、ボールをゴールへ導くシンプルなゲームです。全40ステージの攻略と3個のボールで到達ステージ数を競うスコアモードを楽しめます。',
    highlight: '風車・バンパー・ワープなどのギミックを組み合わせ、ボールの動きや攻略方法を楽しめるステージ作りを意識しました。左右のタップだけで直感的に操作でき、初めてでも遊びやすいゲームを目指しました。',
    technologies: ['Unity', 'C#'],
    sourceUrl: 'https://github.com/yuuharu11/Pinball_public',
    demoUrl: 'https://unityroom.com/games/pinball_challenge',
    demoLabel: 'unityroom',
  },
  {
    id: 'ssa-festival',
    title: '東京大学アニメーション研究会：学園祭企画',
    category: 'プロジェクト・チーム',
    date: '2022 − 現在',
    description: '大学の学園祭企画として声優やアニメ関係者を招くトークショーイベントに、PAとして技術面を支える役割で複数回参加してきました。',
    role: 'イベント当日は音響・スライド投影などの技術サポートを担当しました。事前準備では、イベント公式サイトや抽選・メール自動送信ツールの制作にも携わりました。',
    highlight: '脚本担当や司会者など、役割を超えた密な連携を心がけ、演出意図に合わせた音響・スライドの運用を通じて、演出の質を高めました。',
    technologies: ['HTML', 'CSS', 'Google Apps Script（GAS）'],
    eventUrl: 'https://ssa.sakura.ne.jp/festival/hista.html',
  },
  {
    id: 'ssa-bulletin',
    title: '東京大学アニメーション研究会：会報制作',
    category: '制作物',
    date: '2023',
    description: '編集担当としてコミックマーケットでの頒布に向けた会報を制作しました。',
    role: '記事の募集から会報の制作・入稿まで、制作全体を担当しました。',
    highlight: '初めて見る人にも手に取ってもらえるよう、わかりやすい誌面構成や、目を引く表紙・コーナーづくりに取り組みました。',
    technologies: ['Word', 'Canva'],
    images: [
      { src: c102Cover, alt: '東京大学アニメーション研究会のC102会報の表紙', caption: 'C102 会報表紙' },
      { src: c103Cover, alt: '東京大学アニメーション研究会のC103会報の表紙', caption: 'C103 会報表紙' },
    ],
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
    title: '研究開発インターンシップ, NTT株式会社',
    topic: '高精細映像AI推論ハードウェアにおける演算精度最適化',
  },
  {
    date: '2026.07 − 2026.08',
    title: '研究開発インターンシップ, 株式会社フィックスターズ',
    description: '新興アクセラレータに向けたVLAの研究開発',
  },
  {
    date: '2026.07 − 2026.08',
    title: 'ティーチングアシスタント, 東京大学',
    description: '学部3年生向け実験「アナログ回路の指導補助」を担当',
  },
];
export interface Research {
  title: string;
  description: string;
  conference: { name: string; status: string; url: string };
  image?: string;
  imageAlt?: string;
  researchPageUrl?: string;
  researchPagePreparing?: boolean;
}

// 研究ページを公開したら researchPageUrl を設定し、準備中の表示を外します。
export const research: Research[] = [
  {
    title: 'Liquid Neural Networksの推論高速化とメモリセントリックコンピューティング',
    description: 'ロボットのリアルタイム制御に向けて、低レベル制御に注目し、不揮発性メモリを中心としたLiquid Neural Networksの推論アクセラレータを提案しました。ロボットが動作するシミュレーション環境を用いて学習・推論を行い、エネルギー効率の大幅な向上を示すとともに、量子化やデバイス誤差が制御性能に与える影響を評価しました。',
    conference: { name: 'AICAS 2026', status: '発表済み', url: 'https://2026.ieee-aicas.org/' },
    researchPagePreparing: true,
  },
  {
    title: 'VLAモデルによるロボット制御の頑健性向上',
    description: 'VLA（Vision-Language-Action）モデルを用いたロボット制御において、外乱や環境の変化に対応する手法を研究しています。査読中のため、手法の詳細は現在非公開です。',
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
    paperId: '1571267829',
    // hardware-aware-liquid-policies/README.md と docs/EXPERIMENTS.md に基づく概要案。
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
    venue: 'デザインガイア2026',
    venueUrl: 'https://www.ipsj.or.jp/kenkyukai/event/sldm213.html',
    status: '発表予定',
    review: '査読なし',
  },
];
export const awards: HistoryEntry[] = [
  {
    date: '2026.08',
    title: 'Physical AI Robot Challenge 2026 予選突破',
    url: '#parc2026',
    linkLabel: 'プロジェクト紹介',
  },
  {
    date: '2026.03',
    title: '卒業研究に対し、優秀卒論賞・学科長特別賞を受賞',
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
];
