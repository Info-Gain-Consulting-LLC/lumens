export interface GalleryImage {
  src: string;
  alt: string;
  category:
    | "exterior"
    | "interior"
    | "aerial"
    | "bathroom"
    | "kitchen"
    | "bedroom"
    | "living";
  caption: string;
}
