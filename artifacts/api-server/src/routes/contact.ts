import { Router, type IRouter } from "express";

const router: IRouter = Router();

const NEXTJS_PORT = process.env.NEXTJS_PORT ?? "19724";
const NEXTJS_CONTACT_URL = `http://localhost:${NEXTJS_PORT}/api/contact`;

router.post("/contact", async (req, res) => {
  try {
    const upstream = await fetch(NEXTJS_CONTACT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const payload = await upstream.json().catch(() => ({}));
    res.status(upstream.status).json(payload);
  } catch (err) {
    res
      .status(502)
      .json({ error: "Failed to send. Please call us directly or try again." });
  }
});

export default router;
