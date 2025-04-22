"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<number>(1); // 1: Button, 2: Progress, 3: Video
  const [progress, setProgress] = useState<number>(0);
  const youtubeVideoId = 'vKB2Lg-IM3I'; // 從 URL 提取的 ID

  // 處理步驟 2 的進度條
  useEffect(() => {
    if (currentStep === 2) {
      setProgress(0); // 重置進度
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            // 稍微延遲一下再跳轉到下一步，讓使用者看到 100%
            setTimeout(() => setCurrentStep(3), 500);
            return 100;
          }
          // 模擬隨機進度增長，讓它看起來更逼真一點
          return prevProgress + Math.random() * 15;
        });
      }, 300); // 每 300 毫秒更新一次進度

      // 清除 interval 防止 memory leak
      return () => clearInterval(interval);
    }
  }, [currentStep]);

  const handleStep1Click = () => {
    setCurrentStep(2);
  };

  // 渲染不同步驟的內容
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-8 text-rose-500 animate-pulse">
              🎉 恭喜！ 🎉
            </h1>
            <button
              onClick={handleStep1Click}
              className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full text-2xl shadow-lg hover:scale-105 transform transition duration-300 ease-in-out animate-bounce" // Tailwind 樣式與動畫
            >
              恭喜你抽中 IPHONE 16 PRO，點我領取
            </button>
          </div>
        );
      case 2:
        return (
          <div className="w-full max-w-md text-center">
            <p className="text-xl mb-4 font-semibold text-gray-700">
              正在為您準備獎品... 請勿關閉視窗
            </p>
            <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
              <div
                className="bg-gradient-to-r from-green-400 to-blue-500 h-6 rounded-full transition-all duration-300 ease-linear text-right text-white pr-2 text-sm flex items-center justify-end"
                style={{ width: `${Math.min(progress, 100)}%` }} // 確保寬度不超過 100%
              >
               {Math.min(progress, 100).toFixed(0)}%
              </div>
            </div>
             <p className="text-sm mt-2 text-gray-500 animate-pulse">系統處理中，請稍候...</p>
          </div>
        );
      case 3:
        return (
          <div className="w-full max-w-2xl aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=0`} // 加入 autoplay=1
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      {renderStepContent()}
    </main>
  );
}
