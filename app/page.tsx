import {
	Box,
	type BoxProps,
	Button,
	Card,
	Code,
	type CodeProps,
	Container,
	Em,
	Heading,
	HStack,
	Link,
	Separator,
	Span,
	Strong,
	Text,
} from "@chakra-ui/react";
import OverflowCode from "@/components/overflow-code";
import MyButton from "@/components/ui/button";

const sectionProps: BoxProps = {
	as: "section",
	spaceY: "4",
};
const codeProps: CodeProps = {
	size: "lg",
	whiteSpace: "pre",
	w: "full",
	overflow: "auto",
};

export default () => (
	<Box spaceY="16" colorPalette="teal">
		<Container as="header" maxW="2xl" my="28" spaceY="4">
			<Text color="teal.fg">目を曇らせるな。賢く作れ。</Text>
			<Heading as="h1" size="5xl">
				Just Fucking Use{" "}
				<Span color="teal.fg" bgColor="teal.subtle">
					ChakraUI
				</Span>{" "}
				No Tailwind{" "}
				<Heading as="span" size="2xl">
					when you use React.
				</Heading>
			</Heading>
			<Text>
				<Em>
					Javaの「クラス」名とHTMLの「クラス」名が偶然にも同じ横幅に成長してしまい、超スーパーウルトラワイドモニターを買う羽目になっていませんか？それも今日で終わりです。
				</Em>
			</Text>
		</Container>
		<Container as="main" maxW="2xl" spaceY="8">
			<Box {...sectionProps}>
				<Heading>{"お前の{html|jsx|tsx}は独占禁止法に抵触している"}</Heading>
				<Text>
					貴方はたった1つの属性を何千匹立派な大蛇にまで成長させたか覚えていますか？しかもエディタに拡張機能を入れる必要があるようですね。
				</Text>
				<OverflowCode />
				<Text>
					<Strong>CSSよりはマシです。しかし最悪です。</Strong>
					<br />
					Biome、ESLint
					Stylistic、Prettierはほぼ全ての行で鎮座する大蛇に恐れ慄いてprintWidthのconfigに従わずにフォーマットを終わらせてしまいます。
				</Text>
				<Text>
					人々はそれでも十分だと主張するでしょう;
					「CSSよりはマシ」「CSSよりは書きやすい」？
					<br />
					<Strong>
						愚かで見苦しい苦難に満ちた武勇伝を令和の時代に押し付けないで下さい。
					</Strong>
				</Text>
			</Box>
			<Separator />
			<Box {...sectionProps}>
				<Heading>ChakraUIってなんだよ</Heading>
				<Text>
					ChakraUIはReactベースのUIライブラリです。classに1つの文字列として渡す代わりに、タグの属性でスタイルを適用します。
				</Text>
				<Text>
					<Strong>ボタン？拡張機能無しで補完有り、改行もできます。</Strong>
				</Text>
				<Code {...codeProps}>{`"use client";

import { chakra } from "@chakra-ui/react";

...
<chakra.button
	bg={{
		base: "teal.solid",
		_hover: "teal.emphasized",
	}}
	px="4"
	py="2"
	rounded="lg"
	transition="backgrounds"
>
	Click me
</chakra.button>
...`}</Code>
				<Text>これが実物です。</Text>
				<MyButton>Click me</MyButton>
				<Text>
					classによる支配は終わり、拡張機能も必要なくなり、目を横に滑らせる事もありません。
				</Text>
				<Text>
					<small>
						ただし巨大な.jsが生成されます。
						<br />
						嫌だ？それを誤魔化すためにReact Server Componentがあります。
						<br />
						CVSS 10？RSCではなくServer Functionsを批判して下さい。
					</small>
				</Text>
			</Box>
			<Separator />
			<Box {...sectionProps}>
				<Heading>何がそんなに良いんだ</Heading>
				<Heading as="h3" size="lg">
					大class帝国とbradlc.vscode-tailwindcssからの解放
				</Heading>
				<Text>
					classの文字列をパースする拡張機能が必要？
					<br />
					.cssで定義したテーマの補完を出す拡張機能が必要？
					<br />
					指定する語句の中身のCSSをポップアップ表示する拡張機能が必要？
				</Text>
				<Text>
					<Strong>ChakraUIは全て正式な言語仕様の中で完結します。</Strong>
				</Text>
				<Heading as="h3">大蛇を捌く作業はもう終わり</Heading>
				<Text>
					文字の大きさをレスポンシブにしたい時や、ホバー時の効果をスタイリングしたい時、同じ種類のものは近くに置く貴方のこだわりに従って目をかっ開いて超横長の文字列の中から唯一のbg-*を見つけ出す必要はもうありません。
				</Text>
				<Code {...codeProps}>{`<Box
	display="inline-flex"
	alignItems="center"
	gap="2"
	rounded="lg"
	// bg="teal.solid" 手軽にコメントで目立たせることもできます
	bg={{
		base: "teal.solid",
		_hover: "teal.emphasized"
	}}
	px="6"
	py="3"
	fontWeight="semibold"
	color="fg"
	transition="colors"
>`}</Code>
				<Text>
					ホバー時の効果をまとめて指定したいですか？こんな書き方ができます。
				</Text>
				<Code {...codeProps}>{`<Box
	bg="teal.solid"
	_hover={{
		bg: "teal.emphasized",
	}}
>`}</Code>
				<Text>
					ダークモード？<Code>_dark</Code>が使えます
				</Text>
				<Code {...codeProps}>{`<Box
	bg="teal.50"
	_dark={{
		bg: "teal.900",
	}}
>`}</Code>
				<Text>
					コンポーネントとスタイルの付従性？一貫した数値指定？それはChakraUIにもあります。
				</Text>
			</Box>
			<Separator />
			<Box {...sectionProps}>
				<Heading>実際にやってみた</Heading>
				<Card.Root>
					<Card.Body alignItems="center">
						<Card.Title>レスポンシブですよ</Card.Title>
						<Card.Description hideBelow="md">💻 デスクトップ</Card.Description>
						<Card.Description hideFrom="md">📱 スマホ</Card.Description>
					</Card.Body>
				</Card.Root>
				<HStack>
					<Button size={{ base: "md", _hover: "xl" }} transition="all">
						大きくなるよ
					</Button>
					<Button variant={{ base: "outline", _hover: "solid" }}>
						反転するよ
					</Button>
				</HStack>
			</Box>
			<Separator />
			<Box {...sectionProps}>
				<Heading>「React以外で使えないの？」</Heading>
				<Text>
					ReactでもVueでもSvelteでも使えるのがTailwindの良い所です。しかしそれだけです。Reactに縛られてclassから解放される方が、横スクロールを多発させて脳を混乱させるよりは健康に良いでしょう。
				</Text>
			</Box>
			<Box {...sectionProps}>
				<Heading>「classの長さなんて気にしないよ」</Heading>
				<Text>
					確かにproductionのhtmlはほとんど1行にまとめられますが、貴方は開発者ではないのですか？開発体験が良くない事から目を背けて、「本番環境のhtmlなど誰も気にしない」などと豪語するのはやめましょう。
				</Text>
			</Box>
			<Separator />
			<Card.Root as="section">
				<Card.Header>
					<Card.Title as="h2">目を曇らせるな。賢く作れ。</Card.Title>
				</Card.Header>
				<Card.Body spaceY="4">
					<Card.Description>
						ChakraUIはReactに依存しています。Vueが.tsxでないためです。Svelteが.svelteだからです。しかし、ChakraUIはTailwindの地獄のclass大蛇から解放し、Tailwindと共通の部分が多い事によるシームレスな移行を実現しています。RSCとServer
						Functionsの混合の誤解を解き、無闇矢鱈に脱Reactを主張することはやめましょう。
					</Card.Description>
					<Heading as="p">Just fucking use ChakraUI no Tailwind.</Heading>
				</Card.Body>
				<Card.Footer justifyContent="end">
					<Button asChild>
						<a
							href="https://www.chakra-ui.com/docs/get-started/installation"
							target="_blank"
							rel="noopener"
						>
							Get started <span aria-hidden>→</span>
						</a>
					</Button>
				</Card.Footer>
			</Card.Root>
		</Container>
		<Box as="footer" borderTopWidth="1px" py="8">
			<Container maxW="2xl" color="fg.muted" spaceY="2">
				<Text>
					Inspired by{" "}
					<Link href="https://justfuckingusetailwind.com" target="_blank">
						justfuckingusetailwind.com
					</Link>
				</Text>
				<Text>
					Built by{" "}
					<Link href="https://www.kirura.f5.si" target="_blank">
						KiRura
					</Link>
				</Text>
			</Container>
		</Box>
	</Box>
);
