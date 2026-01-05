import { createClient } from "./server";

// Server Component나 Server Action에서 사용
// 사용법:
// import { supabase } from "@/lib/supabase/supabase";
// 
// export default async function Page() {
//   const client = await supabase();
//   const { data } = await client.from('todos').select();
//   return <div>{data}</div>;
// }
export const supabase = createClient;
