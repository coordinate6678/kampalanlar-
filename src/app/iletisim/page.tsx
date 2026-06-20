import { createCorporatePageLoader } from "@/lib/corporate/create-page";

const { generateMetadata, Page } = createCorporatePageLoader("iletisim");

export { generateMetadata };
export default Page;
