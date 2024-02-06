import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
const customTwMerge = extendTailwindMerge({
    // @ts-expect-error
    classGroups: {
        "font-size": [{ text: [(value: any) => Number(value) >= 0] }],
    },
});

export function cn(...inputs: ClassValue[]) {
    return customTwMerge(clsx(inputs));
}
