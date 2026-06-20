import { createCorporatePageLoader } from "@/lib/corporate/create-page";

const { generateMetadata, Page } = createCorporatePageLoader("gizlilik-politikasi");

export { generateMetadata };
export default Page;
