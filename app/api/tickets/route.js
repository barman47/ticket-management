import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST (request) {
    const ticket = await request.json();

    // get supabase instance
    const supabase = createRouteHandlerClient({ cookies });

    // get the current user session
    const { data: { session } } = await supabase.auth.getSession();

    // insert the data
    const response = await supabase.from('tickets').insert({
        ...ticket,
        user_email: session.user.email
    })
    .select()
    .single();

    const error = response.error;
    const responseData = response.data;

    console.log('response ', response);
    // console.log('error ', error);


    return NextResponse.json({ data: responseData, error });
}