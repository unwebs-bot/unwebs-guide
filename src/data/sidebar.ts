export interface SidebarItem {
	slug: string;
	label: string;
}
export interface SidebarGroup {
	label: string;
	items: SidebarItem[];
}
export interface SidebarSection {
	label: string;
	groups: SidebarGroup[];
}

export const sections: SidebarSection[] = [
	{
		label: '아임웹 운영',
		groups: [
			{
				label: '도메인·SSL·메일',
				items: [
					{ slug: 'imweb-domain-connect', label: '내 도메인 연결하기' },
					{ slug: 'imweb-ssl-install', label: 'SSL 보안서버 설치' },
					{ slug: 'imweb-mail-setup', label: '메일 발송 설정' },
					{ slug: 'imweb-kakao-share', label: '카카오·SNS 공유 이미지' },
				],
			},
			{
				label: '사이트 시작 & 기본',
				items: [{ slug: 'imweb-getting-started', label: '처음 시작하기' }],
			},
			{
				label: '메뉴·페이지 수정',
				items: [
					{ slug: 'imweb-menu-management', label: '메뉴 다루기' },
					{ slug: 'imweb-widget-section', label: '위젯·섹션 다루기' },
				],
			},
			{
				label: '디자인 모드 운영',
				items: [
					{ slug: 'imweb-design-customization', label: '공통 디자인·폰트' },
					{ slug: 'imweb-mobile-design', label: '모바일 편집' },
					{ slug: 'imweb-popup-banner', label: '팝업·비주얼섹션' },
					{ slug: 'imweb-renewal-mode', label: '리뉴얼 중 사이트 가리기' },
				],
			},
			{
				label: '게시판·입력폼·회원',
				items: [{ slug: 'imweb-form-management', label: '입력폼 운영' }],
			},
			{
				label: 'SEO·검색노출',
				items: [
					{ slug: 'imweb-seo-basics', label: 'SEO 6단계 체크리스트' },
					{ slug: 'imweb-aeo-optimization', label: 'AI 검색(AEO/GEO) 대응' },
				],
			},
			{
				label: '마케팅·통계·알림톡',
				items: [
					{ slug: 'imweb-google-analytics', label: 'GA4 설치' },
					{ slug: 'imweb-meta-pixel', label: '메타 픽셀 설치' },
					{ slug: 'imweb-utm-tracking', label: 'UTM 추적' },
					{ slug: 'imweb-alimtalk-sms', label: '알림톡·SMS 발송' },
					{ slug: 'imweb-analytics-dashboard', label: '통계 대시보드' },
				],
			},
		],
	},
	{
		label: 'SEO · AEO',
		groups: [
			{
				label: 'SEO 기초',
				items: [
					{ slug: 'seo-fundamentals', label: 'SEO란? 검색엔진 동작 원리' },
					{ slug: 'seo-keyword-research', label: '키워드 리서치' },
					{ slug: 'seo-onpage', label: '온페이지 SEO' },
				],
			},
			{
				label: '기술 SEO',
				items: [
					{ slug: 'seo-technical', label: '기술 SEO 체크리스트' },
					{ slug: 'seo-mobile-cwv', label: 'Core Web Vitals + 모바일' },
				],
			},
			{
				label: '검색엔진별',
				items: [
					{ slug: 'seo-naver-deep', label: '네이버 SEO 심화' },
					{ slug: 'seo-google-deep', label: '구글 SEO 심화' },
					{ slug: 'seo-local', label: '로컬 SEO (병원·지역업)' },
				],
			},
			{
				label: 'AEO · AI 검색',
				items: [
					{ slug: 'aeo-fundamentals', label: 'AEO/GEO란?' },
					{ slug: 'aeo-chatgpt', label: 'ChatGPT·Perplexity 노출' },
					{ slug: 'aeo-llms-txt', label: 'llms.txt 작성법' },
					{ slug: 'aeo-faq-schema', label: 'FAQ schema 추가' },
				],
			},
			{
				label: '콘텐츠·링크',
				items: [
					{ slug: 'seo-content-strategy', label: '검색 잘되는 콘텐츠' },
					{ slug: 'seo-link-building', label: '백링크 전략' },
				],
			},
		],
	},
];

