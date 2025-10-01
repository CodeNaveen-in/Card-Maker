import React from 'react';
import type { CardContent } from '../types';
import { PrintIcon, DownloadIcon, BalloonIcon, CakeIcon, ChampagneIcon, ConfettiIcon, HeartIcon, RibbonIcon, StarIcon, FloralCornerIcon, GeometricCornerIcon, VineCornerIcon, StarCornerIcon, ConfettiCornerIcon, HeartCornerIcon } from './icons';

interface CardDisplayProps {
  cardContent: CardContent | null;
  isLoading: boolean;
  isDownloading: boolean;
  error: string | null;
  senderName?: string;
  onDownload: () => void;
  page1Ref: React.RefObject<HTMLDivElement>;
  page2Ref: React.RefObject<HTMLDivElement>;
}

const AccessoryRenderer: React.FC<{ accessories: string[] }> = ({ accessories }) => {
    const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
      balloons: BalloonIcon,
      cake: CakeIcon,
      champagne: ChampagneIcon,
      confetti: ConfettiIcon,
      hearts: HeartIcon,
      ribbon: RibbonIcon,
      stars: StarIcon,
    };

    const positions = [
        { top: '10%', left: '10%' }, { top: '20%', right: '15%' },
        { bottom: '15%', left: '20%' }, { bottom: '25%', right: '10%' },
        { top: '40%', left: '25%' }, { bottom: '5%', right: '30%' }
    ];

    return (
        <>
            {accessories.slice(0, 6).map((acc, index) => {
                const Icon = iconMap[acc];
                if (!Icon) return null;
                return (
                    <Icon 
                        key={index} 
                        className="absolute h-12 w-12 text-black opacity-10" 
                        style={{ ...positions[index], transform: `rotate(${Math.random() * 40 - 20}deg)` }} 
                    />
                );
            })}
        </>
    );
};

const BorderRenderer: React.FC<{ style: string }> = ({ style }) => {
    const BorderIcon = {
        floral: FloralCornerIcon,
        geometric: GeometricCornerIcon,
        vines: VineCornerIcon,
        stars: StarCornerIcon,
        confetti: ConfettiCornerIcon,
        hearts: HeartCornerIcon,
    }[style] || ConfettiCornerIcon;

    return (
        <>
            <BorderIcon className="absolute top-4 left-4 h-20 w-20 text-black opacity-15" />
            <BorderIcon className="absolute top-4 right-4 h-20 w-20 text-black opacity-15" style={{ transform: 'scaleX(-1)' }} />
            <BorderIcon className="absolute bottom-4 left-4 h-20 w-20 text-black opacity-15" style={{ transform: 'scaleY(-1)' }} />
            <BorderIcon className="absolute bottom-4 right-4 h-20 w-20 text-black opacity-15" style={{ transform: 'scale(-1,-1)' }} />
        </>
    );
};


const CardDisplay: React.FC<CardDisplayProps> = ({ cardContent, isLoading, isDownloading, error, senderName, onDownload, page1Ref, page2Ref }) => {
  const handlePrint = () => {
    window.print();
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center text-center p-8 w-full">
          <svg className="animate-spin h-10 w-10 text-indigo-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-lg font-semibold text-gray-700">Generating your masterpiece...</p>
          <p className="text-gray-500 mt-1">The AI is warming up its paintbrushes and pens. This might take a moment.</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center p-8 bg-red-50 border border-red-200 rounded-lg w-full">
          <h3 className="text-lg font-semibold text-red-800">Oops, something went wrong!</h3>
          <p className="text-red-600 mt-2">{error}</p>
        </div>
      );
    }

    if (cardContent) {
      return (
        <div className="w-full">
          <div className="printable-card-area grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Page 1 */}
            <div ref={page1Ref} className="print-page bg-amber-50 rounded-lg shadow-lg border border-gray-200 overflow-hidden aspect-[3/4] flex flex-col justify-center items-center p-8 relative">
                <BorderRenderer style={cardContent.borderStyle} />
                <img src={cardContent.page1.imageUrl} alt="AI generated card cover" className="w-full h-3/4 object-cover rounded-md shadow-inner" />
                <h2 className="mt-6 text-3xl font-cursive text-gray-800 text-center">{cardContent.page1.greeting}</h2>
            </div>
             {/* Page 2 */}
            <div ref={page2Ref} className="print-page bg-amber-50 rounded-lg shadow-lg border border-gray-200 overflow-hidden aspect-[3/4] flex flex-col justify-center items-center p-12 relative">
                <BorderRenderer style={cardContent.borderStyle} />
                <AccessoryRenderer accessories={cardContent.page2.accessories} />
                <div className="relative z-10 text-center">
                    <p className="text-gray-700 text-lg whitespace-pre-wrap font-serif leading-relaxed">
                        {cardContent.page2.poem}
                    </p>
                    <p className="mt-8 text-xl font-cursive text-gray-600">
                        {senderName}
                    </p>
                </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 no-print">
            <button
                onClick={onDownload}
                disabled={isDownloading}
                className="w-full flex justify-center items-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300 transition-colors"
            >
                {isDownloading ? (
                    <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Downloading...
                    </>
                ) : (
                    <>
                    <DownloadIcon className="h-5 w-5" />
                    Download PDF
                    </>
                )}
            </button>
            <button
                onClick={handlePrint}
                className="w-full flex justify-center items-center gap-2 px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <PrintIcon className="h-5 w-5" />
                Print Card
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full text-center p-8 bg-white border-2 border-dashed border-gray-300 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700">Your Two-Page Card Awaits</h3>
        <p className="text-gray-500 mt-1">Fill out the form to generate a unique, AI-powered occasion card.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-lg aspect-[3/4] flex items-center justify-center">
                <p className="text-gray-400">Page 1: Cover Image</p>
            </div>
             <div className="bg-gray-100 rounded-lg aspect-[3/4] flex items-center justify-center">
                <p className="text-gray-400">Page 2: Poem & Message</p>
            </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-h-[400px] flex items-center justify-center">
      {renderContent()}
    </div>
  );
};

export default CardDisplay;