import nodemailer from "nodemailer";

export async function POST(req: Request): Promise<Response> {
  try {
    console.log("📩 Recibiendo solicitud...");
    const data = await req.json();
    console.log("📌 Datos recibidos:", data);

    if (!data.name || !data.email || !data.phone || !data.message) {
      console.error("❌ Faltan datos en la solicitud");
      return new Response(JSON.stringify({ message: "Faltan datos" }), { status: 400 });
    }

    console.log("📨 Configurando transporte...");
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("📤 Enviando correo...");
    const info = await transporter.sendMail({
      from: `"${data.name}" <${data.email}>`,
      to: "apexcadperu@gmail.com",
      subject: "Nuevo mensaje",
      text: `Nombre: ${data.name}\nCorreo: ${data.email}\nTeléfono: ${data.phone}\nMensaje: ${data.message}`,
    });

    console.log("✅ Correo enviado:", info.response);
    return new Response(JSON.stringify({ message: "Correo enviado" }), { status: 200 });

  } catch (error) {
    console.error("🔥 Error en el servidor:", error);
    return new Response( JSON.stringify({ message: "Error en el servidor", error: (error as Error).toString() }),
    { status: 500 });
  }
}
