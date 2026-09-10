import http from "node:http"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const zipPath = path.join(root, "public", "burhan-tekyildiz-simply.zip")
const pagePath = path.join(root, "public", "indir.html")
const port = 43149

const server = http.createServer((req, res) => {
  const url = req.url ?? "/"

  if (url.startsWith("/site-paket.b64.txt")) {
    const b64Path = path.join(root, "public", "site-paket.b64.txt")
    const stat = fs.statSync(b64Path)
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=us-ascii",
      "Content-Length": String(stat.size),
      "Cache-Control": "no-store",
    })
    fs.createReadStream(b64Path).pipe(res)
    return
  }

  if (url.startsWith("/burhan-tekyildiz-simply.zip")) {
    const stat = fs.statSync(zipPath)
    res.writeHead(200, {
      "Content-Type": "application/zip",
      "Content-Disposition": 'attachment; filename="burhan-tekyildiz-simply.zip"',
      "Content-Length": String(stat.size),
      "Cache-Control": "no-store",
    })
    fs.createReadStream(zipPath).pipe(res)
    return
  }

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
  res.end(fs.readFileSync(pagePath))
})

server.listen(port, "0.0.0.0", () => {
  console.log(`Download page: http://127.0.0.1:${port}/`)
})
