import { useEffect, useRef, useState } from 'react';

/**
 * Same behavior as the vanilla `.reveal` + IntersectionObserver in
 * module.html: fades/slides a section in once it's ~15% visible, then
 * stops observing it.
 *
 * const { ref, revealed } = useReveal();
 * <section ref={ref} className={`reveal ${revealed ? 'in' : ''}`}>
 */
export default function useReveal(threshold = 0.15) {
    const ref = useRef(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return undefined;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setRevealed(true);
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold }
        );

        io.observe(el);
        return () => io.disconnect();
    }, [threshold]);

    return { ref, revealed };
}