sections.push({
	label: 'WordPress 운영',
	groups: [
		{
			label: '입문',
			items: [
				{ slug: 'wp-getting-started', label: '처음 시작하기' },
				{ slug: 'wp-dashboard-tour', label: '대시보드 둘러보기' },
				{ slug: 'wp-user-permissions', label: '사용자·권한 관리' },
				{ slug: 'wp-backup-basics', label: '백업 시작하기' },
				{ slug: 'wp-security-essentials', label: '보안 기초 7가지' },
			],
		},
		{
			label: '콘텐츠 관리',
			items: [
				{ slug: 'wp-post-vs-page', label: '글 vs 페이지 차이' },
				{ slug: 'wp-categories-tags', label: '카테고리·태그 운영' },
				{ slug: 'wp-media-library', label: '미디어 라이브러리' },
				{ slug: 'wp-gutenberg-editor', label: 'Gutenberg 에디터' },
				{ slug: 'wp-menu-management', label: '메뉴 만들기' },
				{ slug: 'wp-widgets-sidebar', label: '위젯·사이드바' },
				{ slug: 'wp-comments-management', label: '댓글 관리' },
				{ slug: 'wp-permalink-structure', label: '퍼머링크 구조' },
			],
		},
		{
			label: '테마·디자인',
			items: [
				{ slug: 'wp-theme-install', label: '테마 설치·전환' },
				{ slug: 'wp-customizer', label: '테마 커스터마이저' },
				{ slug: 'wp-child-theme', label: '자식 테마 만들기' },
				{ slug: 'wp-theme-troubleshoot', label: '테마 충돌 해결' },
			],
		},
		{
			label: '플러그인',
			items: [
				{ slug: 'wp-plugin-essentials', label: '필수 플러그인 10선' },
				{ slug: 'wp-rankmath-seo', label: 'Rank Math SEO 설정' },
				{ slug: 'wp-elementor', label: 'Elementor 다루기' },
				{ slug: 'wp-contact-forms', label: '폼 플러그인 비교' },
				{ slug: 'wp-cache-speed', label: '캐시·속도 최적화' },
				{ slug: 'wp-plugin-conflicts', label: '플러그인 충돌 디버깅' },
			],
		},
		{
			label: '운영·문제해결',
			items: [
				{ slug: 'wp-automated-backup', label: '정기 백업 자동화' },
				{ slug: 'wp-security-hardening', label: '보안 강화 가이드' },
				{ slug: 'wp-speed-optimization', label: '속도 최적화 7단계' },
				{ slug: 'wp-ssl-setup', label: 'SSL 적용' },
				{ slug: 'wp-domain-migration', label: '도메인 이전' },
				{ slug: 'wp-white-screen-debug', label: '흰화면·관리자 접속 불가' },
				{ slug: 'wp-update-safe', label: 'WP 업데이트 안전하게' },
			],
		},
		{
			label: 'SEO·통계',
			items: [
				{ slug: 'wp-google-analytics', label: 'GA4 설치' },
				{ slug: 'wp-search-console', label: 'Search Console 연동' },
				{ slug: 'wp-seo-checklist', label: 'SEO 점검 체크리스트' },
			],
		},
	],
});

sections.push({
	label: '기획 & 디자인',
	groups: [
		{
			label: '기획',
			items: [
				{ slug: 'planning-sitemap', label: '사이트맵·정보 구조 설계' },
				{ slug: 'planning-wireframe', label: '와이어프레임 도구' },
				{ slug: 'planning-requirements', label: '의뢰 전 요구사항 정리' },
			],
		},
		{
			label: '디자인 시스템',
			items: [
				{ slug: 'design-system-basics', label: '디자인 시스템·토큰' },
				{ slug: 'design-color-typo', label: '컬러·타이포 잡는 법' },
			],
		},
		{
			label: '디자인 원칙',
			items: [
				{ slug: 'design-mobile-first', label: '모바일 우선 디자인' },
				{ slug: 'design-accessibility', label: '웹 접근성 기초' },
				{ slug: 'design-content-strategy', label: '콘텐츠 우선 디자인' },
			],
		},
		{
			label: '실전 패턴',
			items: [
				{ slug: 'design-portfolio-style', label: '업종별 디자인 패턴' },
				{ slug: 'design-reference-sites', label: '참고 사이트 찾는 법' },
			],
		},
	],
});

// 호환용 — 기존 컴포넌트가 sidebar로 import 중
export const sidebar = sections[0].groups;
