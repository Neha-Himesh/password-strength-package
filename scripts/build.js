const fs = require("fs");
const path = require("path");
const handlebars = require("express-handlebars").create();

const templatesDir = path.join(__dirname, "../views");
const outputDir = path.join(__dirname, "../dist");

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Recursively get all .handlebars files
function getAllFiles(dir, fileList = []) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith(".hbs")) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

// Compile templates
function compileTemplates() {
  const files = getAllFiles(templatesDir);
  files.forEach((filePath) => {
    const relativePath = path.relative(templatesDir, filePath);
    const outputFilePath = path.join(
      outputDir,
      relativePath.replace(".hbs", ".html")
    );

    // Special case: Map index.handlebars to dist/index.html
    const isIndex = relativePath === "layouts/main.hbs";
    const finalOutputPath = isIndex ? path.join(outputDir, "main.html") : outputFilePath;

    // Ensure output directories exist
    const outputFileDir = path.dirname(finalOutputPath);
    if (!fs.existsSync(outputFileDir)) {
      fs.mkdirSync(outputFileDir, { recursive: true });
    }

    // Compile and write HTML
    const template = fs.readFileSync(filePath, "utf-8");
    const compiled = handlebars.handlebars.compile(template);
    const html = compiled({
        title: "Default Title", // Example data
        content: "This is default content for templates.", // Add more as needed
    });
  
    fs.writeFileSync(finalOutputPath, html);
    console.log(`Compiled: ${finalOutputPath}`);
  });
}

compileTemplates();
