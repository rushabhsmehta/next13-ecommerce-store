import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import getTourPackages from "@/actions/get-tourPackages";

import ProductList from "@/components/product-list";
import TourPackageList from "@/components/tourPackage-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const tourPackages = await getTourPackages({ isFeatured: true});
  const billboard = await getBillboard("9fb6f084-7916-4fcd-9304-0ff2876805cb");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard
          data={billboard}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <TourPackageList title="Tour Packages" items={tourPackages} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;
