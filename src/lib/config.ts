// Configuration file for environment variables
export const config = {
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
	rssApiUrl:
		process.env.NEXT_PUBLIC_RSS_API_URL ||
		"https://api.rss2json.com/v1/api.json",
	externalLinks: {
		github: process.env.NEXT_PUBLIC_GITHUB_URL || "",
		linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
		twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "",
		medium: process.env.NEXT_PUBLIC_MEDIUM_URL || "",
		mediumRss: process.env.NEXT_PUBLIC_MEDIUM_RSS_URL || "",
	},
} as const;
