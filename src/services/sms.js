import twilio from "twilio";
import logger from "../log/logger.js";

const SID = "AC69ba42e200c9a49ca6e1c290606008d5";
const TOKEN = "608163bede0cf0755a1917f7e9561bf5";
const PHONE = "+14249554809";

const client = twilio(SID, TOKEN);
export const enviarPedido = async (userPhone, cartId) => {
  const options = {
    body: `Pedido ID ${cartId} ingresado con exito`,
    from: PHONE,
    to: userPhone,
  };

  try {
    const msg = await client.messages.create(options);
  } catch (error) {
    logger.error(error);
  }
};
