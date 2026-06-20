import { createCorporatePageLoader } from "@/lib/corporate/create-page";

const { generateMetadata, Page } = createCorporatePageLoader("editorial-politika");

export { generateMetadata };
export default Page;
