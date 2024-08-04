import { addUser, getAllUsers } from "@/lib/api";

export const POST = async (req: Request) => {

    const body = await req.json();
    const result = addUser(body);

    if (result.changes) {
        return Response.json({ status: "OK" });
    } else {
        return Response.json({ status: "ERROR" });
    }
}

export const GET = () => {
    const result = getAllUsers();
    return Response.json(result)
}
