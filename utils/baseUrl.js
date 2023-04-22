const baseUrl =
    process.env.NODE_ENV !== "production"
        ? "http://localhost:3000"
        : "https://puce-wild-xerus.cyclic.app"

module.exports = baseUrl;
