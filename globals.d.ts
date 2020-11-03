/*declare var process: {
    env: {
        NODE_ENV: string;
        DEBUG: string;
    };
    browser: boolean;
};*/

interface Date {
    getMinutesFormatted: () => string;
    getHoursFormatted: () => string;
    getSecondsFormatted: () => string;
    getMonthFormatted: () => string;
}

declare module '*.json' {
    const value: any;
    export = value;
}

declare module '*.ttf' {
    const value: any;
    export = value;
}

declare module '*.svg' {
    const value: any;
    export = value;
}

declare module '*.gif' {
    const value: any;
    export = value;
}

declare module '*.png' {
    const value: any;
    export = value;
}

declare module '*.jpg' {
    const value: any;
    export = value;
}

declare module '*.data' {
    const value: any;
    export = value;
}

declare module '*.wasm' {
    const value: any;
    export = value;
}

declare module '*.wast' {
    const value: any;
    export = value;
}

declare module '*.css' {
    const value: any;
    export = value;
}

declare module '*.mp4' {
    const value: any;
    export = value;
}
