import React, { useState, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Header from './components/Header';
import CardForm from './components/CardForm';
import CardDisplay from './components/CardDisplay';
import type { CardData, CardContent } from './types';
import { generateCardContent } from './services/geminiService';
import { GithubIcon } from './components/icons';

const App: React.FC = () => {
  const [cardContent, setCardContent] = useState<CardContent | null>(null);
  const [formData, setFormData] = useState<CardData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const page1Ref = useRef<HTMLDivElement>(null);
  const page2Ref = useRef<HTMLDivElement>(null);

  const handleGenerateCard = async (newFormData: CardData) => {
    setIsLoading(true);
    setError(null);
    setCardContent(null);
    setFormData(newFormData);

    try {
      const result = await generateCardContent(newFormData);
      setCardContent(result);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadPdf = async () => {
    if (!page1Ref.current || !page2Ref.current) return;
    setIsDownloading(true);
    try {
      const canvas1 = await html2canvas(page1Ref.current, { scale: 3 });
      const canvas2 = await html2canvas(page2Ref.current, { scale: 3 });
      
      const imgData1 = canvas1.toDataURL('image/png');
      const imgData2 = canvas2.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas1.width, canvas1.height]
      });

      pdf.addImage(imgData1, 'PNG', 0, 0, canvas1.width, canvas1.height);
      pdf.addPage([canvas2.width, canvas2.height], 'portrait');
      pdf.addImage(imgData2, 'PNG', 0, 0, canvas2.width, canvas2.height);

      pdf.save(`card_for_${formData?.name || 'occasion'}.pdf`);

    } catch (e) {
        console.error("Error generating PDF:", e);
        setError("Sorry, there was an issue creating the PDF.");
    } finally {
        setIsDownloading(false);
    }
  };


  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 lg:sticky top-8">
            <CardForm onSubmit={handleGenerateCard} isLoading={isLoading} />
             <div className="text-center mt-6 no-print">
                <a href="https://github.com/google-gemini/generative-ai-docs/tree/main/demos/react-card-generator" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-gray-500 hover:text-gray-700 transition-colors inline-flex items-center gap-2">
                    <GithubIcon className="h-5 w-5" />
                    View on GitHub
                </a>
            </div>
          </div>
          <div className="lg:col-span-3">
            <CardDisplay 
              cardContent={cardContent} 
              isLoading={isLoading} 
              isDownloading={isDownloading}
              error={error} 
              senderName={formData?.senderName}
              onDownload={handleDownloadPdf}
              page1Ref={page1Ref}
              page2Ref={page2Ref}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;