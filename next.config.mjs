import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["res.cloudinary.com"],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
