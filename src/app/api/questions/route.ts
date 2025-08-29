import { NextRequest, NextResponse } from 'next/server';
import { databases, DATABASE_ID, QUESTIONS_COLLECTION_ID } from '../../../lib/server/appwrite';


export async function GET(request: NextRequest) {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      QUESTIONS_COLLECTION_ID
    );

    return NextResponse.json({
      success: true,
      questions: response.documents
    });

  } catch (error) {
    console.error('Error fetching questions:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch questions'
      },
      { status: 500 }
    );
  }
}