import type { Collection, Photo } from "./types"

// Collection format mapping
const collectionFormats: Record<string, string> = {
  'bali': 'jpeg',
  'morocco': 'webp',
  'tokyo': 'jpg',
  'new-zealand': 'jpg',
  'iceland': 'jpg',
  'urban-portraits': 'jpg'
} as const

// Collection folder name mapping (for case sensitivity)
const collectionFolders: Record<string, string> = {
  'bali': 'Bali',
  'morocco': 'Morocco',
  'tokyo': 'Tokyo',
  'new-zealand': 'new zealand',
  'iceland': 'Iceland',
  'urban-portraits': 'Urban Portraits'
} as const

// Collection image counts and formats
const collectionImages: Record<string, { count: number; formats: string[] }> = {
  'bali': { 
    count: 16,
    formats: ['jpeg', 'jpg']
  },
  'morocco': { 
    count: 21,
    formats: ['webp']
  },
  'tokyo': { 
    count: 20,
    formats: ['jpg']
  },
  'new-zealand': { 
    count: 18,
    formats: ['jpg']
  },
  'iceland': { 
    count: 14,
    formats: ['jpg']
  },
  'urban-portraits': { 
    count: 16,
    formats: ['jpg']
  }
} as const

// Common metadata for photos
const defaultMetadata = {
  camera: "Sony Alpha A7 IV",
  lens: "24-70mm f/2.8",
  aperture: "f/8.0",
  shutterSpeed: "1/250",
  iso: "100",
  focalLength: "35mm",
  takenAt: new Date().toISOString().split("T")[0],
} as const

// Aspect ratios for different image types
const aspectRatios = [
  { width: 1800, height: 1200 }, // 3:2
  { width: 1800, height: 1350 }, // 4:3
  { width: 1800, height: 1080 }, // 16:9
  { width: 1200, height: 1800 }, // 2:3 (portrait)
] as const

// Function to get images for a collection
function getCollectionImages(collectionSlug: string): Photo[] {
  // Get the proper folder name from our mapping instead of generating it
  const folderName = collectionFolders[collectionSlug]
  if (!folderName) return []

  const collectionInfo = collectionImages[collectionSlug]
  if (!collectionInfo) return []
  
  return Array.from({ length: collectionInfo.count }, (_, i) => {
    const index = i + 1
    const format = collectionSlug === 'bali' && index >= 10 && index <= 15 ? 'jpg' : collectionFormats[collectionSlug]
    const imagePath = `/${folderName}/${collectionSlug}-${index}.${format}`
    const dimensions = aspectRatios[index % aspectRatios.length]

    return {
      id: `${collectionSlug}-${index}`,
      src: imagePath,
      width: dimensions.width,
      height: dimensions.height,
      alt: `${collectionSlug} image ${index}`,
      metadata: defaultMetadata,
    }
  })
}

// Function to get cover image path
function getCoverImagePath(folderName: string): string {
  const collectionSlug = folderName.toLowerCase().replace(' ', '-')
  const format = collectionFormats[collectionSlug] || 'jpg'
  return `/${folderName}/cover.${format}`
}

// Collections data
const collections: Collection[] = [
  {
    id: "1",
    slug: "new-zealand",
    title: "Luxury Apartments",
    description: "Breathtaking luxury apartments with premium amenities",
    fullDescription:
      "Our luxury apartments offer some of the most diverse and dramatic living spaces in the city. From high-end finishes to pristine panoramic views, this collection captures the raw beauty and majesty of modern premium living.",
    coverImage: getCoverImagePath("new zealand"),
    tags: ["Luxury", "Apartments", "Premium"],
    featured: true,
    photos: getCollectionImages("new-zealand"),
  },
  {
    id: "2",
    slug: "tokyo",
    title: "Downtown Penthouses",
    description: "The contrast between modern living and city views",
    fullDescription:
      "Our downtown penthouses present a fascinating juxtaposition of ultramodern urban environments and serene private living spaces. This collection explores the visual dialogue between neon-lit cityscapes and tranquil interiors, capturing a unique urban lifestyle.",
    coverImage: getCoverImagePath("Tokyo"),
    tags: ["Urban", "Penthouse", "City View"],
    featured: true,
    photos: getCollectionImages("tokyo"),
  },
  {
    id: "3",
    slug: "bali",
    title: "Suburban Family Homes",
    description: "Peaceful family homes in premium neighborhoods",
    fullDescription:
      "Known for their spacious layouts and family-friendly environments, these suburban homes captivate with their dramatic landscapes, vibrant community heritage, and peaceful atmosphere. This collection documents pristine gardens, modern kitchens, and the warmth of family living.",
    coverImage: getCoverImagePath("Bali"),
    tags: ["Family", "Suburban", "House"],
    featured: true,
    photos: getCollectionImages("bali"),
  },
  {
    id: "4",
    slug: "iceland",
    title: "Modern Villas",
    description: "Dramatic and spacious modern villas",
    fullDescription:
      "These modern villas showcase architectural power and beauty. This collection captures the dramatic contrasts: steaming heated pools alongside massive open-plan living areas, thundering water features, and the ethereal modern lighting dancing above it all.",
    coverImage: getCoverImagePath("Iceland"),
    tags: ["Villa", "Modern", "Luxury"],
    featured: false,
    photos: getCollectionImages("iceland"),
  },
  {
    id: "5",
    slug: "morocco",
    title: "Studio Apartments",
    description: "Vibrant, efficient, and modern studio spaces",
    fullDescription:
      "These studio apartments are a feast for the senses, with their vibrant colors, intricate patterns, and diverse layouts. This collection explores the bustling central locations, ancient architectural influences, vast open views, and the rich tapestry that makes city living so visually captivating.",
    coverImage: getCoverImagePath("Morocco"),
    tags: ["Studio", "Efficient", "City"],
    featured: false,
    photos: getCollectionImages("morocco"),
  },
  {
    id: "6",
    slug: "urban-portraits",
    title: "Commercial Properties",
    description: "Premium office spaces and commercial real estate",
    fullDescription:
      "This collection focuses on the professional element within urban environments. Through detailed property photography, it captures the diversity, energy, and stories of commercial spaces across different business districts and metropolises around the world.",
    coverImage: getCoverImagePath("Urban Portraits"),
    tags: ["Commercial", "Office", "Business"],
    featured: false,
    photos: getCollectionImages("urban-portraits"),
  },
]

// Export functions
export const getAllCollections = (): Collection[] => collections
export const getFeaturedCollections = (): Collection[] => collections.filter(collection => collection.featured)
export const getCollection = (slug: string): Collection | undefined => collections.find(collection => collection.slug === slug)
export const getAllTags = (): string[] => Array.from(new Set(collections.flatMap(collection => collection.tags)))
