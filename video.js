export default async function handler(req, res) {

  const biliUrl = req.query.url;

  if (!biliUrl) {
    return res.status(400).json({
      error: "没有传入B站链接"
    });
  }

  const api =
    "https://api.5ikf.top/api/jmp?dm=sy858&key=82743b1715e2496ed8b7b06454d7494e&url=" +
    encodeURIComponent(biliUrl);

  try {

    const response = await fetch(api);

    const data = await response.json();

    let videoUrl = data.data.playAddr;

    videoUrl = videoUrl.replace(/\\\//g, "/");

    res.setHeader("Access-Control-Allow-Origin", "*");

    return res.status(200).json({
      video: videoUrl,
      title: data.data.desc,
      cover: data.data.cover
    });

  } catch (e) {

    return res.status(500).json({
      error: "解析失败"
    });

  }

}