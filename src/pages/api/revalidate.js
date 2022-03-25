export default async function handler(req, res) {
  try {
    await res.unstable_revalidate("/");
    return res.json({ revalidate: true });
  } catch {
    return res.status(500).send("Error revalidating");
  }
}
