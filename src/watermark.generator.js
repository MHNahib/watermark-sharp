import sharp from "sharp";
import path from "node:path";

export class WatermarkGenerator {
  async generateWatermark(image, watermark) {
    const imageMetadata = await sharp(image).metadata();
    const watermarkMetadata = await sharp(watermark).metadata();

    const newWidth = Math.floor(imageMetadata.width * 0.2);
    const newHeight = Math.floor(imageMetadata.height * 0.2);

    // Resize the watermark image to the new dimensions
    const resizedWatermark = await sharp(watermark)
      .resize(newWidth, newHeight)
      .toBuffer();

    const { left, top } = await this.#calculateWatermarkPosition(
      image,
      resizedWatermark
    );

    await sharp(image)
      .composite([
        {
          input: resizedWatermark,
          top: top,
          left: left,
        },
      ])
      .toFile(this.#pathGenerator(image));
  }

  async bulkGenerateWatermark(images, watermark) {
    const promises = images.map((image) =>
      this.generateWatermark(image, watermark)
    );
    await Promise.all(promises);
    if (promises) console.log("Watermarks generated successfully");
  }

  #pathGenerator(image) {
    return `./output/${path
      .basename(image)
      .replace(
        ".png" || ".jpg" || ".jpeg" || ".webp" || ".gif" || ".svg",
        ""
      )}-with-watermark.png`;
  }

  async imagMetadata(image) {
    return await sharp(image).metadata();
  }

  async #calculateWatermarkPosition(image, watermark) {
    const { height, width } = await this.imagMetadata(image);

    const { height: watermarkHeight, width: watermarkWidth } =
      await this.imagMetadata(watermark);

    const left = Math.floor(width - watermarkWidth - 20);
    const top = Math.floor(height - watermarkHeight - 20);

    return { left, top };
  }
}
