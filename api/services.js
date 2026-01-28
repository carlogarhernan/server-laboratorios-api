import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "server_laboratorios_servicios.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: "No se pudo cargar el archivo de servicios"
    });
  }
}
