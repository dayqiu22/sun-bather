'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Preferences } from './definitions';
require('dotenv').config;
 
const FormSchema = z.object({
    temp_min: z.coerce.number(),
    temp_max: z.coerce.number(),
    sun: z.enum(['yes', 'no']),
    wind: z.enum(['yes', 'no']),
    rain: z.enum(['yes', 'no']),
});

export async function savePreferences(formData: Preferences) {
    const rawData = FormSchema.parse({
        temp_min: formData.temp_min,
        temp_max: formData.temp_max,
        sun: formData.sun,
        wind: formData.wind,
        rain: formData.rain
    });

    await sql`
    UPDATE users
    SET tempMin = ${rawData.temp_min}, tempMax = ${rawData.temp_max}, sun = ${rawData.sun}, wind = ${rawData.wind}, rain = ${rawData.rain}
    WHERE id = ${process.env.POSTGRES_USER_ID}
    `;
    
    revalidatePath('/home');
    redirect('/home');
}

export async function getPrefAndAvail() {
    try {
        const dataPromise = sql`SELECT * FROM users`;
        const data = await dataPromise;

        const rows = data.rows;
        const parsedData = rows.map(row => ({
            temp_min: parseFloat(row.tempmin),
            temp_max: parseFloat(row.tempmax),
            sun: row.sun,
            wind: row.wind,
            rain: row.rain,
            availability: row.availability
        }));
    
        return parsedData;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch data.');
    }
}