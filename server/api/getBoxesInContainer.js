import { connection } from "../db.js";

export async function getBoxesInContainer(req, res) {
  try {
    const sql = `
            SELECT *
            FROM boxes
            LEFT JOIN containers 
            ON boxes.container_id = containers.id
            WHERE boxes.container_id = ?
            ;`;
    const [result] = await connection.execute(sql, [req.params.id]);
    return res.json({
      status: "success",
      list: result,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      status: "error",
      list: [],
      msg: "Serverio klaida",
    });
  }
}
