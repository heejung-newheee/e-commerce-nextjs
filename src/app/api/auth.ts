import { RegisterInput } from '@/components/auth/SignUpForm';
import { UserUpdateType } from '@/lib/supabase/database.types';
import { supabase } from '@/lib/supabase/supabase';

export const signUpUser = async (values: RegisterInput) => {
    const { name, email, phone, role, password } = values;

    const client = await supabase();
    const { data, error } = await client.auth.signUp({
        email,
        password,
        options: {
            data: {
                name,
                phone,
                role
            }
        }
    });

    if (error !== null) throw new Error(error.message);

    const user = {
        id: data.user?.id,
        name,
        email,
        phone,
        role
    };

    await userUpdate(user);
};

export const userUpdate = async (user: UserUpdateType) => {
    const client = await supabase();
    const { error } = await client.from('users').insert(user);
    if (error !== null) throw new Error(error.message);
};

export const signInUser = async ({ email, password }: { email: string; password: string }) => {
    const client = await supabase();
    const { error } = await client.auth.signInWithPassword({
        email,
        password
    });
    if (error !== null) throw new Error(error.message);
};

export const signOut = async () => {
    const client = await supabase();
    await client.auth.signOut();
};

export const getAuthSession = async () => {
    const client = await supabase();
    const {
        data: { session },
        error
    } = await client.auth.getSession();
    if (!session) {
        console.log('로그인 상태가 아님');
    }
    if (session) {
        console.log('데이터', session, '에러', error);
    }

    return session;
};
export const getUser = async (email: string) => {
    const client = await supabase();
    const { data } = await client.from('users').select().eq('email', email).single();
    return data;
};

// export const getUser = async (session: Session | null) => {
//     try {
//         if (session) {
//             const {
//                 data: { user }
//             } = await supabase.auth.getUser(session.user.email);
//             return user;
//         }
//     } catch (error) {
//         console.error(error);
//     }
// };
