"use client";

import { useProgressStore } from "@/lib/progressStore";
import { Award, Flame, Star, Trophy, Target, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ALL_BADGES = [
    { id: "Első Kvíz Hibátlanul", icon: Star, description: "Helyesen válaszoltál egy kvízkérdésre próbálkozás nélkül.", color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { id: "Prompt Mester", icon: Sparkles, description: "Szerkesztettél és lefuttattál egy saját promptot a laborban.", color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { id: "Kitartó Tanuló", icon: Flame, description: "Zsinórban 3 napon keresztül is beléptél az oldalra.", color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
    { id: "Alapozó Befejezve", icon: Target, description: "Elvégezted az első 3 bevezető AI modult.", color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" }
];

export default function ProfilePage() {
    const { xp, unlockedBadges, streakDays } = useProgressStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Calculate level (1 level per 100 XP)
    const currentLevel = Math.floor(xp / 100) + 1;
    const currentLevelXp = xp % 100;
    const progressToNext = currentLevelXp; // Since 1 level = 100 XP, % is exactly the remainder

    if (!mounted) return null;

    return (
        <div className="max-w-5xl mx-auto w-full pt-4 sm:pt-8 animate-fade-in pb-12">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                {/* Level Card */}
                <div className="w-full md:w-1/3 bg-card border border-border rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10"></div>

                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4 border-4 border-background shadow-xl">
                        <Trophy className="w-10 h-10 text-primary" />
                    </div>

                    <h2 className="text-muted-foreground font-semibold uppercase tracking-wider text-sm mb-1">Jelenlegi Szint</h2>
                    <div className="text-5xl font-black text-foreground mb-4">Level {currentLevel}</div>

                    <div className="w-full bg-secondary rounded-full h-3 mb-2 overflow-hidden">
                        <div
                            className="bg-primary h-full rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${progressToNext}%` }}
                        />
                    </div>
                    <div className="text-sm font-medium text-muted-foreground w-full flex justify-between">
                        <span>{xp} XP</span>
                        <span>{currentLevel * 100} XP</span>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                    {/* XP Stat */}
                    <div className="bg-card border border-border rounded-3xl p-6 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2.5 bg-amber-500/10 text-amber-500 rounded-xl">
                                <Star className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold">Összesített Tapasztalat</h3>
                        </div>
                        <p className="text-4xl font-black text-foreground mt-2">{xp} <span className="text-lg text-muted-foreground font-semibold">XP</span></p>
                        <p className="text-sm text-muted-foreground mt-2">Folytasd a tanulást és kvízek kitöltését a pontokért!</p>
                    </div>

                    {/* Streak Stat */}
                    <div className="bg-card border border-border rounded-3xl p-6 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2.5 bg-orange-500/10 text-orange-500 rounded-xl">
                                <Flame className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold">Napi Sorozat (Streak)</h3>
                        </div>
                        <p className="text-4xl font-black text-foreground mt-2">{streakDays} <span className="text-lg text-muted-foreground font-semibold">Nap</span></p>
                        <p className="text-sm text-muted-foreground mt-2">Lépj be minden nap, hogy megőrizd a sorozatod!</p>
                    </div>
                </div>
            </div>

            {/* Badges Section */}
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Gyűjtemény (Kitűzők)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {ALL_BADGES.map((badge) => {
                    const isUnlocked = unlockedBadges.includes(badge.id);
                    const Icon = badge.icon;

                    return (
                        <div
                            key={badge.id}
                            className={cn(
                                "border rounded-2xl p-6 flex flex-col items-center text-center transition-all",
                                isUnlocked
                                    ? `bg-card ${badge.border} shadow-sm`
                                    : "bg-secondary/50 border-border opacity-60 grayscale blur-[0.5px]"
                            )}
                        >
                            <div className={cn("w-16 h-16 rounded-2xl mb-4 flex items-center justify-center", isUnlocked ? badge.bg : "bg-muted")}>
                                <Icon className={cn("w-8 h-8", isUnlocked ? badge.color : "text-muted-foreground")} />
                            </div>
                            <h4 className="font-bold text-lg mb-2">{badge.id}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {isUnlocked ? badge.description : "Zárolva. Folytasd a tanulást a feloldáshoz!"}
                            </p>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}
