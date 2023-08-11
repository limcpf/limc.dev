import {AdminDto} from "@/libs/dto/admin/AdminDto";
import LoginDto from "@/libs/dto/admin/LoginDto";

export async function login(adminDto:AdminDto) {

  const t = await fetch(
      `https://api.limc.dev/public/login`, {
        method: "POST",
        body: JSON.stringify(adminDto),
        headers: new Headers({'content-type': 'application/json'}),
        credentials: "include"
      }
  );

  if (t.ok) {
    const json = await t.json();
    return json as LoginDto;
  } else {
    throw new Error(t.statusText);
  }
}
