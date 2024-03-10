/**
 * ===
 * includes()
 * startsWith()
 * endsWith()
 */

let fileName = "invoice_123.pdf";

if (fileName.toLowerCase().trim() === "invoice_123.pdf") {
  console.log("file matches");
}
if (fileName.startsWith("invoice")) {
  console.log("yes file name starts with invoice");
}
if (fileName.endsWith(".pdf")) {
  console.log("yes file name ends with pdf");
}
