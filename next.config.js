// module.exports = {
//     eslint: {
//         // Warning: This allows production builds to successfully complete even if
//         // your project has ESLint errors.
//         ignoreDuringBuilds: true,
//     },
//     // output: "export",
//     // basePath: "/PersonalWebsite",
//     // distDir: "out",
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "out",
    output: "export",
    reactStrictMode: true,
}

module.exports = nextConfig
