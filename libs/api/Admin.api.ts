import {NEXT_PUBLIC_SERVER_URL} from "@/libs/constant/Api.constant";
import {AdminDto} from "@/libs/dto/admin/AdminDto";
import Login from "@/libs/class/Login.class";

export async function login(name: string, password:string, id?: string) {
  const t = await fetch(
      `${NEXT_PUBLIC_SERVER_URL}/public/login`, {
        method: "POST",
        body: JSON.stringify(new AdminDto(name, password, id)),
      }
  );

  if (t.ok) {
    const json = await t.json();
    return json as Login;
  } else {
    throw new Error(t.statusText);
  }
}
