import { createCorporatePageLoader } from "@/lib/corporate/create-page";

const { generateMetadata, Page } = createCorporatePageLoader("kullanim-sartlari");

export { generateMetadata };
export default Page;
