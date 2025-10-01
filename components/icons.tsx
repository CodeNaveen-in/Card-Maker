import React from 'react';

export const CardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const GenerateIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

export const PrintIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
    </svg>
);

export const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

export const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4" {...props}>
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
);


// Accessory Icons
export const BalloonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M13 3.054C11.335 3.42 10.002 4.67 9.536 6.257c-.504 1.714.043 3.52 1.188 4.908.12.146.244.29.373.435l-1.012 1.012c-.31.31-.813.31-1.122 0a.793.793 0 0 1 0-1.122l.849-.849a3.83 3.83 0 0 0 1.08-2.703c0-2.123-1.718-3.84-3.84-3.84-1.282 0-2.417.63-3.088 1.625C4.26 6.32 4 7.15 4 8c0 .276.224.5.5.5s.5-.224.5-.5c0-.71.215-1.4.61-2.01.59-.906 1.58-1.49 2.73-1.49 1.564 0 2.84 1.275 2.84 2.84 0 .84-.37 1.6-.97 2.11l-.85.85c-.09.09-.14.21-.14.33s.05.24.14.33l1.012 1.012c-.13.145-.254.29-.374.435-1.145 1.388-1.692 3.194-1.188 4.908.466 1.588 1.799 2.836 3.464 3.203 2.845.626 5.513-1.11 6.138-3.954.625-2.844-1.11-5.513-3.954-6.138-1.39-.307-2.822.016-4.046.85zm1.045 9.092c-2.316.51-4.44-1.02-4.95-3.336-.51-2.316 1.02-4.44 3.336-4.95 2.316-.51 4.44 1.02 4.95 3.336.51 2.316-1.02 4.44-3.336 4.95z" /></svg>
);
export const CakeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12.001 1.993C11.83 1.996 11.66.07 11.499 0c-1.378 1.48-2.5 3.23-2.5 5.5s1 4 2.5 4 2.5-1.77 2.5-4-1.122-4.02-2.5-5.507zM12 8.493c-.92 0-1.5-.94-1.5-2.993s.58-2.993 1.5-2.993 1.5.94 1.5 2.993-.58 2.993-1.5 2.993zM21 13.993h-1.34c-.4-1.71-1.95-3-3.66-3s-3.26 1.29-3.66 3H3c-1.11 0-2 .89-2 2v4.01c0 1.1.89 1.99 2 1.99h18c1.11 0 2-.89 2-1.99v-4.01c0-1.11-.89-2-2-2zm-9.34 5c-.37 0-.66-.3-.66-.67s.3-.67.66-.67c.37 0 .66.3.66.67s-.29.67-.66.67zm4 0c-.37 0-.66-.3-.66-.67s.3-.67.66-.67c.37 0 .66.3.66.67s-.3.67-.66.67z" /></svg>
);
export const ChampagneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14.2 2.2c-.08-.88-.8-1.5-1.6-1.5s-1.5.62-1.6 1.5c-.1 1.08-.2 2.38-.2 2.8h3.6c0-.42-.1-1.72-.2-2.8zM15 6H9c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 20c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1zm8-18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3 2c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM5 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1 1c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z" /></svg>
);
export const ConfettiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12.91 2.22a1.2 1.2 0 0 0-1.81 0L9.88 3.44l-1.32-.4a1.2 1.2 0 0 0-1.42 1.05l-.2 1.34-1.17.68a1.2 1.2 0 0 0-.58 1.55l.52 1.29-1.07.82a1.2 1.2 0 0 0 .1 1.9l1.07.82-.52 1.29a1.2 1.2 0 0 0 .58 1.55l1.17.68.2 1.34a1.2 1.2 0 0 0 1.42 1.05l1.32-.4 1.22 1.22a1.2 1.2 0 0 0 1.81 0l1.22-1.22 1.32.4a1.2 1.2 0 0 0 1.42-1.05l.2-1.34 1.17-.68a1.2 1.2 0 0 0 .58-1.55l-.52-1.29 1.07-.82a1.2 1.2 0 0 0-.1-1.9l-1.07-.82.52-1.29a1.2 1.2 0 0 0-.58-1.55l-1.17-.68-.2-1.34a1.2 1.2 0 0 0-1.42-1.05l-1.32.4-1.22-1.22z" /></svg>
);
export const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
);
export const RibbonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M18.57 6.43C16.92 4.19 14.61 3 12 3s-4.92 1.19-6.57 3.43c-.4.54-.31 1.31.22 1.72l.4.3c.53.4.9.99.99 1.62.15 1.06-1.12 1.93-1.12 1.93s-1.27-.87-1.12-1.93c.09-.63.46-1.22.99-1.62l.4-.3c.53-.41.62-1.18.22-1.72C8.39 2.15 5.56 1 3 1s-5.39 1.15-7 3.43c-.4.54-.31 1.31.22 1.72l.4.3c.53.4.9.99.99 1.62.15 1.06-1.12 1.93-1.12 1.93s-1.27-.87-1.12-1.93c.09-.63.46-1.22.99-1.62l.4-.3c.53-.41.62-1.18.22-1.72C-1.08 4.19-3.39 3-6 3s-4.92 1.19-6.57 3.43c-.4.54-.31 1.31.22 1.72l8.35 6.42L2 22h20l-8.79-8.79 8.35-6.42c.54-.41.63-1.18.23-1.72z" transform="translate(12, 0) scale(1, -1) translate(-12, -12)" /></svg>
);
export const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
);

