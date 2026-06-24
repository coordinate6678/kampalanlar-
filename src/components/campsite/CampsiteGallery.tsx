import { PlaceImage } from "@/components/ui/PlaceImage";

interface CampsiteGalleryProps {
  images: string[];
  altBase: string;
}

export function CampsiteGallery({ images, altBase }: CampsiteGalleryProps) {
  if (images.length === 0) {
    return (
      <div className="relative aspect-[21/9] overflow-hidden rounded-xl">
        <PlaceImage
          src={undefined}
          alt={altBase}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
    );
  }

  const thumbnails = images.slice(1, 5);
  const overflowCount = images.length > 5 ? images.length - 5 : 0;

  return (
    <div className="space-y-3">
      <div className="relative aspect-[21/9] overflow-hidden rounded-xl">
        <PlaceImage
          src={images[0]}
          alt={`${altBase} — fotoğraf 1`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {thumbnails.length > 0 && (
        <div className="grid grid-cols-4 gap-3">
          {thumbnails.map((image, index) => {
            const isOverflowThumb =
              overflowCount > 0 && index === thumbnails.length - 1;

            return (
              <div
                key={`${image}-${index}`}
                className="relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <PlaceImage
                  src={image}
                  alt={`${altBase} — fotoğraf ${index + 2}`}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
                {isOverflowThumb && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-forest-900/55 text-lg font-semibold text-cream"
                    aria-hidden="true"
                  >
                    +{overflowCount}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
