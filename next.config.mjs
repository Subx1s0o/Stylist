import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