// Corner Icons
export const FloralCornerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <path d="M10 90 C 20 40, 60 50, 90 10" />
        <circle cx="25" cy="65" r="5" fill="currentColor" stroke="none" />
        <path d="M22,63 A 5 5 0 0 1 28 67" />
        <path d="M28,63 A 5 5 0 0 0 22 67" />
        <circle cx="70" cy="35" r="7" fill="currentColor" stroke="none" />
        <path d="M67,32 A 7 7 0 0 1 73 38" />
        <path d="M73,32 A 7 7 0 0 0 67 38" />
        <path d="M60 80 Q 70 70 80 80" />
        <path d="M75 60 Q 80 70 70 75" />
    </svg>
);
export const GeometricCornerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <path d="M10 90 L 90 10" />
        <rect x="20" y="20" width="60" height="60" transform="rotate(45 50 50)" />
        <circle cx="50" cy="50" r="20" />
        <path d="M30 10 L 10 30" />
        <path d="M70 90 L 90 70" />
    </svg>
);
export const VineCornerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <path d="M10 90 C 30 70, 40 40, 90 10" />
        <path d="M25 80 C 30 75, 35 75, 40 80" />
        <path d="M45 60 C 50 55, 55 55, 60 60" />
        <path d="M65 40 C 70 35, 75 35, 80 40" />
        <path d="M80 20 C 85 15, 90 15, 95 20" />
    </svg>
);
export const StarCornerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="none" {...props}>
        <path d="M50 10 L61 35 L88 35 L68 53 L78 78 L50 62 L22 78 L32 53 L12 35 L39 35 Z" transform="scale(0.3) translate(15, 15)" />
        <path d="M50 10 L61 35 L88 35 L68 53 L78 78 L50 62 L22 78 L32 53 L12 35 L39 35 Z" transform="scale(0.2) translate(150, 150)" />
        <path d="M50 10 L61 35 L88 35 L68 53 L78 78 L50 62 L22 78 L32 53 L12 35 L39 35 Z" transform="scale(0.15) translate(30, 350)" />
        <path d="M50 10 L61 35 L88 35 L68 53 L78 78 L50 62 L22 78 L32 53 L12 35 L39 35 Z" transform="scale(0.15) translate(350, 30)" />
    </svg>
);
export const ConfettiCornerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="none" {...props}>
        <circle cx="20" cy="20" r="5" />
        <rect x="40" y="30" width="10" height="10" transform="rotate(45 45 35)" />
        <circle cx="60" cy="15" r="3" />
        <rect x="15" y="55" width="8" height="8" transform="rotate(-30 19 59)" />
        <circle cx="35" cy="75" r="4" />
        <rect x="70" y="40" width="12" height="12" transform="rotate(60 76 46)" />
        <circle cx="85" cy="70" r="5" />
    </svg>
);
export const HeartCornerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="none" {...props}>
        <path d="M50 25 C 20 0, 0 20, 50 60 C 100 20, 80 0, 50 25 Z" transform="scale(0.3) translate(15, 15)" />
        <path d="M50 25 C 20 0, 0 20, 50 60 C 100 20, 80 0, 50 25 Z" transform="scale(0.2) translate(150, 150)" />
        <path d="M50 25 C 20 0, 0 20, 50 60 C 100 20, 80 0, 50 25 Z" transform="scale(0.15) translate(30, 350)" />
        <path d="M50 25 C 20 0, 0 20, 50 60 C 100 20, 80 0, 50 25 Z" transform="scale(0.15) translate(350, 30)" />
    </svg>
);