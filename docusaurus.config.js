// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'From Dirty to Clean',
	tagline: 'From Dirty to Clean',
	url: 'https://clean.fennex.dev',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'jjzcru', // Usually your GitHub org/user name.
	projectName: 'clean-architecture-docusaurus', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es'],
		localeConfigs: {
			en: {
				label: 'English',
				htmlLang: 'en-US',
				path: 'en',
			},
			// You can omit a locale (e.g. fr) if you don't need to override the defaults
			es: {
				label: 'Spanish',
				htmlLang: 'es-419',
				path: 'es',
			},
		},
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Clean Architecture',
				logo: {
					alt: 'Clean Architecture Logo',
					src: 'img/logo.svg',
					srcDark: 'img/logo_dark.svg',
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Content',
					},
					{
						href: 'https://github.com/jjzcru/clean-architecture-docusaurus',
						label: 'GitHub',
						position: 'right',
					},
					{
						type: 'localeDropdown',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Content',
								to: '/docs/intro',
							},
							{
								label: 'S.O.L.I.D.',
								to: '/docs/category/solid',
							},
							{
								label: 'Design Patterns',
								to: '/docs/category/design-patterns',
							},
							{
								label: 'The Twelve-Factor App',
								to: '/docs/twelve-factor-app',
							},
							{
								label: 'Clean Architecture',
								to: '/docs/category/clean-architecture',
							},
							{
								label: 'Git',
								to: '/docs/category/git',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Medium',
								href: 'https://medium.com/@jjzcru',
							},
							{
								label: 'LinkedIn',
								href: 'https://www.linkedin.com/in/jjzcru/',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/jjzcru',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: 'https://medium.com/@jjzcru',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/jjzcru/clean-architecture-docusaurus',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} From Dirty to Clean, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				additionalLanguages: ['java'],
			},
		}),
};

module.exports = config;
