import * as fs from 'fs/promises';

const writeFileAsync = async (filePath, content, options = {}) => {
    try {
        await fs.writeFile(filePath, content, options);
        console.log(`File successfully written to ${filePath}`);
    } catch (error) {
        console.error(`Error writing file to ${filePath}:`, error.message);
    }
};

const filePath = 'output.txt';
const fileContent = 'Hello, this is some content to write to the file!';
const fileOptions = { encoding: 'utf8', flag: 'w' }; // Optional file write options

writeFileAsync(filePath, fileContent, fileOptions);