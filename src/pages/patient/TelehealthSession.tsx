import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Video, Mic, MicOff, VideoOff, Phone, MessageSquare, Settings } from "lucide-react";

const TelehealthSession = () => {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [sessionEnded, setSessionEnded] = useState(false);

  const endSession = () => {
    setSessionEnded(true);
    setTimeout(() => navigate("/patient/dashboard"), 2000);
  };

  if (sessionEnded) {
    return (
      <div className="min-h-screen bg-foreground flex items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center text-white">
          <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
            <Video className="w-8 h-8 text-success" />
          </div>
          <h2 className="font-display text-2xl font-bold mb-2">Session Complete</h2>
          <p className="text-white/70">Redirecting to your dashboard...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-foreground flex flex-col">
      {/* Video Area */}
      <div className="flex-1 relative">
        {/* Remote Video (Doctor) */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&h=800&fit=crop" alt="Dr. Sarah Chen" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white text-sm">Dr. Sarah Chen</div>
        </div>

        {/* Local Video (Self) */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="absolute top-4 right-4 w-48 h-36 rounded-xl overflow-hidden border-2 border-white/20 shadow-xl">
          {isVideoOff ? (
            <div className="w-full h-full bg-muted flex items-center justify-center"><VideoOff className="w-8 h-8 text-muted-foreground" /></div>
          ) : (
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop" alt="You" className="w-full h-full object-cover" />
          )}
          <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-white text-xs">You</div>
        </motion.div>

        {/* Session Info */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-xl text-white">
          <p className="text-sm font-medium">Session in Progress</p>
          <p className="text-xs text-white/70">42:15</p>
        </div>
      </div>

      {/* Controls */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card border-t border-border p-4">
        <div className="flex items-center justify-center gap-4">
          <button onClick={() => setIsMuted(!isMuted)} className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${isMuted ? "bg-destructive text-white" : "bg-muted hover:bg-muted/80"}`}>
            {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </button>
          <button onClick={() => setIsVideoOff(!isVideoOff)} className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${isVideoOff ? "bg-destructive text-white" : "bg-muted hover:bg-muted/80"}`}>
            {isVideoOff ? <VideoOff className="w-6 h-6" /> : <Video className="w-6 h-6" />}
          </button>
          <button onClick={endSession} className="w-14 h-14 rounded-full bg-destructive text-white flex items-center justify-center hover:bg-destructive/90 transition-colors">
            <Phone className="w-6 h-6 rotate-[135deg]" />
          </button>
          <button className="w-14 h-14 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
            <MessageSquare className="w-6 h-6" />
          </button>
          <button className="w-14 h-14 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default TelehealthSession;
