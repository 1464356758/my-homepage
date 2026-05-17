let savedData = null;

export default async function handler(req, res) {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // 获取数据
  if (req.method === "GET") {

    return res.status(200).json(
      savedData || {
        personalInfo: {
          name: "张三",
          avatar: "",
          bio: "欢迎来到我的主页",
          links: []
        },
        cards: []
      }
    );

  }

  // 保存数据
  if (req.method === "POST") {

    savedData = req.body.data;

    return res.status(200).json({
      success: true
    });

  }

}