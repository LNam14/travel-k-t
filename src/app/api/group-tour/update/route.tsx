import excuteQuery from "../../../db/db";


export async function POST(req: any) {
    try {
        const body = await req.json();

        if (!body) {
            return new Response("Error: Invalid body", { status: 401 });
        }

        try {
            const result: any = await excuteQuery("UPDATE group_tour SET status = 'Đã tư vấn' WHERE id = ?",
                [body["id"]]);
            console.log("id", body["id"]);

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
