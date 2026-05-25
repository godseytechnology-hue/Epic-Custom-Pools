type BreadcrumbItem = {
  name: string;
  href: string;
};

type BreadcrumbJsonLdProps = {
  items: BreadcrumbItem[];
  siteUrl: string;
};

export default function BreadcrumbJsonLd({ items, siteUrl }: BreadcrumbJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
