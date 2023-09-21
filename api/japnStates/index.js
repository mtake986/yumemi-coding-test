const apiKey = "C52t390Q8f4qFws9q7vgCyaOUtAlPkGzmtWcogVY";
const headers = { "X-API-KEY": apiKey };

export default async function handler(req, res) {
    fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
      headers,
    })
      .then((response) => response.json())
      .then((data) => {
        res.status(200).json(data);
      })
}
