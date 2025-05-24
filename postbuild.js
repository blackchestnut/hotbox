import fs from "fs";
import path from "path";

const from = path.resolve("dist/index.html");
const to = path.resolve("dist/404.html");

fs.copyFile(from, to, (err) => {
  if (err) {
    console.error("❌ Ошибка при копировании 404.html:", err);
  } else {
    console.log("✅ 404.html успешно создан");
  }
});
