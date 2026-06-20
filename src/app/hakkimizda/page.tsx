import { createCorporatePageLoader } from "@/lib/corporate/create-page";

const { generateMetadata, Page } = createCorporatePageLoader("hakkimizda");

export { generateMetadata };
export default Page;
