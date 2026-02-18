import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");

console.log("Cleaning build artifacts...\n");

try {
  if (fs.existsSync(dataDir)) {
    fs.rmSync(dataDir, { recursive: true, force: true });
    console.log("✓ Removed /data directory");
  } else {
    console.log("✓ No data directory to clean");
  }
  
  console.log("\nClean completed successfully");
} catch (err) {
  console.error("Error during clean:");
  console.error(err);
  process.exit(1);
}