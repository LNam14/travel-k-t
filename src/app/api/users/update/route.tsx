import excuteQuery from "../../../db/db";

export async function POST(req: any) {
    try {
        const body = await req.json();

        if (!body) {
            return new Response("Error: Invalid body", { status: 401 });
        }

        try {
            const result: any = await excuteQuery("UPDATE users SET name = ?, phone = ?, email = ?, username = ? WHERE id = ?",
                [body["name"], body["phone"], body["email"], body["username"], body["id"]]);
            return new Response(JSON.stringify({ result: result }), { status: 200 });
        } catch (error) {
            console.error(error);
            return new Response("Error executing query", { status: 500 });
        }
    } catch (error) {
        console.error(error);
        return new Response("Error processing request", { status: 500 });
    }
}
