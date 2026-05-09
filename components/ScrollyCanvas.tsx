"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";
import Overlay from "./Overlay";

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, 119]);

  useEffect(() => {
    // Preload images
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises: Promise<void>[] = [];
      
      for (let i = 0; i <= 119; i++) {
        const img = new Image();
        const indexStr = i.toString().padStart(3, '0');
        img.src = `/sequence/frame_${indexStr}_delay-0.066s.png`;
        
        const promise = new Promise<void>((resolve) => {
          img.onload = () => resolve();
          img.onerror = () => resolve(); // continue even if one fails
        });
        
        loadedImages.push(img);
        promises.push(promise);
      }
      
      await Promise.all(promises);
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    let animationFrameId: number;

    const render = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (!canvas || !context) return;

      const currentIndex = Math.min(
        119,
        Math.max(0, Math.round(frameIndex.get()))
      );

      const img = images[currentIndex];
      if (!img) return;

      // Adjust canvas size to match window size for proper rendering
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Object fit cover logic
      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );
      const x = canvas.width / 2 - (img.width / 2) * scale;
      const y = canvas.height / 2 - (img.height / 2) * scale;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    const unsubscribe = frameIndex.on("change", () => {
      animationFrameId = requestAnimationFrame(render);
    });

    // Render initial frame
    render();

    // Handle resize
    window.addEventListener("resize", render);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", render);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {images.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm tracking-widest z-0">
            LOADING EXPERIENCE...
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        {/* Subtle dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
