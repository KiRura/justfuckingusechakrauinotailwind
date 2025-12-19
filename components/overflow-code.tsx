"use client";

import { Code, Flex, Switch } from "@chakra-ui/react";
import { useState } from "react";

export default function OverflowCode() {
	const [wrap, setWrap] = useState(false);

	return (
		<>
			<Flex justify="end">
				<Switch.Root
					r="0"
					checked={wrap}
					onCheckedChange={(e) => setWrap(e.checked)}
				>
					<Switch.HiddenInput />
					<Switch.Label>折り返し</Switch.Label>
					<Switch.Control />
				</Switch.Root>
			</Flex>
			<Code
				overflow="auto"
				size="lg"
				{...(wrap
					? {
							whiteSpace: "pre-wrap",
							maxW: "full",
						}
					: {
							whiteSpace: "pre",
						})}
			>{`{/* veryverylongstringofclass.tsx */}

<header class="relative overflow-hidden border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
	<div class="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-size-[24px_24px]">長過ぎて${wrap ? "折り返したら訳が分からなくなっちゃった！" : "ページがoverflowしちゃった！"}</div>
</header>`}</Code>
		</>
	);
}
