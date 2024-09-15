import path from "node:path";
import fs from "node:fs/promises";

import { WatermarkGenerator } from "./src/watermark.generator.js";

const image = path.resolve("./assets/iamcat.png");
const watermark = path.resolve("./assets/watermark.png");

const Watermark = new WatermarkGenerator();
const readImages = async (folderPath) => {
  const files = await fs.readdir(folderPath);

  const filePaths = files
    .filter((file) => path.basename(file) !== "watermark.png")
    .map((file) => path.resolve(folderPath, file));

  return filePaths;
};

const files = await readImages("assets");

await Watermark.bulkGenerateWatermark(files, watermark);
