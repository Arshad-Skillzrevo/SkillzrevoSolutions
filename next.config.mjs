/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Copy the same redirects but as JS objects here
      {
        source: "/explore-courses",
        destination: "https://academy.skillzrevo.com/explore-courses",
        permanent: true,
      },
          {
        "source": "/work-with-us",
        "destination": "https://academy.skillzrevo.com/work-with-us",
        "permanent": true
    },
      {
        source: "/corporate-training",
        destination: "https://academy.skillzrevo.com/corporate-training",
        permanent: true,
      },
      {
        source: "/our-services",
        destination: "https://academy.skillzrevo.com/our-services",
        permanent: true,
      },
      {
        source: "/channel-partner",
        destination: "https://academy.skillzrevo.com/channel-partner",
        permanent: true,
      },
      {
        source: "/comparecourses",
        destination: "https://academy.skillzrevo.com/CompareCourses",
        permanent: true,
      },
      {
        source: "/shippinganddelivery",
        destination: "https://academy.skillzrevo.com/ShippingandDelivery",
        permanent: true,
      },
      {
        source: "/termsandconditions",
        destination: "https://academy.skillzrevo.com/TermsandConditions",
        permanent: true,
      },
      {
        source: "/privacypolicy",
        destination: "https://academy.skillzrevo.com/PrivacyPolicy",
        permanent: true,
      },
      {
        source: "/cancellation-refund-policy",
        destination:
          "https://academy.skillzrevo.com/cancellation-refund-policy",
        permanent: true,
      },
      {
        source: "/courses/:slug*",
        destination: "https://academy.skillzrevo.com/courses/:slug*",
        permanent: true,
      },
      {
        source: "/enroll",
        destination: "https://academy.skillzrevo.com/enroll",
        permanent: true,
      },
      {
        source: "/dashboard",
        destination: "https://lms.skillzrevo.com/dashboard",
        permanent: true,
      },
      {
        source: "/blog/:slug*",
        destination: "https://academy.skillzrevo.com/blog/:slug*",
        permanent: true,
      },
    ];
  },

 images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "academy.skillzrevo.com", // if you ever serve images from your domain
      },
    ],
    unoptimized: true,  // (optional) ensure optimization stays on
  },
};

export default nextConfig;
