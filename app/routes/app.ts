import { redirect, type LoaderFunctionArgs } from "react-router";
import { auth } from "~/lib/auth.server";

export async function loader({ request }: LoaderFunctionArgs) {
    const session = auth.api.getSession(request)
    if (!session) return redirect("/authenticate")
}