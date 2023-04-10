const constants = {
  PORT: 5001,
  API: {
    PREFIX: "/api/v1",
  },
  ACCESS: {
    ROLES: {
      ADMIN: "admin",
      SELLER: "seller",
      CUSTOMER: "customer",
      SERVICE: "service",
    },
    SERVICE_IDS: {
      AUTH: "auth",
      USER: "user",
      ORDER: "order",
      PRODUCT: "product",
    },
  },
};

module.exports = constants;
