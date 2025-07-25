import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  consultationModalOpen?: boolean;
}

const OfferModal: React.FC<OfferModalProps> = ({ isOpen, onClose, consultationModalOpen = false }) => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 15, seconds: 0 });
  const [currentOffer, setCurrentOffer] = useState({ discount: '25%', text: 'Wednesday Special' });

  // Get current day and set appropriate offer
  useEffect(() => {
    const today = new Date().getDay();
    const offers = {
      0: { discount: '20%', text: 'Sunday Special' },
      1: { discount: '15%', text: 'Monday Boost' },
      2: { discount: '20%', text: 'Tuesday Deal' },
      3: { discount: '25%', text: 'Wednesday Special' },
      4: { discount: '20%', text: 'Thursday Offer' },
      5: { discount: '30%', text: 'Friday Flash Sale' },
      6: { discount: '25%', text: 'Weekend Special' }
    };
    setCurrentOffer(offers[today as keyof typeof offers]);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          onClose();
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, onClose]);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  // If consultation modal is open, render as fixed positioned element
  if (consultationModalOpen && isOpen) {
    return (
      <div className="fixed inset-0 z-[60] pointer-events-none">
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-auto">
          <div className="max-w-sm bg-gradient-to-br from-primary via-primary-dark to-accent border-2 border-accent/30 rounded-2xl p-6 relative overflow-hidden shadow-2xl">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-16 h-16 border-2 border-accent rounded-full"></div>
              <div className="absolute top-12 right-8 w-8 h-8 border border-accent rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 border border-accent rounded-full"></div>
              <div className="absolute bottom-4 right-12 w-6 h-6 border border-accent rounded-full"></div>
            </div>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-4 relative z-10">
              {/* Offer Title */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {currentOffer.discount} OFF
                </h2>
                <p className="text-white/90 text-sm">
                  {currentOffer.text} - Limited Time!
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="space-y-2">
                <p className="text-white/80 text-sm">Offer expires in...</p>
                <div className="flex justify-center gap-2">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 min-w-[50px]">
                    <div className="text-xl font-bold text-white">
                      {formatTime(timeLeft.minutes)}
                    </div>
                  </div>
                  <div className="text-white text-xl font-bold flex items-center">:</div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 min-w-[50px]">
                    <div className="text-xl font-bold text-white">
                      {formatTime(timeLeft.seconds)}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="space-y-3">
                <Button
                  onClick={onClose}
                  className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 text-sm"
                >
                  GET MY {currentOffer.discount} OFF!
                </Button>
                
                <button
                  onClick={onClose}
                  className="text-white/70 hover:text-white text-xs underline transition-colors"
                >
                  No, thanks!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-gradient-to-br from-primary via-primary-dark to-accent border-2 border-accent/30 rounded-2xl p-6 relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-16 h-16 border-2 border-accent rounded-full"></div>
          <div className="absolute top-12 right-8 w-8 h-8 border border-accent rounded-full"></div>
          <div className="absolute bottom-8 left-8 w-12 h-12 border border-accent rounded-full"></div>
          <div className="absolute bottom-4 right-12 w-6 h-6 border border-accent rounded-full"></div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-6 relative z-10">
          {/* Offer Title */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">
              {currentOffer.discount} OFF
            </h2>
            <p className="text-white/90 text-lg">
              {currentOffer.text} - Limited Time!
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="space-y-3">
            <p className="text-white/80">Offer expires in...</p>
            <div className="flex justify-center gap-2">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
                <div className="text-2xl font-bold text-white">
                  {formatTime(timeLeft.minutes)}
                </div>
              </div>
              <div className="text-white text-2xl font-bold flex items-center">:</div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
                <div className="text-2xl font-bold text-white">
                  {formatTime(timeLeft.seconds)}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <Button
              onClick={onClose}
              className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              GET MY {currentOffer.discount} OFF!
            </Button>
            
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white text-sm underline transition-colors"
            >
              No, thanks. I'll rather pay full price!
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OfferModal;