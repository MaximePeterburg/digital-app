import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Markerplace for high-quality{" "}
            <span className="text-indigo-600">digital assets</span>.
          </h1>
          <p className="max-w-prose text-lg text-muted-foreground">
            Welcome to Digital App. Every asset on our platform is verified by
            our team to ensure our highest quality standards.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>
        {/*TODO: List products */}
      </MaxWidthWrapper>
    </>
  );
}
