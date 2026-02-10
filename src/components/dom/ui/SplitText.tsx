import { ReactNode } from 'react';

interface SplitTextProps {
    children: string;
    className?: string;
    wordClass?: string;
    charClass?: string;
}

export default function SplitText({ children, className, wordClass, charClass }: SplitTextProps) {
    const words = children.split(' ');

    return (
        <span className={className}>
            {words.map((word, i) => (
                <span key={i} className={`inline-block overflow-hidden ${wordClass || ''}`} style={{ verticalAlign: 'top' }}>
                    <span className={`inline-block ${charClass || ''}`}>
                        {word}
                        {i < words.length - 1 ? '\u00A0' : ''}
                    </span>
                </span>
            ))}
        </span>
    );
}
