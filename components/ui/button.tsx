"use client";

import { chakra } from "@chakra-ui/react";
import type { ReactNode } from "react";

export default function MyButton({ children }: { children: ReactNode }) {
	return (
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
			{children}
		</chakra.button>
	);
}
