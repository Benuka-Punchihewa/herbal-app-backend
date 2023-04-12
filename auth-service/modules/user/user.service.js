const CommonUtil = require("../common/common.util");

const createUser = async (reqBody) => {
  const AxiosInstance = CommonUtil.getAxiosInsance(
    process.env.USER_SERVICE_BASE_URL
  );
  const response = await AxiosInstance.post(`/users`, reqBody)
    .then((res) => {
      return CommonUtil.buildAxiosResponse(true, res.data);
    })
    .catch((err) => {
      console.log(err);
      return CommonUtil.buildAxiosResponse(
        false,
        err.response.data,
        err.response.status
      );
    });

  return response;
};

module.exports = { createUser };
