# **Watermark Generator Project**

## **Overview**

This project is a simple watermark generator that allows users to add a watermark to an image. The watermark can be positioned at a specified location on the image, and the size of the watermark can be adjusted.

## **Features**

- Add a watermark to an image
- Position the watermark at a specified location on the image (10% from the bottom and right)
- Adjust the size of the watermark (10% of the original image size)
- Output the watermarked image to a specified folder

## **Requirements**

- Node.js (version 14 or higher)
- Sharp library (version 0.29.0 or higher)

## **Installation**

1. Clone the repository to your local machine
2. Install the required dependencies by running `npm install`
3. Create a new folder for the output images (e.g. `output/`)

## **Usage**

1. Place the image you want to watermark in the root of the project folder
2. Run the command `node index.js` to generate the watermarked image
3. The watermarked image will be output to the `output/` folder

## **Configuration**

- The watermark image can be configured by modifying the `watermark.png` file in the root of the project folder
- The position of the watermark can be adjusted by modifying the `#calculateWatermarkPosition` function in the `index.js` file
- The size of the watermark can be adjusted by modifying the `#generateWatermark` function in the `index.js` file

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for more information.
