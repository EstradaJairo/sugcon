process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest, res: any) {
  try {
    const body = await req.json();

    const { name, company, email, phone, plan, sypnosis, hear } = body;

    const user = process.env.user;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.user,
        pass: process.env.pass,
      },
    });

    const transporterAdmin = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.user,
        pass: process.env.pass,
      },
    });

    const mail = await transporter.sendMail({
      from: user,
      to: email,
      replyTo: email,
      subject: "Jairosoft Customer Support",
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">Hello and good day!</div>
      <br></br>
      <div style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">THANK YOU FOR BEING A SPEAKER</div>
      `,
    });

    const mailAdmin = await transporter.sendMail({
      from: user,
      to: "jairo@jairosoft.com",
      replyTo: "jairo@jairosoft.com",
      subject: "Jairosoft Customer Support",
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">Hello and good day!</div>
      <br></br>
      <div style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">SPEAKER INFORMATION:</div>
      <div style="margin-bottom: 5px;">Name: ${name}</div>
      <div style="margin-bottom: 5px;">Company: ${company}</div>
      <div style="margin-bottom: 5px;">Email: ${email}</div>
      <div style="margin-bottom: 5px;">Phone: ${phone}</div>
      <div style="margin-bottom: 5px;">What is the topic you plan to speak on? ${plan}</div>
      <div style="margin-bottom: 5px;">Please write a brief synopsis of the topic. ${sypnosis}</div>
      <div style="margin-bottom: 5px;">How did you hear about us? ${hear}</div>
      </div>
      `,
    });

    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
