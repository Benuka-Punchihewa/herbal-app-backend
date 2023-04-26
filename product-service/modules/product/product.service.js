const Product = require("./product.model");

const save = async (product) => {
  return product.save();
};

const findById = (id) => {
  return Product.findById(id);
};

const findActiveProductById = (id) => {
  return Product.findOne({ _id: id, isDisabled: false });
};

const findPaginatedActiveProducts = async (keyword, pageableObj) => {
  const pipeline = [];

  if (!keyword) keyword = "";
  const queryObj = {
    name: { $regex: keyword, $options: "i" },
    isDisabled: false,
  };

  pipeline.push({
    $match: queryObj,
  });

  pipeline.push({
    $sort: {
      _id: pageableObj.orderBy === "asc" ? 1 : -1,
    },
  });

  pipeline.push({
    $facet: {
      metadata: [{ $count: "totalElements" }],
      data: [
        { $skip: (pageableObj.page - 1) * pageableObj.limit },
        { $limit: pageableObj.limit },
      ],
    },
  });

  const result = await Product.aggregate(pipeline);

  const content = result[0].data;
  const totalElements = result[0]?.metadata[0]?.totalElements || 0;

  return {
    content,
    totalElements,
    totalPages: Math.ceil(totalElements / pageableObj.limit),
  };
};

module.exports = {
  save,
  findById,
  findActiveProductById,
  findPaginatedActiveProducts,
};
