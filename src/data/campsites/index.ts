import { akdenizCampsites } from "./akdeniz";
import { egeCampsites } from "./ege";
import { karadenizCampsites } from "./karadeniz";
import { marmaraCampsites } from "./marmara";
import { enrichCampsiteImages } from "./helpers";

export const campsites = [
  ...marmaraCampsites,
  ...egeCampsites,
  ...akdenizCampsites,
  ...karadenizCampsites,
].map(enrichCampsiteImages);

export { akdenizCampsites, egeCampsites, karadenizCampsites, marmaraCampsites };
