"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ReusableGrid } from "@/components/ReusableGrid";

export interface GridItem {
  img: string;
  title: string;
  description: string;
  price?: string;
  discountPrice?: string;
  buttons: { name: string; link: string }[];
}

const komunitasData: GridItem[] = [
  {
    img: "CSV.png",
    title: "TRIAL 24 JAM",
    description: "coba seluruh konten kami selama 24 jam.",
    price: "Free",
    discountPrice: "",
    buttons: [
      { name: "Get Trial", link: "#" },
    ],
  },
  {
    img: "CSV.png",
    title: "LIFTIME Access",
    description: "Dapatkan akses seumur hidup ke semua konten",
    price: "Rp 520,000",
    discountPrice: "Rp 185,000",
    buttons: [
      { name: "BUY NOW!", link: "https://wa.me/6285229282554?text=Saya%20tertarik%20dengan%20lifetime%20akses%20dengan%20harga%20diskon%20Rp%20185,000" },
    ],
  },
  {
    img: "CSV.png",
    title: "3 months access",
    description: "Dapatkan akses ke semua konten kami selama 3 bulan.",
    price: "Rp 150,000",
    discountPrice: "Rp 75,000",
    buttons: [
      { name: "BUY NOW!", link: "https://wa.me/6285229282554?text=Saya%20tertarik%20dengan%203%20months%20akses%20dengan%20harga%20diskon%20Rp%2075,000" },
    ],
  },
  {
    img: "CSV.png",
    title: "1 year access",
    description: "Dapatkan akses ke semua konten kami selama 1 tahun.",
    price: "Rp 250,000",
    discountPrice: "Rp 98,000",
    buttons: [
      { name: "BUY NOW!", link: "https://wa.me/6285229282554?text=Saya%20tertarik%20dengan%201%20year%20akses%20dengan%20harga%20diskon%20Rp%2098,000" },
    ],
  },
];

export default function KomunitasPage() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10">
        <h1 className="text-3xl font-bold text-white mb-8 text-center pt-8">
          JOIN MIROR AC NOW!
          <div className="mt-2 w-16 h-1 mx-auto bg-purple-500 rounded" />
        </h1>

        <ReusableGrid data={komunitasData} />
      </div>
    </div>
  );
}
