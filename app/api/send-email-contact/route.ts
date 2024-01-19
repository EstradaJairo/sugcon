process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest, res: any) {
  try {
    const body = await req.json();

    const { name, message, emailAddress } = body;

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
      to: emailAddress,
      replyTo: emailAddress,
      subject: "Jairosoft Customer Support",
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
      <table
      style="
        font-family: Arial, Helvetica, sans-serif;
        max-width: 800px;
        width: 100%;
        margin-top: 100px;
      "
      role="presentation"
      cellspacing="0"
      cellpadding="0"
      width="100%"
    >
      <tr>
        <td align="center">
          <div>
            <img
              src="https://utfs.io/f/b0ae5ecc-bd6f-4f5c-9208-6d6d9e390173-ef8t74.png"
              width="300px"
              height="100px"
            />

            <div style="height: 300px; width: 800px; margin-top: 100px">
              <img
                style="object-fit: cover; width: 100%; height: 300px"
                src="https://utfs.io/f/53262524-bc83-4bef-ae14-b9dadca465cf-211h4s.png"
                width="800px"
                height="300px"
              />
            </div>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center">
          <div style="padding: 50px; font-size: 20px">
            <p style="text-align: start; padding-left: 50px">
              Greetings ${name}!
            </p>
            <p
              style="
                max-width: 600px;
                width: 100%;
                text-align: justify;
                line-height: 35px;
              "
            >
              We're thrilled to welcome you to the
              <span style="color: #d91e27">SUGCON PH Community</span> – your
              gateway to a vibrant, collaborative space where Sitecore web
              development and AI enthusiasts come together to share knowledge,
              explore ideas, and build connections.
            </p>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="padding: 0px 50px">
          <div
            style="
              border-width: 3px;
              border-color: #d91e27;
              border-style: solid;
              width: 100%;
              max-width: fit-content;
              text-align: center;
              padding: 50px;
            "
          >
            <p style="font-weight: 700; font-size: 40px">What to Expect?</p>

            <div style="font-size: 20px; margin-bottom: 50px">______</div>

            <div style="font-size: 18px; text-align: center">
              <p style="font-weight: 700">Priority Access</p>
              <p style="line-height: 35px">
                By joining the waitlist, you've secured your spot for early
                access once the SUGCON PH Community doors swing open. Get ready
                to be among the first to experience this dynamic hub!
              </p>
            </div>

            <div style="font-size: 20px; font-weight: bold">+</div>

            <div style="font-size: 18px; text-align: center">
              <p style="font-weight: 700">Exclusive Content</p>
              <p style="line-height: 35px">
                As a community member, you'll enjoy access to exclusive content,
                including articles, tutorials, and discussions led by industry
                experts. Stay ahead of the curve with insights tailored for web
                development and AI enthusiasts like you.
              </p>
            </div>

            <div style="font-size: 20px; font-weight: bold">+</div>

            <div style="font-size: 18px; text-align: center">
              <p style="font-weight: 700">Community Events</p>
              <p style="line-height: 35px">
                Be part of virtual meetups, webinars, and networking sessions.
                Connect with like-minded individuals, share your experiences,
                and learn from others who are passionate about pushing the
                boundaries of technology.
              </p>
            </div>

            <div style="font-size: 20px; font-weight: bold">+</div>

            <div style="font-size: 18px; text-align: center">
              <p style="font-weight: 700">Beta Testing Opportunities</p>
              <p style="line-height: 35px">
                Get a sneak peek at new features, tools, and resources before
                they're officially launched. Your feedback will play a crucial
                role in shaping the community's future.
              </p>
            </div>

            <div style="font-size: 20px; font-weight: bold">+</div>

            <div style="font-size: 18px; text-align: center">
              <p style="font-weight: 700">Tech Talks and Panels</p>
              <p style="line-height: 35px">
                Engage with thought leaders through live tech talks and panel
                discussions. Gain valuable insights, ask questions, and
                contribute to the ongoing conversation about the latest trends
                in web development and AI.
              </p>
            </div>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center">
          <div style="padding: 50px; font-size: 20px">
            <p
              style="
                max-width: 600px;
                width: 100%;
                text-align: justify;
                line-height: 35px;
              "
            >
              Stay tuned for updates! As we prepare to launch the
              <span style="font-weight: bold">SUGCON PH Community</span>, we'll
              keep you informed about key milestones, exclusive sneak peeks, and
              more.
            </p>

            <p
              style="
                max-width: 600px;
                width: 100%;
                text-align: justify;
                line-height: 35px;
              "
            >
              In the meantime, feel free to connect with us on social media to
              join the pre-launch excitement. If you have any questions or
              suggestions, simply hit reply – we'd love to hear from you.
            </p>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center">
          <div style="display: flex; padding: 0px 50px; width: fit-content">
            <div
              style="
                padding: 10px;
                border-radius: 100%;
                background-color: black;
                width: 20px;
                height: 20px;
                margin-right: 20px;
                position: relative;
              "
            >
              <a
                href="https://www.facebook.com/jairosoft.inc"
                target="_blank"
              >
              <img
                src="https://utfs.io/f/2ddf4e1f-614c-48df-8be3-2b78aa11bda0-q1fu3k.png"
                width="20px"
                height="20px"
                alt=""
              />
              </a>
            </div>
            <div
              style="
                padding: 10px;
                border-radius: 100%;
                background-color: black;
                width: 20px;
                height: 20px;
                position: relative;
              "
            >
              <a
                href="https://www.linkedin.com/company/jairosoft"
                target="_blank"
              >
              <img
                src="https://utfs.io/f/f0f1a102-0eda-4734-8af1-c1a64a926d04-ovqowj.png"
                width="20px"
                height="20px"
                alt=""
              />
              </a>
            </div>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center">
          <div style="padding: 50px; font-size: 20px">
            <p
              style="
                max-width: 600px;
                width: 100%;
                text-align: justify;
                line-height: 35px;
              "
            >
              Thank you for being a part of this exciting journey toward
              innovation and collaboration. We can't wait to welcome you
              officially to the SUGCON PH Community!
            </p>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center">
          <div style="padding: 50px; font-size: 20px; text-align: center">
            <div style="font-size: 20px; margin-bottom: 50px">______</div>
            <p style="font-size: 40px; font-weight: bold">
              Cheers to you, ${name}
            </p>
            <p style="font-size: 20px">
              With love from the whole happy SUGCON PH Community!
            </p>
          </div>
        </td>
      </tr>
    </table>
      </div>
      `,
    });

    const mailAdmin = await transporterAdmin.sendMail({
      from: user,
      to: "destrada@jairosolutions.com",
      replyTo: "destrada@jairosolutions.com",
      subject: "Jairosoft Customer Support",
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">Hello and good day!</div>
      <br></br>
      <div style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">Customer's Information:</div>
      <div style="margin-bottom: 5px;">Name: ${name}</div>
      <div style="margin-bottom: 5px;">Message: ${message}</div>
      <div style="margin-bottom: 5px;">Email: ${emailAddress}</div>
      </div>
      `,
    });

    console.log("Message Sent:", mail.messageId);
    console.log("Admin Message Sent:", mailAdmin.messageId);

    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
