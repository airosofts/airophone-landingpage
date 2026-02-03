import { NextResponse } from 'next/server'

const MONDAY_API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQzMTQ5MDY2OCwiYWFpIjoxMSwidWlkIjo2NzgyNDc3MywiaWFkIjoiMjAyNC0xMS0wM1QxMDo0OToyMi4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTQ5NDQ5MTQsInJnbiI6InVzZTEifQ.M2y5qvKTBugSmKQLJnPFinl9o1h0H70yCAVnsM75p0M'
const BOARD_ID = '18381895700'
const GROUP_ID = 'topics'

export async function POST(request) {
  try {
    const body = await request.json()
    const { businessName, firstName, lastName, email, phone, volume, needs } = body

    // Validate required fields
    if (!businessName || !firstName || !lastName || !email || !volume) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create the item name (will appear as the item title in Monday)
    const itemName = `${businessName} - ${firstName} ${lastName}`

    // Map volume options to Monday status index values
    // Based on error: {0: 5001-10000, 1: 0-5000, 2: 10001-50000, 3: 50001+, 5: }
    const volumeIndexMap = {
      '0-5000': 1,
      '5001-10000': 0,
      '10001-50000': 2,
      '50001+': 3
    }

    // Get current date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0]

    // Build the column values object
    const columnValues = {
      text_mkxsr0q0: businessName,
      text_mkxs3z8v: firstName,
      text_mkxs1h26: lastName,
      text_mkxs7bjj: email,
      text_mkxshbxb: phone || '',
      color_mkxsyvez: { index: volumeIndexMap[volume] },
      text_mkxss7v5: needs || '',
      date4: { date: today }
    }

    // Monday.com GraphQL mutation
    const query = `
      mutation {
        create_item (
          board_id: ${BOARD_ID},
          group_id: "${GROUP_ID}",
          item_name: "${itemName.replace(/"/g, '\\"')}",
          column_values: ${JSON.stringify(JSON.stringify(columnValues))}
        ) {
          id
        }
      }
    `

    // Make request to Monday.com API
    const response = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': MONDAY_API_KEY
      },
      body: JSON.stringify({ query })
    })

    const result = await response.json()

    if (result.errors) {
      console.error('Monday.com API error:', result.errors)
      return NextResponse.json(
        { error: 'Failed to submit request', details: result.errors },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Request submitted successfully',
      itemId: result.data?.create_item?.id
    })

  } catch (error) {
    console.error('Error submitting to Monday.com:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    )
  }
}
