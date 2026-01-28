import services from "../server_laboratorios_servicios.json";

export default function handler(req, res) {
  res.status(200).json(services);
}
