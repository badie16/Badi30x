"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const { language } = useLanguage();
    const t = getDictionary(language);

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full text-center"
            >
                <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-red-500/10 rounded-full">
                        <AlertTriangle className="w-12 h-12 text-red-500" />
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-white mb-4">
                    {t.common.errorTitle}
                </h1>

                <p className="text-muted-foreground mb-8">
                    {t.common.errorDescription}
                </p>

                <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                    <RefreshCw className="w-4 h-4" />
                    {t.common.retry}
                </button>
            </motion.div>
        </div>
    );
}
