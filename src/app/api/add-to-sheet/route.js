// app/api/forward-data/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req) {
  try {
    // Step 1: Parse the incoming JSON body
    const body = await req.json();
    const { senderMessage } = body;

    // Step 2: Fetch data based on userId (this can be replaced with real logic)
    const fetchedData = {
      senderMessage,
      formType:"payment"
    };
    return NextResponse.json({
      message: 'Data successfully forwarded to Google Apps Script.',
      data:scriptResponse.data,
    });

    // Step 3: Forward data to Google Apps Script API
    const appScriptUrl = 'https://script.google.com/macros/s/AKfycbwUZKiOUMiqD1_rku7A_MVsNnPexjEGR_qgnoEjxjnrw63oo_9iB2S03jBknugoC4NwWA/exec';

    const response = await fetch(appScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'formtype':'payment'
      },
      body: JSON.stringify(fetchedData),
    });

    const scriptResponse = await response.json();

    

  } catch (err) {
    console.error('Error in POST /api/forward-data:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
