"use client";
import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import Loading from '@/ui/loading';
import { AccessButton } from '@/components/buttons/AccessButton';
import BlockchainPage from './Halaman/3-blockchain/page';
import EbookPage from './Halaman/8-e-book/page';
import InvestingPage from './Halaman/2-investing/page';
import LiveclassPage from './Halaman/4-liveclass/page';
import TradingPage from './Halaman/1-trading/page';
import AllClassesPage from './Halaman/0-all-classes/page';

export default function HomePage() {
  const { data: session, status } = useSession();
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [isTrialUser, setIsTrialUser] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      if (session?.accessToken) {
        try {
          const response = await fetch("/api/verify-role", {
            headers: {
              Authorization: `Bearer {session.accessToken}`,
            },
          });
          
          if (!response.ok && response.status === 429) {
            setTimeout(checkAccess, 5000);
            return;
          }

          if (response.ok) {
            const data = await response.json();
            setHasAccess(true);
            setIsTrialUser(data.isTrialUser);
          } else {
            setHasAccess(false);
          }
        } catch (error) {
          console.error("Error verifying role:", error);
          setHasAccess(false);
        }
      } else {
        setHasAccess(false);
      }
      setLoading(false);
    };

    if (status === "authenticated") {
      checkAccess();
    } else if (status === "unauthenticated") {
      setLoading(false);
      setHasAccess(false);
    }
  }, [session, status]);

  const renderContent = () => {
    return (
      <div className="min-h-screen relative">
        <div 
          className="fixed inset-0 z-0 bg-black"
        >
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 py-8">
            <div className="mt-5">
              <AllClassesPage />
            </div>
            <div className="mt-5">
              <TradingPage />
            </div>
            <div className="mt-5">
              <InvestingPage />
            </div>
            <div className="mt-5">
            <BlockchainPage />
            </div>
            <div className="mt-5">
              <LiveclassPage />
            </div>
            <div className="text-center text-gray-500 text-sm mt-8 mb-20">
              © {new Date().getFullYear()} Akademi Crypto. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading || status === "loading") {
    return <Loading />;
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">
        <div className="auth-box bg-gray-800/90 p-8 rounded-2xl backdrop-blur-md max-w-md w-full">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            Login untuk Akses Penuh
          </h2>
          <p className="text-gray-400 mb-6 text-sm">
            Silahkan login untuk mengakses semua fitur premium kami:
            <ul className="mt-2 space-y-1">
              <li className="flex items-center gap-2">
                <span className="text-purple-400">•</span> Modul pembelajaran crypto
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">•</span> Research dan analisis pasar
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">•</span> Komunitas ekslusif
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">•</span> dll
              </li>
            </ul>
          </p>
          <button
            onClick={() => signIn("discord")}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            <i className="fas fa-lock-open mr-2"></i> Masuk dengan Discord
          </button>
        </div>
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">
        <div className="auth-box bg-gray-800/90 p-8 rounded-2xl backdrop-blur-md max-w-md w-full">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400 mb-6">
            Akses Ditolak
          </h2>
          <p className="text-gray-400 mb-6">
            Anda tidak memiliki akses ke halaman ini. Silakan hubungi admin untuk informasi lebih lanjut.
          </p>
          <div className="flex gap-4">
            <AccessButton />
            <button
              onClick={() => signOut()}
              className="flex-1 py-3 rounded-lg bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <i className="fas fa-sign-out-alt mr-2"></i> Keluar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return renderContent();
}
