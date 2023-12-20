// import { jsPDF } from "jsPDF";

import { jsPDF } from 'jspdf';

console.log(jsPDF);

const windowHeight = window.innerHeight;

const overlay = document.querySelector('.overlay').getBoundingClientRect();
console.log(overlay);
const overlayBottom = document
  .querySelector('.overlay')
  .getBoundingClientRect().bottom;
const overlayRight = document
  .querySelector('.overlay')
  .getBoundingClientRect().right;

console.log(overlayRight, overlayBottom);

const header = document.querySelector('.header');
const headerRight = header.getBoundingClientRect().right;
const windowWidth = window.innerWidth;

const generatePDF = function () {
  const doc = new jsPDF({
    precision: '10',
    orientation: 'p',
    unit: 'px',
    format: [1500, 1500],
  }); // create jsPDF object
  const pdfElement = document.getElementById('pdf'); // HTML element to be converted to PDF

  doc.html(pdfElement, {
    callback: pdf => {
      console.log(pdf);
      pdf.save('MyPdfFile.pdf');
    },
    margin: 10, // optional: page margin
    // optional: other HTMLOptions
  });
};

console.log(header.getBoundingClientRect());
// const windowHeight2 = window.getBoundingClientRect();
console.log(windowHeight);
console.log(window.innerHeight);
console.log(window.innerWidth);

document.querySelector('.button').addEventListener('click', generatePDF);

console.log(generatePDF);
