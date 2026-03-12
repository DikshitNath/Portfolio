const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-gray-50 dark:bg-[#050505] transition-colors duration-300">
      <svg
        className="absolute w-full h-full opacity-60 dark:opacity-40" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="fingerprint"
            x="0"
            y="0"
            width="40" 
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(2) rotate(0)" 
          >
            {/* This path creates a clearer 'wavy line' texture */}
            <path
              d="M0 20 Q10 10 20 20 T40 20"
              className="stroke-gray-300 dark:stroke-[#222]" 
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M0 40 Q10 30 20 40 T40 40"
              className="stroke-gray-300 dark:stroke-[#222]" 
              strokeWidth="1.5"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fingerprint)" />
      </svg>
      
      {/* Optional: A gradient overlay to fade the edges like the design */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-gray-50 dark:from-[#050505] dark:via-transparent dark:to-[#050505] opacity-80"></div>
    </div>
  );
};

export default BackgroundPattern;