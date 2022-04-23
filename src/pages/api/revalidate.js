export default async function handler(req, res) {
  try {
    for (const url of req.body) {
      await res.unstable_revalidate(url);
    }
    return res.json({ revalidate: true });
  } catch {
    return res.status(500).send("Error revalidating");
  }
}
