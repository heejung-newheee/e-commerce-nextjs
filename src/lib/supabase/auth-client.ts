"use client";

import { createClient } from "./client";
import { RegisterInput } from "@/components/auth/SignUpForm";
import { UserUpdateType } from "@/lib/supabase/database.types";

export const signUpUser = async (values: RegisterInput) => {
  const { name, email, phone, role, password } = values;
  console.log("회원가입 시도:", { name, email, phone, role });

  const supabase = createClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        phone,
        role,
      },
    },
  });

  if (error !== null) {
    console.error("회원가입 에러:", error);

    if (
      error.message.includes("already") ||
      error.message.includes("registered")
    ) {
      throw new Error("이미 가입된 이메일입니다.");
    }
    if (error.message.includes("Password")) {
      throw new Error("비밀번호는 최소 6자 이상이어야 합니다.");
    }
    throw new Error(error.message);
  }

  if (!data.user?.id) {
    throw new Error("사용자 생성에 실패했습니다.");
  }

  const user = {
    id: data.user.id,
    name,
    email,
    phone,
    role,
  };

  // users 테이블에 저장
  try {
    await userUpdate(user);
    console.log("users 테이블 저장 완료");
  } catch (updateError) {
    console.error("users 테이블 저장 실패:", updateError);
    throw new Error("회원 정보 저장에 실패했습니다.");
  }
};

export const userUpdate = async (user: UserUpdateType) => {
  const supabase = createClient();

  console.log("users 테이블에 저장할 데이터:", user);

  const { data, error } = await supabase
    .from("users")
    .upsert(user, { onConflict: "id" })
    .select();

  console.log("저장 결과:", { data, error });

  if (error !== null) {
    console.error("users 테이블 저장 에러:", error);
    throw new Error(error.message);
  }

  return data;
};

export const signInUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error !== null) throw new Error(error.message);
};

export const signOut = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
};

export const getAuthSession = async () => {
  const supabase = createClient();
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();
  if (!session) {
    console.log("로그인 상태가 아님");
  }
  if (session) {
    console.log("데이터", session, "에러", error);
  }

  return session;
};

export const getUser = async (email: string) => {
  const supabase = createClient();
  const { data } = await supabase
    .from("users")
    .select()
    .eq("email", email)
    .single();
  return data;
};
