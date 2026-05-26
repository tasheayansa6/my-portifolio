/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    qualities: [75, 100],
  },
  async headers() {
    return [
      {
        source: '/Teshale_Ayansa_CV.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Teshale_Ayansa_CV.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
