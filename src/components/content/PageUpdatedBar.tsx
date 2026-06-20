function formatPageDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

interface PageUpdatedBarProps {
  updatedAt: string;
  label?: string;
}

export function PageUpdatedBar({
  updatedAt,
  label = "Son güncelleme",
}: PageUpdatedBarProps) {
  return (
    <p className="mt-3 text-sm text-gray-500">
      <time dateTime={updatedAt} itemProp="dateModified">
        {label}: {formatPageDate(updatedAt)}
      </time>
    </p>
  );
}
