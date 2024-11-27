// app/api/content/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/app/db';
import { dynamicContent } from '@/app/db/schema';

export async function GET() {
  const content = await db.select().from(dynamicContent);
  return NextResponse.json(content);
}
