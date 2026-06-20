import { wikimedia } from "@/lib/media/wikimedia";

/** Kamp ekipmanı slug → konuya özgü Wikimedia görselleri (1920px) */
export const EQUIPMENT_IMAGES: Record<string, string> = {
  cadir: wikimedia("e/e9", "Campement - 20150802 15h44 (10723).jpg"),
  "uyku-tulumu": wikimedia("0/0c", "OutDoor 2018, Friedrichshafen (1X7A0298).jpg"),
  "uyku-mati": wikimedia("0/0b", "Self-inflating mat.jpg"),
  "ocak-mangal": wikimedia(
    "e/ee",
    "Roasting marshmallows with gas stove, camping.jpg"
  ),
  aydinlatma: wikimedia(
    "e/ed",
    "Petzl LED outdoor headlamp, off position in Prague.jpg"
  ),
  sogutucu: wikimedia(
    "8/82",
    "Magikooler Leisure Chest - DPLA - 675e12cf522720317d726b6648e3af49.jpg"
  ),
  "mutfak-gerecleri": wikimedia("c/c2", "Fire pot.jpg"),
  giyim: wikimedia(
    "b/b7",
    "Hikers Snow Kandi IIT Mandi Himachal Jan20 D72 13625.jpg"
  ),
  "sirt-cantasi": wikimedia(
    "2/21",
    "Art backpacking kid hiking BBaccus NPS photo (23061005462).jpg"
  ),
  "su-matri": wikimedia(
    "4/47",
    "Nalgene Wide Mouth water bottle (49126638208).jpg"
  ),
  navigasyon: wikimedia("4/4d", "Het duimkompas met kaart.jpg"),
  "ilk-yardim": wikimedia("7/7c", "First Aid box, Red Cross.JPG"),
  "guc-kaynagi": wikimedia("3/31", "Portable solar charger.jpg"),
  "kamp-mobilyasi": wikimedia("b/bb", "Camping food outdoor.jpg"),
};

export const EQUIPMENT_INDEX_IMAGE = EQUIPMENT_IMAGES.cadir;

export function getEquipmentImage(slug: string): string | undefined {
  return EQUIPMENT_IMAGES[slug];
}
