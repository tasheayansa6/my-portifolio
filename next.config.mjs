/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    qualities: [75, 100],
  },
  async headers() {
    return [
      {
        source: '/TeshaleAyansa_Resume_v2.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="TeshaleAyansa_Resume_v2.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
