const { getResult } = require("./getSendResult");
const { pathToRegexp } = require("path-to-regexp");
const jwt = require("../../util/jwt");
const settings = require("../../settings");

module.exports = (req, res, next) => {
  const apis = settings.needTokenApi.filter((api) => {
    const reg = pathToRegexp(api.path);
    return api.method === req.method && reg.test(req.path);
  });

  if (
    (apis.length === 0 && !req.path.startsWith("/admin")) ||
    req.path === "/admin/user/login"
  ) {
    next();
    return;
  }

  const result = jwt.verify(req);
  if (!result.msg) {
    //认证通过
    req.userId = result.id;

    // 验证是不是管理员后台的请求
    if (req.path.startsWith("/admin")) {
      if (result.role == "admin") {
        next();
        return;
      } else {
        res.send(getResult(null, 2, "无权限访问，请使用管理员账户登录"));
        return;
      }
    }
  } else {
    //认证失败
    res.send(getResult(null, 2, result.msg));
    return;
  }
};
