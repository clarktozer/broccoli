module.exports = {
    setupFilesAfterEnv: ["./jest.setup.ts"],
    roots: ["<rootDir>"],
    moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
    testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
    transform: {
        "^.+\\.(ts|tsx)$": "babel-jest"
    },
    testEnvironment: "jsdom"
};
