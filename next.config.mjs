/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/:all*(svg|jpg|png|gif|js|webp)',
                locale: false,
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400, must-revalidate',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
