import { ReactNode } from 'react';

interface MobileFrameProps {
  children: ReactNode;
}

export default function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="flex items-center justify-center min-h-screen w-full p-4">
      <div className="relative">
        {/* Mobile Device Frame */}
        <div className="w-[375px] h-[812px] bg-black rounded-[3rem] p-3 shadow-2xl relative">
          {/* Screen */}
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50"></div>

            {/* Content */}
            <div className="w-full h-full overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
