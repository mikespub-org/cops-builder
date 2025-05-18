export const BUILDER_CONFIG = {
  // Your public API key
  apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY,
  
  // Enable local preview
  canTrack: false,
  
  // Disable automatic updates
  useCache: false,
  
  // Local content path
  content: {
    path: './builder/exports'
  }
};
