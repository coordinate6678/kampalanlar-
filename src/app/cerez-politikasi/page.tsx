import { createCorporatePageLoader } from "@/lib/corporate/create-page";

const { generateMetadata, Page } = createCorporatePageLoader("cerez-politikasi");

export { generateMetadata };
export default Page;
