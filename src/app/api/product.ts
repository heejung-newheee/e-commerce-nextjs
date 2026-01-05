import { createClient } from "@/lib/supabase/client";
import { supabase } from "@/lib/supabase/supabase";

export const productInfo = async (id: string) => {
  const supabase = createClient();
  // const client = await supabase();
  const { data, error } = await supabase
    .from("products")
    .select()
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
};
