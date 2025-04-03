import type { SVGAttributes } from 'react';

export const AppLogoIcon = (props: SVGAttributes<SVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" {...props}>
            <rect x={10} y={10} width={280} height={280} rx={30} ry={30} fill="#2c3e50" />
            <circle cx={150} cy={150} r={110} fill="#3498db" />
            <circle cx={150} cy={150} r={80} fill="#1abc9c" />
            <path
                d="M90,190 L150,130 L210,190"
                fill="none"
                stroke="white"
                strokeWidth={16}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M150,190 L150,80"
                fill="none"
                stroke="white"
                strokeWidth={16}
                strokeLinecap="round"
            />
            <circle cx={150} cy={80} r={16} fill="white" />
            <circle cx={90} cy={190} r={12} fill="white" />
            <circle cx={210} cy={190} r={12} fill="white" />
            <circle cx={120} cy={120} r={10} fill="white" opacity="0.5" />
            <circle cx={110} cy={110} r={5} fill="white" opacity="0.7" />
        </svg>
    );
};
