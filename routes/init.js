const express = require("express");
const app = express();


// 映射public目录中的静态资源
const path = require("path");
const staticRoot = path.resolve(__dirname, "../public");
app.use(express.static(staticRoot));

// 解析 application/x-www-form-urlencoded 格式的请求体
app.use(express.urlencoded({ extended: true }));

// 解析 application/json 格式的请求体
app.use(express.json());
app.use(function(req, res,next){
  // console.log(req);
  console.log("请求进来了")
  next();
})

// 处理 api 的请求


// 把上面的路由抽离出来
app.use("/api/student", require("./api/student"));
app.use("/api/user", require("./api/user"));
app.use("/api/product", require("./api/product"))
app.use("/api/category", require("./api/category"))
app.use("/api/display", require("./api/display"))
app.use("/api/navigation", require("./api/navigation"))


// 处理错误的中间件
app.use(require("./routeTool/errorMiddleware"));

const port = 5009;
app.listen(port, () => {
  console.log(`服务器启动\n开始监听 ${port}`);
});
