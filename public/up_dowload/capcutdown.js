exports.name = '/capcutdown';
exports.index = async (req, res, next) => {
  const link = req.query.link;
  if (!link) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình ' });

  const axios = require('axios');

  const options = {
    method: 'POST',
    url: 'https://all-video-downloader1.p.rapidapi.com/capcut',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '950508b8eamsh49c883b8dd1bdfbp1e223cjsne14bff897b35',
      'X-RapidAPI-Host': 'all-video-downloader1.p.rapidapi.com'
    },
    data: { url: link }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    return res.json({ error: 'Có lỗi xảy ra khi tải xuống dữ liệu từ CapCut' });
  }
};
