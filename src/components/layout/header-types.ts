export interface MobileNavLink {
  href: string;
  label: string;
  icon?: string;
}

export interface MobileNavSection {
  title: string;
  links: MobileNavLink[];
}

export interface MobileNavProvince {
  href: string;
  label: string;
  districts: MobileNavLink[];
}

export interface MobileNavData {
  equipment: MobileNavSection;
  guides: MobileNavSection;
  categories: MobileNavSection;
  provinces: MobileNavProvince[];
  hubLink: MobileNavLink;
}
