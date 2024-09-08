import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
