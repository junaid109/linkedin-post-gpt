/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/junaid109/linkedin-post-gpt ",
        permanent: false,
      },
      {
        source: "/deploy",
        destination: "https://vercel.com/",
        permanent: false,
      },
    ];
  },
};
