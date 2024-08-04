import { deleteUser, getUserById, updateUser } from "@/lib/api";

interface Props {
    params: {
        key: number,
    }
}

export const PUT = async (req: Request, { params }: Props) => {

    const body = await req.json();

    const tmp = {
        key: params.key,
        ...body,
    }
    const updateResult = updateUser(params.key, tmp);

    if (updateResult) {
        return Response.json({ tmp })
    } else {
        return Response.json({ status: "ERROR" });
    }
}

export const GET = async (req: Request, { params }: Props) => {

    const user = getUserById(params.key);
    return Response.json({ user });
}

export const DELETE = async (req: Request, { params }: Props) => {

    const user = deleteUser(params.key);
    return Response.json({ user });
}