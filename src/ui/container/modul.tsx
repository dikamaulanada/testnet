"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { BsGrid3X3GapFill, BsListUl } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import Loading from "@/ui/loading";

interface ModuleItem {
  id: string;
  title: string;
  description: string;
  link: string;
  thumbnailUrl: string;
}

interface ModuleContainerProps {
  modules: ModuleItem[];
  title: string;
  description: string;
  storageKey?: string;
}

export default function ModuleContainer({ 
  modules, 
  title, 
  description,
  storageKey = 'moduleProgress' 
}: ModuleContainerProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [progress, setProgress] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(`/?redirect=${pathname}`);
    }
  }, [status, router, pathname]);

  useEffect(() => {
    const savedViewMode = localStorage.getItem('viewMode');
    if (savedViewMode === 'grid' || savedViewMode === 'list') {
      setViewMode(savedViewMode);
    }
  }, []);

  useEffect(() => {
    const savedProgress = localStorage.getItem(storageKey);
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, [storageKey]);

  const handleViewModeChange = (mode: 'grid' | 'list') => {
    setViewMode(mode);
    localStorage.setItem('viewMode', mode);
  };

  const toggleProgress = (moduleId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newProgress = {
      ...progress,
      [moduleId]: !progress[moduleId]
    };
    setProgress(newProgress);
    localStorage.setItem(storageKey, JSON.stringify(newProgress));
  };

  if (status === "loading") {
    return <Loading />;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              {title}
            </h1>
            <div className="flex gap-3">
              <button
                onClick={() => handleViewModeChange('grid')}
                className={`p-3 rounded-lg transition-all shadow-md ${
                  viewMode === 'grid' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-red-600 hover:text-white'
                }`}
              >
                <BsGrid3X3GapFill size={20} />
              </button>
              <button
                onClick={() => handleViewModeChange('list')}
                className={`p-3 rounded-lg transition-all shadow-md ${
                  viewMode === 'list' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-red-600 hover:text-white'
                }`}
              >
                <BsListUl size={20} />
              </button>
            </div>
          </div>
          <p className="text-gray-400 mb-8 text-lg">{description}</p>
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
              : 'flex flex-col gap-4'
          }`}>
            {modules.map((module) => (
              <Link 
                key={module.id}
                href={module.link}
                className={`group relative block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'flex items-center p-4 bg-gray-800' 
                    : 'aspect-video bg-gray-800'
                }`}
              >
                {viewMode === 'grid' ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={module.thumbnailUrl}
                      alt={module.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-bold text-lg mb-1">
                        {module.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {module.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 flex-shrink-0 relative">
                      <Image
                        src={module.thumbnailUrl}
                        alt={module.title}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg mb-1">
                        {module.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {module.description}
                      </p>
                    </div>
                    <button
                      onClick={(e) => toggleProgress(module.id, e)}
                      className={`p-2 rounded-full transition-all shadow-md ${
                        progress[module.id]
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-700 text-gray-400 hover:bg-green-500 hover:text-white'
                      }`}
                    >
                      <FaCheck size={16} />
                    </button>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
