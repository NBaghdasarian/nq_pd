
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { toast } from "sonner";

export const exportToPDF = async () => {
  const pdf = new jsPDF('landscape', 'mm', 'a4');
  
  try {
    // Show loading toast
    toast.loading("Generating PDF...");
    
    // Get the slide content elements specifically targeting the hidden ones prepared for PDF
    const slides = document.querySelectorAll('#pdf-slide-container .slide-content');
    
    if (slides.length === 0) {
      toast.error("No slides found to export");
      return;
    }
    
    // Process each slide
    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i] as HTMLElement;
      
      // Make sure slide is visible before capturing
      slide.style.display = 'flex';
      slide.style.opacity = '1';
      slide.style.visibility = 'visible';
      
      console.log(`Capturing slide ${i} with dimensions: ${slide.offsetWidth}x${slide.offsetHeight}`);
      
      // Capture the slide as an image with better settings
      const canvas = await html2canvas(slide, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        allowTaint: true,
        logging: true, // Enable logging for debugging
        backgroundColor: "#000000", // Match background color
        width: slide.offsetWidth,
        height: slide.offsetHeight,
        imageTimeout: 0, // No timeout for image loading
        onclone: (clonedDoc) => {
          // Make sure the cloned element is visible
          const clonedSlide = clonedDoc.querySelector(`#pdf-slide-${i}`) as HTMLElement;
          if (clonedSlide) {
            clonedSlide.style.display = 'flex';
            clonedSlide.style.opacity = '1';
            clonedSlide.style.visibility = 'visible';
          }
        }
      });
      
      // Add the image to the PDF
      const imgData = canvas.toDataURL('image/jpeg', 0.95); // Use JPEG with high quality
      const imgWidth = 297; // A4 landscape width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Add new page if not the first slide
      if (i > 0) {
        pdf.addPage();
      }
      
      // Add image to PDF
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, 210); // A4 landscape dimensions
      
      // Hide the slide again
      slide.style.display = 'none';
    }
    
    // Save the PDF
    pdf.save('NeoQuant-AI-Pitch-Deck.pdf');
    toast.success("PDF generated successfully");
  } catch (error) {
    console.error("PDF generation error:", error);
    toast.error(`Failed to generate PDF: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};
