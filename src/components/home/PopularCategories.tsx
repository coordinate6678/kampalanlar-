import Link from "next/link";
import { categories } from "@/data/categories";

export function PopularCategories() {
  return (
    <section aria-labelledby="categories-heading">
      <h2
        id="categories-heading"
        className="mb-6 text-center font-display text-2xl font-bold text-forest-800 lg:text-3xl"
      >
        Popüler Kategoriler
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/kategori/${category.slug}`}
            className="group flex flex-col items-center gap-2 rounded-xl border border-forest-100 bg-white px-3 py-5 shadow-sm transition-all hover:border-amber-300 hover:shadow-md"
          >
            <span
              className="text-2xl transition-transform group-hover:scale-110"
              aria-hidden="true"
            >
              {category.icon}
            </span>
            <span className="text-center text-sm font-medium text-forest-800 group-hover:text-amber-700">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
