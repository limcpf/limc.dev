import {NEXT_PUBLIC_SERVER_URL} from "@/libs/constant/Api.constant";
import {AdminDto} from "@/libs/dto/admin/AdminDto";
import LoginDto from "@/libs/dto/admin/LoginDto";

export async function login(adminDto:AdminDto) {
  console.log(adminDto);
  const t = await fetch(
      `${NEXT_PUBLIC_SERVER_URL}/api/public/login`, {
        method: "POST",
        body: JSON.stringify(adminDto),
        headers: new Headers({'content-type': 'application/json'})
      }
  );

  if (t.ok) {
    const json = await t.json();
    return json as LoginDto;
  } else {
    throw new Error(t.statusText);
  }
}