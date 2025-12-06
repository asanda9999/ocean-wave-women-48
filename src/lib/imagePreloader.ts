/**
 * Utility function to preload images
 * @param imageSources - Array of image sources (imported image modules or URLs)
 */
export const preloadImages = (imageSources: (string | any)[]): Promise<void[]> => {
  const preloadPromises = imageSources
    .filter((src) => src != null) // Filter out null/undefined values
    .map((src) => {
      return new Promise<void>((resolve, reject) => {
        // Handle both imported modules (which are strings) and direct string URLs
        const imageUrl = typeof src === 'string' ? src : String(src);
        
        if (!imageUrl) {
          resolve(); // Skip empty strings
          return;
        }
        
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => {
          // Don't reject, just resolve to continue loading other images
          console.warn(`Failed to preload image: ${imageUrl}`);
          resolve();
        };
        img.src = imageUrl;
      });
    });

  return Promise.all(preloadPromises);
};

