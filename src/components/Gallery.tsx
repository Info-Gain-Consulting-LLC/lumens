"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { galleryImages } from "@/data/gallery";
import { GalleryImage } from "@/types/gallery";

type FilterCategory = "all" | GalleryImage["category"];

const filterButtons: { label: string; value: FilterCategory }[] = [
  { label: "All", value: "all" },
  { label: "Exterior", value: "exterior" },
  { label: "Interior", value: "interior" },
  { label: "Bedroom", value: "bedroom" },
  { label: "Kitchen", value: "kitchen" },
  { label: "Bathroom", value: "bathroom" },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const navigateLightbox = useCallback(
    (direction: 1 | -1) => {
      if (selectedImage === null) return;
      const currentIndexInFiltered = filteredImages.findIndex(
        (img) => img.src === galleryImages[selectedImage].src
      );
      const nextIndex = currentIndexInFiltered + direction;
      if (nextIndex >= 0 && nextIndex < filteredImages.length) {
        const globalIndex = galleryImages.findIndex(
          (img) => img.src === filteredImages[nextIndex].src
        );
        setSelectedImage(globalIndex);
      }
    },
    [selectedImage, filteredImages]
  );

  useEffect(() => {
    if (selectedImage === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, navigateLightbox]);

  return (
    <section id="gallery" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            THE RESIDENCES
          </p>
          <h2 className="font-(family-name:--font-playfair) text-4xl md:text-5xl font-bold text-text mb-4">
            Experience Lumens
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            A curated look at every detail of your future home
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setActiveFilter(btn.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === btn.value
                  ? "bg-accent text-background"
                  : "border border-accent text-accent hover:bg-accent/10"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => {
              const globalIndex = galleryImages.findIndex(
                (img) => img.src === image.src
              );
              return (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid mb-4"
                >
                  <motion.div
                    className="relative cursor-pointer overflow-hidden rounded-lg group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedImage(globalIndex)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end">
                      <p className="text-accent text-sm font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {image.caption}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white text-3xl z-10 hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <IoClose />
            </button>

            {/* Left Arrow */}
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-2xl z-10 hover:text-accent transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(-1);
              }}
            >
              <FaChevronLeft />
            </button>

            {/* Right Arrow */}
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-2xl z-10 hover:text-accent transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(1);
              }}
            >
              <FaChevronRight />
            </button>

            {/* Image */}
            <div
              className="relative w-[90vw] h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                style={{ objectFit: "contain" }}
                sizes="90vw"
              />
            </div>

            {/* Caption */}
            <p className="text-accent text-lg mt-4 font-medium">
              {galleryImages[selectedImage].caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
