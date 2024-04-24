import { NextResponse } from "next/server"

export function GET() {
    const result = {
        ok: true,
        name: 'Dolly',
        lastName: 'Smith',
    }
    return NextResponse.json(result)
}