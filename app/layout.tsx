import type { Metadata, Viewport } from "next";
import {
	Google_Sans_Code,
	Inter,
	M_PLUS_1_Code,
	Noto_Sans_JP,
} from "next/font/google";
import { Provider } from "@/components/ui/provider";

if (!process.env.BASE_URL) throw new Error("BASE_URL変数がないです");

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});
const notoSansJP = Noto_Sans_JP({
	subsets: ["latin"],
	variable: "--font-noto-sans-jp",
});
const googleSansCode = Google_Sans_Code({
	subsets: ["latin"],
	variable: "--font-google-sans-code",
});
const mPlus1Code = M_PLUS_1_Code({
	subsets: ["latin"],
	variable: "--font-m-plus-1-code",
});

export const metadata: Metadata = {
	metadataBase: new URL(process.env.BASE_URL),
	title: "Just Fucking Use ChakraUI No Tailwind",
	description: "when you use React.",
	icons: "/chakra-ui/favicon.ico",
	openGraph: {
		type: "website",
		images: "/chakra-ui/logomark-colored@2x.png",
		siteName: "Just Fucking Use ChakraUI No Tailwind when you use React.",
	},
	twitter: {
		card: "summary",
	},
};

export const viewport: Viewport = {
	themeColor: "#14b8a6",
};

export default ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<html
		lang="ja"
		suppressHydrationWarning
		className={`${inter.variable} ${notoSansJP.variable} ${googleSansCode.variable} ${mPlus1Code.variable}`}
	>
		<body>
			<Provider>{children}</Provider>
		</body>
	</html>
);
