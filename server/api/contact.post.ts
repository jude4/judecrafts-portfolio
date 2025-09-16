import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<{
      name: string;
      email: string;
      message: string;
    }>(event);
    if (!body?.name || !body?.email || !body?.message) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing required fields",
      });
    }

    const config = useRuntimeConfig();
    const resendApiKey = config.resendApiKey as string | undefined;
    const toEmail = "judeufuomao@gmail.com";

    if (!resendApiKey) {
      throw createError({
        statusCode: 500,
        statusMessage: "Email service not configured",
      });
    }

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [toEmail],
      reply_to: body.email,
      subject: `New message from ${body.name}`,
      text: `Name: ${body.name}\nEmail: ${body.email}\n\n${body.message}`,
    });

    return { ok: true };
  } catch (err: any) {
    if (err?.statusCode) throw err;
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send message",
    });
  }
});
