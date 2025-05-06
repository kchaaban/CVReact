const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: "new", // or `true`
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();
  await page.pdf({
    path: "my-cv.pdf",
    format: "A4",
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },// ← No margins
    scale: 0.65, // ⬅️ Shrinks the content to 90%
  });

  
  // Replace with the actual URL of your running app (e.g., localhost or deployed URL)
  const url = "http://localhost:4173/";
  await page.goto(url, { waitUntil: "networkidle0" });

  // Optional: emulate screen size
  await page.setViewport({ width: 1200, height: 1600 });

  // Generate the PDF
  await page.pdf({
    path: "my-cv.pdf",
    format: "A4",
    printBackground: true,
    margin: {
      top: "20mm",
      bottom: "20mm",
      left: "20mm",
      right: "20mm",
    },
  });

  await browser.close();
  console.log("PDF saved as my-cv.pdf");
})();
