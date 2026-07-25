export type SupportedLanguage = 'en-US' | 'en-UK' | 'de' | 'fr' | 'ja' | 'es';

export interface LanguageOption {
  code: SupportedLanguage;
  name: string;
  flag: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'en-US', name: 'English (US)', flag: '🇺🇸' },
  { code: 'en-UK', name: 'English (UK)', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch (Germany)', flag: '🇩🇪' },
  { code: 'fr', name: 'Français (France)', flag: '🇫🇷' },
  { code: 'ja', name: '日本語 (Japan)', flag: '🇯🇵' },
  { code: 'es', name: 'Español (LatAm)', flag: '🇪🇸' },
];

export const TRANSLATIONS: Record<SupportedLanguage, Record<string, string>> = {
  'en-US': {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.divisions': 'Divisions',
    'nav.careers': 'Careers',
    'nav.resumeAnalyzer': 'Resume Analyzer',
    'nav.jobMatches': 'AI Job Matches',
    'nav.interviewStudio': 'Interview Studio',
    'nav.database': 'Database',
    'nav.contact': 'Contact',
    'nav.applyNow': 'Apply Now',
    'nav.search': 'Search...',
    'nav.hiringBadge': 'Hiring All Fields',
    'nav.topNotice': 'Unified Portal with AI Resume Analyzer, ATS Evaluation & Job Matching.',
    'nav.launchAnalyzer': 'Launch Resume Analyzer',

    // Hero
    'hero.title': 'We Are Hiring Across ALL Fields & Disciplines',
    'hero.subtitle': 'Nexus Dynamics is expanding its global workforce of 124,000+. Explore open opportunities in Software & AI, Engineering, Finance, Biotech, Marketing, HR, Legal, Operations, Sales, and Design.',
    'hero.aiButton': 'AI Resume Analyzer & Suitable Job Matcher',
    'hero.openJobs': '200+ Open Jobs',
    'hero.operatingCountries': '65+ Operating Countries',
    'hero.globalEmployer': 'Top 10 Global Employer 2026',

    // Analyzer
    'analyzer.title': 'Resume Upload & Intelligent Analyzer',
    'analyzer.subtitle': 'Upload your resume or pick a preset candidate to trigger instant ATS scoring & company eligibility matching.',
    'analyzer.uploadTab': 'Upload File',
    'analyzer.pasteTab': 'Paste Text',
    'analyzer.presetTab': 'Demo Presets',
    'analyzer.dragDrop': 'Drag & Drop your Resume here',
    'analyzer.browse': 'Browse File from Computer',
    'analyzer.downloadPdf': 'Download PDF',
    'analyzer.mailReport': 'Mail Report',
    'analyzer.saveCandidate': 'Save Candidate Data',
    'analyzer.atsScore': 'ATS System Compatibility',
    'analyzer.strengths': 'Key Resume Strengths',
    'analyzer.improvements': 'Recommended Action Items',

    // Job Matches
    'jobMatches.title': 'Job Match & Official Company Eligibility Results',
    'jobMatches.subtitle': 'Calculates skills overlap, required degree compliance, and minimum experience thresholds.',
    'jobMatches.skillGapTitle': 'Top Identified Skill Gaps Across Market',

    // Interview Studio
    'interview.title': 'Interview Question Generator & Practice Mode',
    'interview.subtitle': 'Questions dynamically tailored to candidate skills.',
    'interview.practice': 'Practice Response',

    // Candidate Database
    'db.title': 'Candidate Records & Evaluation Database',
    'db.subtitle': 'Store and retrieve candidate evaluations, extracted skill profiles, and hiring decisions.',
    'db.searchPlaceholder': 'Search candidates by name or skill...'
  },

  'en-UK': {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.divisions': 'Divisions',
    'nav.careers': 'Careers',
    'nav.resumeAnalyzer': 'CV Analyser',
    'nav.jobMatches': 'AI Job Matches',
    'nav.interviewStudio': 'Interview Studio',
    'nav.database': 'Database',
    'nav.contact': 'Contact',
    'nav.applyNow': 'Apply Now',
    'nav.search': 'Search...',
    'nav.hiringBadge': 'Hiring All Fields',
    'nav.topNotice': 'Unified Portal with AI CV Analyser, ATS Evaluation & Job Matching.',
    'nav.launchAnalyzer': 'Launch CV Analyser',

    // Hero
    'hero.title': 'We Are Hiring Across ALL Fields & Disciplines',
    'hero.subtitle': 'Nexus Dynamics is expanding its global workforce of 124,000+. Explore open opportunities in Software & AI, Engineering, Finance, Biotech, Marketing, HR, Legal, Operations, Sales, and Design.',
    'hero.aiButton': 'AI CV Analyser & Suitable Job Matcher',
    'hero.openJobs': '200+ Open Roles',
    'hero.operatingCountries': '65+ Operating Countries',
    'hero.globalEmployer': 'Top 10 Global Employer 2026',

    // Analyzer
    'analyzer.title': 'CV Upload & Intelligent Analyser',
    'analyzer.subtitle': 'Upload your CV or pick a preset candidate to trigger instant ATS scoring & company eligibility matching.',
    'analyzer.uploadTab': 'Upload File',
    'analyzer.pasteTab': 'Paste Text',
    'analyzer.presetTab': 'Demo Presets',
    'analyzer.dragDrop': 'Drag & Drop your CV here',
    'analyzer.browse': 'Browse File from Computer',
    'analyzer.downloadPdf': 'Download PDF',
    'analyzer.mailReport': 'Mail Report',
    'analyzer.saveCandidate': 'Save Candidate Data',
    'analyzer.atsScore': 'ATS System Compatibility',
    'analyzer.strengths': 'Key CV Strengths',
    'analyzer.improvements': 'Recommended Action Items',

    // Job Matches
    'jobMatches.title': 'Job Match & Official Company Eligibility Results',
    'jobMatches.subtitle': 'Calculates skills overlap, required degree compliance, and minimum experience thresholds.',
    'jobMatches.skillGapTitle': 'Top Identified Skill Gaps Across Market',

    // Interview Studio
    'interview.title': 'Interview Question Generator & Practice Mode',
    'interview.subtitle': 'Questions dynamically tailored to candidate skills.',
    'interview.practice': 'Practice Response',

    // Candidate Database
    'db.title': 'Candidate Records & Evaluation Database',
    'db.subtitle': 'Store and retrieve candidate evaluations, extracted skill profiles, and hiring decisions.',
    'db.searchPlaceholder': 'Search candidates by name or skill...'
  },

  'de': {
    // Nav
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.divisions': 'Bereiche',
    'nav.careers': 'Karriere',
    'nav.resumeAnalyzer': 'Lebenslauf-Analyse',
    'nav.jobMatches': 'KI-Stellenangebote',
    'nav.interviewStudio': 'Interview-Studio',
    'nav.database': 'Datenbank',
    'nav.contact': 'Kontakt',
    'nav.applyNow': 'Jetzt bewerben',
    'nav.search': 'Suchen...',
    'nav.hiringBadge': 'Wir stellen ein',
    'nav.topNotice': 'Zentrales Portal mit KI-Lebenslauf-Analyse, ATS-Bewertung und Matching.',
    'nav.launchAnalyzer': 'Lebenslauf-Analyse starten',

    // Hero
    'hero.title': 'Wir stellen weltweit in allen Fachbereichen ein',
    'hero.subtitle': 'Nexus Dynamics erweitert seine weltweite Belegschaft von 124.000+ Mitarbeitern. Entdecken Sie offene Stellen in Software & KI, Ingenieurwesen, Finanzen, Biotech, Marketing und Design.',
    'hero.aiButton': 'KI-Lebenslauf-Analyse & Job-Matcher',
    'hero.openJobs': '200+ Offene Stellen',
    'hero.operatingCountries': '65+ Länder',
    'hero.globalEmployer': 'Top 10 Arbeitgeber 2026',

    // Analyzer
    'analyzer.title': 'Lebenslauf-Upload & Intelligenter Analyzer',
    'analyzer.subtitle': 'Laden Sie Ihren Lebenslauf hoch für sofortiges ATS-Scoring und Eignungs-Matching.',
    'analyzer.uploadTab': 'Datei hochladen',
    'analyzer.pasteTab': 'Text einfügen',
    'analyzer.presetTab': 'Demo-Profile',
    'analyzer.dragDrop': 'Lebenslauf hierher ziehen & ablegen',
    'analyzer.browse': 'Datei vom Computer auswählen',
    'analyzer.downloadPdf': 'PDF herunterladen',
    'analyzer.mailReport': 'Bericht senden',
    'analyzer.saveCandidate': 'Bewerber speichern',
    'analyzer.atsScore': 'ATS-System-Kompatibilität',
    'analyzer.strengths': 'Wichtigste Stärken',
    'analyzer.improvements': 'Empfohlene Optimierungen',

    // Job Matches
    'jobMatches.title': 'Stellen-Matching & Eignungsergebnisse',
    'jobMatches.subtitle': 'Berechnet Fähigkeiten-Überschneidungen und Berufserfahrungsanforderungen.',
    'jobMatches.skillGapTitle': 'Identifizierte Wissenslücken am Markt',

    // Interview Studio
    'interview.title': 'Interview-Fragen-Generator & Übungsmodus',
    'interview.subtitle': 'Dynamisch an die Fähigkeiten des Bewerbers angepasste Fragen.',
    'interview.practice': 'Antwort üben',

    // Candidate Database
    'db.title': 'Bewerber-Datenbank & Bewertungen',
    'db.subtitle': 'Verwalten Sie Bewerberbewertungen und Fähigkeitenprofile.',
    'db.searchPlaceholder': 'Bewerber nach Name oder Skill suchen...'
  },

  'fr': {
    // Nav
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.divisions': 'Divisions',
    'nav.careers': 'Carrières',
    'nav.resumeAnalyzer': 'Analyseur de CV',
    'nav.jobMatches': 'Offres IA Adaptées',
    'nav.interviewStudio': 'Studio d\'Entretien',
    'nav.database': 'Base de Données',
    'nav.contact': 'Contact',
    'nav.applyNow': 'Postuler',
    'nav.search': 'Rechercher...',
    'nav.hiringBadge': 'Recrutement Ouvert',
    'nav.topNotice': 'Portail unifié avec Analyseur de CV IA, Évaluation ATS et Matching.',
    'nav.launchAnalyzer': 'Lancer l\'Analyseur de CV',

    // Hero
    'hero.title': 'Nous recrutons dans TOUS les domaines',
    'hero.subtitle': 'Nexus Dynamics développe son effectif mondial de 124 000+ collaborateurs. Découvrez nos opportunités en Logiciel & IA, Ingénierie, Finance, Biotech, Marketing et Design.',
    'hero.aiButton': 'Analyseur de CV IA & Job Matcher',
    'hero.openJobs': '200+ Postes Ouverts',
    'hero.operatingCountries': '65+ Pays',
    'hero.globalEmployer': 'Top 10 Employeur Mondial 2026',

    // Analyzer
    'analyzer.title': 'Téléchargement & Analyseur Intelligent de CV',
    'analyzer.subtitle': 'Téléchargez votre CV pour obtenir un score ATS instantané et une évaluation de correspondance.',
    'analyzer.uploadTab': 'Fichier',
    'analyzer.pasteTab': 'Coller le Texte',
    'analyzer.presetTab': 'Profils Démo',
    'analyzer.dragDrop': 'Glissez & déposez votre CV ici',
    'analyzer.browse': 'Parcourir les fichiers',
    'analyzer.downloadPdf': 'Télécharger le PDF',
    'analyzer.mailReport': 'Envoyer par e-mail',
    'analyzer.saveCandidate': 'Sauvegarder le Candidat',
    'analyzer.atsScore': 'Compatibilité Système ATS',
    'analyzer.strengths': 'Points Forts du CV',
    'analyzer.improvements': 'Actions Recommandées',

    // Job Matches
    'jobMatches.title': 'Correspondance des Postes & Éligibilité',
    'jobMatches.subtitle': 'Calcule le chevauchement des compétences et la conformité des diplômes.',
    'jobMatches.skillGapTitle': 'Principales Lacunes Identifiées',

    // Interview Studio
    'interview.title': 'Générateur de Questions d\'Entretien & Entraînement',
    'interview.subtitle': 'Questions personnalisées selon les compétences du candidat.',
    'interview.practice': 'S\'entraîner',

    // Candidate Database
    'db.title': 'Base de Données Candidats & Évaluations',
    'db.subtitle': 'Conservez et consultez les évaluations de candidats et leurs compétences.',
    'db.searchPlaceholder': 'Rechercher par nom ou compétence...'
  },

  'ja': {
    // Nav
    'nav.home': 'ホーム',
    'nav.about': '会社概要',
    'nav.divisions': '事業部門',
    'nav.careers': '採用情報',
    'nav.resumeAnalyzer': '履歴書AI解析',
    'nav.jobMatches': 'AI求人マッチ',
    'nav.interviewStudio': '面接練習スタジオ',
    'nav.database': '候補者DB',
    'nav.contact': 'お問い合わせ',
    'nav.applyNow': '今すぐ応募',
    'nav.search': '検索...',
    'nav.hiringBadge': '全職種募集中',
    'nav.topNotice': 'AI履歴書解析、ATSスコア診断、適性求人マッチング統合ポータル。',
    'nav.launchAnalyzer': '履歴書AI解析を開始',

    // Hero
    'hero.title': '全分野・全職種でグローバル採用中',
    'hero.subtitle': 'Nexus Dynamicsは124,000人以上の世界的な労働力を拡大しています。ソフトウェア＆AI、エンジニアリング、金融、バイオ、マーケティング、デザインの求人をチェック。',
    'hero.aiButton': 'AI履歴書解析＆適性求人マッチング',
    'hero.openJobs': '200以上の求人',
    'hero.operatingCountries': '65ヶ国以上で展開',
    'hero.globalEmployer': '2026年グローバル優良企業トップ10',

    // Analyzer
    'analyzer.title': '履歴書アップロード＆AIインテリジェント解析',
    'analyzer.subtitle': '履歴書をアップロードして、即座にATSスコア診断と企業適合度をチェック。',
    'analyzer.uploadTab': 'ファイルをアップロード',
    'analyzer.pasteTab': 'テキスト貼り付け',
    'analyzer.presetTab': 'デモ用候補者',
    'analyzer.dragDrop': 'ここに履歴書をドラッグ＆ドロップ',
    'analyzer.browse': 'コンピューターからファイルを選択',
    'analyzer.downloadPdf': 'PDFをダウンロード',
    'analyzer.mailReport': 'レポートを送信',
    'analyzer.saveCandidate': '候補者データを保存',
    'analyzer.atsScore': 'ATSシステム適合度スコア',
    'analyzer.strengths': '主な強み',
    'analyzer.improvements': '推奨される改善アクション',

    // Job Matches
    'jobMatches.title': '求人マッチング＆企業適合性診断結果',
    'jobMatches.subtitle': 'スキル重複率、必要学歴、実務経験年数を自動計算します。',
    'jobMatches.skillGapTitle': '市場で特定された主なスキルギャップ',

    // Interview Studio
    'interview.title': 'AI面接質問ジェネレーター＆練習モード',
    'interview.subtitle': '候補者のスキルに合わせて動的に作成された面接質問。',
    'interview.practice': '回答を練習する',

    // Candidate Database
    'db.title': '候補者レコード＆評価データベース',
    'db.subtitle': '候補者の評価、抽出されたスキルプロファイル、採用判定を管理します。',
    'db.searchPlaceholder': '名前またはスキルで候補者を検索...'
  },

  'es': {
    // Nav
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.divisions': 'Divisiones',
    'nav.careers': 'Carreras',
    'nav.resumeAnalyzer': 'Analizador de CV',
    'nav.jobMatches': 'Emparejamiento IA',
    'nav.interviewStudio': 'Estudio de Entrevistas',
    'nav.database': 'Base de Datos',
    'nav.contact': 'Contacto',
    'nav.applyNow': 'Postular Ahora',
    'nav.search': 'Buscar...',
    'nav.hiringBadge': 'Contratando',
    'nav.topNotice': 'Portal unificado con Analizador de CV con IA, Evaluación ATS y Coincidencias.',
    'nav.launchAnalyzer': 'Iniciar Analizador de CV',

    // Hero
    'hero.title': 'Estamos Contratando en TODAS las Áreas',
    'hero.subtitle': 'Nexus Dynamics está expandiendo su fuerza laboral global de 124,000+. Explora oportunidades en Software e IA, Ingeniería, Finanzas, Biotecnología, Marketing y Diseño.',
    'hero.aiButton': 'Analizador de CV con IA y Coincidencia de Empleo',
    'hero.openJobs': '200+ Empleos Abiertos',
    'hero.operatingCountries': '65+ Países',
    'hero.globalEmployer': 'Top 10 Empleador Global 2026',

    // Analyzer
    'analyzer.title': 'Subida de CV y Analizador Inteligente',
    'analyzer.subtitle': 'Sube tu CV para obtener una puntuación ATS instantánea y evaluar tu elegibilidad.',
    'analyzer.uploadTab': 'Subir Archivo',
    'analyzer.pasteTab': 'Pegar Texto',
    'analyzer.presetTab': 'Perfil de Prueba',
    'analyzer.dragDrop': 'Arrastra y suelta tu CV aquí',
    'analyzer.browse': 'Buscar archivo en la computadora',
    'analyzer.downloadPdf': 'Descargar PDF',
    'analyzer.mailReport': 'Enviar Reporte',
    'analyzer.saveCandidate': 'Guardar Candidato',
    'analyzer.atsScore': 'Compatibilidad del Sistema ATS',
    'analyzer.strengths': 'Fortalezas del CV',
    'analyzer.improvements': 'Acciones Recomendadas',

    // Job Matches
    'jobMatches.title': 'Resultados de Elegibilidad y Coincidencia',
    'jobMatches.subtitle': 'Calcula la coincidencia de habilidades y cumplimiento de requisitos.',
    'jobMatches.skillGapTitle': 'Brechas de Habilidades Identificadas',

    // Interview Studio
    'interview.title': 'Generador de Preguntas y Modo de Práctica',
    'interview.subtitle': 'Preguntas adaptadas dinámicamente a las habilidades del candidato.',
    'interview.practice': 'Practicar Respuesta',

    // Candidate Database
    'db.title': 'Base de Datos de Candidatos y Evaluaciones',
    'db.subtitle': 'Almacena y consulta evaluaciones de candidatos y perfiles de habilidades.',
    'db.searchPlaceholder': 'Buscar por nombre o habilidad...'
  }
};

export function getTranslation(langCode: SupportedLanguage, key: string): string {
  const langDict = TRANSLATIONS[langCode] || TRANSLATIONS['en-US'];
  return langDict[key] || TRANSLATIONS['en-US'][key] || key;
}
