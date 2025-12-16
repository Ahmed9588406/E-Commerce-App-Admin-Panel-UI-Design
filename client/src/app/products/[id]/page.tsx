import ProductInteraction from "@/component/ProductInteraction";
import Image from "next/image";
import products from "@/data/products";
import Link from "next/link";

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  // find product for metadata
  const id = parseInt(params.id, 10);
  const found = products.find((p) => p.id === id);
  if (!found) {
    return { title: "Product not found" };
  }
  return {
    title: found.name,
    description: found.description,
  };
};

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { color?: string; size?: string };
}) {
  const id = parseInt(params.id, 10);
  const foundProduct = products.find((p) => p.id === id);

  if (!foundProduct) {
    return (
      <div className="py-12">
        <p className="text-center text-gray-600">Product not found.</p>
        <div className="text-center mt-4">
          <Link href="/" className="text-indigo-600 underline">
            Back to homepage
          </Link>
        </div>
      </div>
    );
  }

  const colorParam = searchParams?.color;
  const sizeParam = searchParams?.size;

  // Choose a valid color key that exists on the product.images map
  const availableColors = Object.keys(foundProduct.images) as Array<
    keyof typeof foundProduct.images
  >;
  const selectedColor: keyof typeof foundProduct.images =
    colorParam &&
    availableColors.includes(colorParam as keyof typeof foundProduct.images)
      ? (colorParam as keyof typeof foundProduct.images)
      : availableColors[0];

  // Safe image src (never empty or undefined)
  const imageSrc =
    (foundProduct.images && foundProduct.images[selectedColor]) ||
    Object.values(foundProduct.images)[0] ||
    "/placeholder.png";

  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* IMAGE */}
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={foundProduct.name}
            fill
            className="object-contain rounded-md"
          />
        ) : (
          <div className="bg-gray-100 w-full h-full rounded-md" />
        )}
      </div>

      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{foundProduct.name}</h1>
        <p className="text-gray-500">{foundProduct.description}</p>
        <h2 className="text-2xl font-semibold">
          ${foundProduct.price.toFixed(2)}
        </h2>

        <ProductInteraction
          product={foundProduct as any}
          selectedSize={sizeParam || foundProduct.sizes[0]}
          selectedColor={selectedColor}
        />

        {/* CARD INFO */}
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/klarna.png"
            alt="klarna"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/cards.png"
            alt="cards"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/stripe.png"
            alt="stripe"
            width={50}
            height={25}
            className="rounded-md"
          />
        </div>

        <p className="text-gray-500 text-xs">
          By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black">Terms & Conditions</span> and{" "}
          <span className="underline hover:text-black">Privacy Policy</span>. You authorize us to
          charge your selected payment method for the total amount shown. All sales are subject to our
          return and <span className="underline hover:text-black">Refund Policies</span>.
        </p>
      </div>
    </div>
  );
}