import excuteQuery from "../../../db/db";


export async function GET() {
    try {
        const result: any = await excuteQuery("SELECT * FROM group_tour", {});
        return new Response(JSON.stringify(result), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response("Error", { status: 404 });
    }
}
