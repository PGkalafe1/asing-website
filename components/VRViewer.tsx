'use client';

import { useState, useRef, useEffect } from 'react';

interface VRViewerProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function VRViewer({ title, description, imageUrl }: VRViewerProps) {
  const [isVRMode, setIsVRMode] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    
    const deltaX = e.clientX - lastPos.current.x;
    const deltaY = e.clientY - lastPos.current.y;
    
    setRotation(prev => ({
      x: Math.max(-90, Math.min(90, prev.x + deltaY * 0.5)),
      y: prev.y + deltaX * 0.5
    }));
    
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement && containerRef.current) {
      await containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else if (document.fullscreenElement) {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const resetView = () => {
    setRotation({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsVRMode(!isVRMode)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
                isVRMode 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center mr-2 inline-block">
                <i className="ri-vr-box-line"></i>
              </div>
              VR Mode
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={containerRef}
        className={`relative ${isFullscreen ? 'h-screen' : 'h-96'} bg-gray-900 overflow-hidden cursor-grab select-none`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.2)`,
            transformOrigin: 'center center'
          }}
        >
          {isVRMode && (
            <div className="absolute inset-0 grid grid-cols-2">
              <div className="border-r border-white/20"></div>
              <div></div>
            </div>
          )}
        </div>

        {/* Control Overlay */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
          <div className="bg-black/50 backdrop-blur text-white px-4 py-2 rounded-lg">
            <p className="text-sm">Drag to explore • Scroll to zoom</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={resetView}
              className="bg-black/50 backdrop-blur text-white p-2 rounded-lg hover:bg-black/70 transition-colors cursor-pointer"
              title="Reset View"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-refresh-line"></i>
              </div>
            </button>
            <button
              onClick={toggleFullscreen}
              className="bg-black/50 backdrop-blur text-white p-2 rounded-lg hover:bg-black/70 transition-colors cursor-pointer"
              title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className={`ri-${isFullscreen ? 'fullscreen-exit' : 'fullscreen'}-line`}></i>
              </div>
            </button>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        </div>

        {/* Hotspots */}
        <div 
          className="absolute top-1/2 left-1/3 w-6 h-6 bg-blue-500 rounded-full animate-pulse cursor-pointer hover:bg-blue-600 transition-colors"
          style={{ transform: 'translate(-50%, -50%)' }}
          title="Click to learn more"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
            <p className="text-sm text-gray-800 whitespace-nowrap">Advanced dental equipment</p>
          </div>
        </div>

        <div 
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-teal-500 rounded-full animate-pulse cursor-pointer hover:bg-teal-600 transition-colors"
          style={{ transform: 'translate(-50%, -50%)' }}
          title="Click to learn more"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
            <p className="text-sm text-gray-800 whitespace-nowrap">Patient comfort area</p>
          </div>
        </div>
      </div>

      {/* Information Panel */}
      <div className="p-6 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="ri-camera-3d-line text-blue-600 text-xl"></i>
            </div>
            <h4 className="font-semibold text-blue-900 mb-1">360° Experience</h4>
            <p className="text-sm text-gray-600">Explore our modern facility</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="ri-eye-line text-teal-600 text-xl"></i>
            </div>
            <h4 className="font-semibold text-blue-900 mb-1">Interactive Tour</h4>
            <p className="text-sm text-gray-600">Click on hotspots to learn more</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="ri-smartphone-line text-blue-600 text-xl"></i>
            </div>
            <h4 className="font-semibold text-blue-900 mb-1">Mobile Ready</h4>
            <p className="text-sm text-gray-600">View on any device</p>
          </div>
        </div>
      </div>
    </div>
  );
}