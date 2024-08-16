'use client'
import { useState } from "react";

const ProductImage = ({ src, alt }: { src: string; alt: string }) => {
  const [loading, setLoading] = useState<boolean>(true);
  return ( 
    <img src={src} alt={alt} className="h-40" 
    onLoad={() => setLoading(false)} />
  )
};

export default ProductImage;
