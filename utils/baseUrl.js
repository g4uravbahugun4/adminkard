const baseUrl =
    process.env.NODE_ENV !== "production"
        ? "http://localhost:3000"
        : "https://adminkard-bgs9.vercel.app/"

module.exports = baseUrl;
