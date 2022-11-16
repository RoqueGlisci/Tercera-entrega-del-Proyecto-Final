import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();
import logger from "../log/logger.js";

const SID = "ACbd348cf8313989404172d42b230bd273";
const TOKEN = "762859021cad6bdab940830a412a881e";

const client = twilio(SID, TOKEN);

export const enviarPedido = async (user) => {
  const options = {
    body: `Nuevo pedido de ${user.nombre} - ${user.email}`,
    from: `whatsapp:+14155238886`,
    to: `whatsapp:${process.env.SERVER_PHONE}`,
  };

  try {
    const msg = await client.messages.create(options);
  } catch (error) {
    logger.error(error);
  }
};
