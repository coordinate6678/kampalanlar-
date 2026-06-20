import { createCorporatePageLoader } from "@/lib/corporate/create-page";

const { generateMetadata, Page } = createCorporatePageLoader("icerik-uretim-ilkeleri");

export { generateMetadata };
export default Page;
