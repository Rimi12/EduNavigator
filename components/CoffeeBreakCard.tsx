"use client";

import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

export function CoffeeBreakCard({ content }: { content: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white shadow-lg"
        >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 opacity-10">
                <Coffee className="w-32 h-32" />
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-2 font-bold mb-3 text-white/90">
                    <Coffee className="w-5 h-5" />
                    Kávészünet Összefoglaló (Micro-Learning)
                </div>
                <p className="text-lg font-medium leading-relaxed drop-shadow-sm">
                    {content}
                </p>
            </div>
        </motion.div>
    );
}
