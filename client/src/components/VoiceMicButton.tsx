import { Mic } from "lucide-react";

const VoiceMicButton = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer rotating gradient ring */}
      <div className="absolute w-64 h-64 rounded-full animate-rotate-gradient opacity-60">
        <div 
          className="w-full h-full rounded-full animate-morph"
          style={{
            background: 'var(--gradient-ai)',
          }}
        />
      </div>
      
      {/* Middle pulsing glow */}
      <div className="absolute w-52 h-52 rounded-full animate-pulse-glow bg-ai-blue/20 blur-2xl" />
      
      {/* Main button */}
      <button 
        className="relative z-10 w-40 h-40 rounded-full bg-card shadow-soft hover:scale-105 transition-transform duration-300 flex items-center justify-center group"
        aria-label="Activar asistente de voz"
      >
        <div className="absolute inset-0 rounded-full animate-morph" style={{
          background: 'var(--gradient-ai)',
          opacity: 0.1,
        }} />
        <Mic className="w-16 h-16 text-primary group-hover:text-ai-cyan transition-colors duration-300" />
      </button>
      
      {/* Orbiting particles */}
      <div className="absolute w-72 h-72 animate-spin" style={{ animationDuration: '20s' }}>
        <div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 rounded-full bg-ai-cyan blur-sm" />
        <div className="absolute bottom-0 left-1/2 w-2 h-2 -ml-1 rounded-full bg-ai-green blur-sm" />
      </div>
      <div className="absolute w-80 h-80 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
        <div className="absolute top-1/2 left-0 w-1.5 h-1.5 -mt-0.75 rounded-full bg-ai-blue blur-sm" />
        <div className="absolute top-1/2 right-0 w-1.5 h-1.5 -mt-0.75 rounded-full bg-ai-glow blur-sm" />
      </div>
    </div>
  );
};

export default VoiceMicButton;
