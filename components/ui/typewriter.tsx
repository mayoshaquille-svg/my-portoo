"use client";

import * as React from "react";

type TypewriterProps = {
    phrases: readonly string[];
    className?: string;
};

export function Typewriter({ phrases, className }: TypewriterProps) {
    const [phraseIndex, setPhraseIndex] = React.useState(0);
    const [characterCount, setCharacterCount] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [reducedMotion, setReducedMotion] = React.useState(false);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);

        updateMotionPreference();
        mediaQuery.addEventListener("change", updateMotionPreference);

        return () => mediaQuery.removeEventListener("change", updateMotionPreference);
    }, []);

    React.useEffect(() => {
        if (reducedMotion || phrases.length === 0) return;

        const phrase = phrases[phraseIndex];
        const isComplete = characterCount === phrase.length;
        const isEmpty = characterCount === 0;
        const delay = isComplete && !isDeleting ? 1800 : isEmpty && isDeleting ? 400 : isDeleting ? 38 : 72;

        const timeout = window.setTimeout(() => {
            if (isComplete && !isDeleting) {
                setIsDeleting(true);
            } else if (isEmpty && isDeleting) {
                setIsDeleting(false);
                setPhraseIndex((current) => (current + 1) % phrases.length);
            } else {
                setCharacterCount((current) => current + (isDeleting ? -1 : 1));
            }
        }, delay);

        return () => window.clearTimeout(timeout);
    }, [characterCount, isDeleting, phraseIndex, phrases, reducedMotion]);

    const phrase = phrases[phraseIndex] ?? "Ready to troubleshoot";
    const visibleText = reducedMotion ? phrase : phrase.slice(0, characterCount);

    return (
        <span className={className} aria-live="polite">
            <span aria-hidden="true">{visibleText}</span>
            <span className="typewriter-caret" aria-hidden="true" />
            <span className="sr-only">{phrase}</span>
        </span>
    );
}
