import { json } from '@sveltejs/kit';

export function GET({ request }) {
    const forwarded = request.headers.get("x-forwarded-for");
    const realIp = forwarded?.split(",")[0].trim();
    const ip = realIp
    return json({ ip });
}
