// app/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Design ROI Calculator | DesignWise',
  description: 'Calculate your interior design investment return easily. Fast, accurate, and fully SEO-optimized tool for professionals.',
  openGraph: {
    title: 'Interior Design ROI Calculator | DesignWise',
    description: 'Use our free tool to estimate your ROI on interior design investments.',
    url: 'https://designwise.com',
    siteName: 'DesignWise',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Interior Design ROI Tool',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@designwise',
    creator: '@designwise',
  },
};

export default function HomePage() {
  return (
    <>
      <header className="bg-white shadow-md py-4 px-6">
        <h1 className="text-2xl font-bold text-gray-800">DesignWise ROI Calculator</h1>
      </header>

      <main className="p-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Calculate Your Interior Design ROI</h2>
        <p className="text-gray-600 mb-6">
          Use our simple calculator to estimate the return on your interior design projects.
        </p>

        {/* Simple calculator form */}
        <form className="grid gap-4">
          <label className="flex flex-col">
            Project Cost
            <input type="number" placeholder="₹ 5,00,000" className="border p-2 rounded-md" />
          </label>
          <label className="flex flex-col">
            Expected Property Value Increase
            <input type="number" placeholder="₹ 6,50,000" className="border p-2 rounded-md" />
          </label>
          <button type="submit" className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700">
            Calculate ROI
          </button>
        </form>
      </main>

      <footer className="text-center text-sm text-gray-500 mt-10 mb-4">
        &copy; {new Date().getFullYear()} DesignWise. All rights reserved.
      </footer>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Interior Design ROI Calculator',
            url: 'https://designwise.com',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'All',
            description:
              'A free tool to calculate the return on investment for your interior design projects.',
          }),
        }}
      />
    </>
  );
}
