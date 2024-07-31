'use client'

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

function SelectorLenguaje() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialLanguage = searchParams.get('lang') || null;
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(initialLanguage);

    const handleLanguageChange = (value: string) => {
        setSelectedLanguage(value);
    };

    useEffect(() => {
        if (selectedLanguage) {
            router.push(`/${selectedLanguage}`);
        }
    }, [selectedLanguage, router]);

    return (
        <Select onValueChange={handleLanguageChange} value={selectedLanguage || ''}>
            <SelectTrigger className="w-full sm:w-auto bg-slate-500 text-white">
                <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
            </SelectContent>
        </Select>
    );
}

export default SelectorLenguaje;
