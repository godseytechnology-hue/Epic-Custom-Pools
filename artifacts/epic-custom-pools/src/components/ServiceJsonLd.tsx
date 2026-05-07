import siteConfig from '@/config/siteConfig';

type ServiceJsonLdProps = {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
};

export default function ServiceJsonLd({ serviceName, serviceDescription, serviceUrl }: ServiceJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: siteConfig.siteName,
        url: siteConfig.siteUrl,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Fort Worth',
          addressRegion: 'TX',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 32.7555,
          longitude: -97.3308,
        },
        areaServed: siteConfig.serviceCities.map((city: string) => ({
          '@type': 'City',
          name: city,
        })),
      },
      {
        '@type': 'Service',
        name: serviceName,
        description: serviceDescription,
        url: `${siteConfig.siteUrl}${serviceUrl}`,
        provider: {
          '@type': 'LocalBusiness',
          name: siteConfig.siteName,
          url: siteConfig.siteUrl,
        },
        areaServed: {
          '@type': 'State',
          name: 'Texas',
        },
        serviceType: serviceName,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
