import React, { useRef, useState, useEffect } from "react";

interface ComparisonProps {
  beforeImage: string;
  afterImage: string;
  offset?: number;
  beforeLabel?: string; 
  afterLabel?: string;
}

const ImageComparison: React.FC<ComparisonProps> = ({
  beforeImage = "images/hZWyzuR%20-%20Imgur.webp", 
  afterImage = "images/dqKEHrA%20-%20Imgur.webp",
  loading="lazy",
  offset = 0.5,
  beforeLabel = "Antes",
  afterLabel = "Depois",
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(offset * 100);
  const [dragging, setDragging] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [imageSize, setImageSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  const updateSlider = (clientX: number) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    let x = clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const onMouseDown = () => setDragging(true);
  const onMouseUp = () => setDragging(false);
  const onMouseMove = (e: MouseEvent) => dragging && updateSlider(e.clientX);
  const onTouchStart = () => setDragging(true);
  const onTouchEnd = () => setDragging(false);
  const onTouchMove = (e: TouchEvent) => dragging && updateSlider(e.touches[0].clientX);

  useEffect(() => {
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchend", onTouchEnd);
    document.addEventListener("touchmove", onTouchMove);
    return () => {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("touchmove", onTouchMove);
    };
  }, [dragging]);

  useEffect(() => {
    const img = new Image();
    img.src = beforeImage;
    img.onload = () => setImageSize({ width: img.width, height: img.height });
  }, [beforeImage]);

  return (
    <div className="px-4 md:px-8 lg:px-16 flex flex-col justify-center bg-gradient-to-br from-purple-100 to-pink-100">
      {/* Container das imagens */}
      <div
        ref={wrapperRef}
        className="relative w-full max-w-full"
        style={{
          aspectRatio: `${imageSize.width} / ${imageSize.height}`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Imagem Antes */}
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute top-0 left-0 w-full h-full object-contain"
          draggable={false}
        />

        {/* 🔥 Fundo branco e Imagem Depois (código do snippet que você enviou) */}
        <div
          className="absolute top-0 left-0 w-full h-full flex justify-start"
          style={{
            clipPath: `inset(0 0 0 ${sliderPos}%)`,
          }}
        >
          <div className="w-full h-full bg-white flex justify-center items-center">
            <img
              src={afterImage}
              alt={afterLabel}
              className="object-contain max-w-full max-h-full"
              draggable={false}
              style={{
                transition: dragging ? "none" : "all 0.2s ease-out",
              }}
            />
          </div>
        </div>

        {/* 🔥 Camada de sombra sobre as imagens (não afeta linha/handle) */}
        {hovered && !dragging && (
          <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none z-10"></div>
        )}

        {/* Linha do Slider */}
        <div
          className="absolute top-0 h-full z-30"
          style={{
            left: `${sliderPos}%`,
            width: "2px",
            background: "white",
            boxShadow: "0 0 12px rgba(255,255,255,0.9)",
            transform: "translateX(-1px)",
          }}
        />

        {/* Handle */}
        <div
          className="absolute top-0 h-full w-8 cursor-ew-resize z-40 -translate-x-1/2 flex justify-center items-center"
          style={{ left: `${sliderPos}%` }}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
        >
          <div
            className="w-8 h-8 bg-pink-100 border-2 border-black rounded-full flex items-center justify-center"
            style={{ boxShadow: "0 0 12px rgba(255,255,255,0.8)" }}
          >
            <span className="absolute left-1.5 top-1/2 transform -translate-y-1/2 w-2 h-2 border-t-2 border-l-2 border-black rotate-[-45deg]"></span>
            <span className="absolute right-1.5 top-1/2 transform -translate-y-1/2 w-2 h-2 border-t-2 border-l-2 border-black rotate-[135deg]"></span>
          </div>
        </div>

        {/* Labels */}
        {hovered && !dragging && (
          <>
            <div
              className="absolute left-10 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm font-bold z-40"
              style={{ top: "50%", transform: "translate(-50%, -50%)" }}
            >
              {beforeLabel}
            </div>
            <div
              className="absolute right-10 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm font-bold z-40"
              style={{ top: "50%", transform: "translate(50%, -50%)" }}
            >
              {afterLabel}
            </div>
          </>
        )}
      </div>

      {/* Gradiente com texto abaixo */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center px-4 py-8 md:py-12 bg-gradient-to-b from-transparent to-pink-100">
        <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
          Ainda Hoje, seu filho vai entender os ensinamentos bíblicos 
          usando esse inédito material. Chega de Dúvidas!
        </h2>
        <div className="mt-10 mb-5">
          <a
            href="#plano-basico"
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl text-lg sm:text-xl font-bold hover:brightness-110 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2 shadow-lg w-full" 
          >
            QUERO ADQUIRIR AGORA
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageComparison;
