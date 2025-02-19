import { NextResponse } from 'next/server'; // Import the Next.js server response


// Mock token metadata
const mockTokens = [
    {
        token_address: "0xdAC17F958D2ee523a2206206994597C13D831ec0",
        pool_address: "0x471557Db259AB97864C521cBb6ecADBD4134f06D",
        name: "Token One",
        
        symbol: "ONE",
        description: "The first token in our mock data he first token in our mock data he first token in our mock data he first token in our mock data he first token in our mock data he first token in our mock data he first token in our mock datahe first token in our mock datahe first token in our mock datahe first token in our mock datahe first token in our mock data he first token in our mock data he first token in our mock data he first token in our mock data he first token in our mock datahe first token in our mock data he first token in our mock data he first token in our mock data he first token in our mock data he first token in our mock ",
        image: "ipfs:QmYi4RecDM2Z4eTNXNaNeriWd4enupBZSnUkCujaFK6qWH",
        website: "https://token1.com",
        telegram: "https://t.me/token1",
        twitter: "https://twitter.com/token1",
        creator: "0x6F0a4E339AD005DE065acb9Dd6BCd66E9499E331",
        created_at: "2023-12-01T12:00:00Z",
    },
    {
        token_address: "0xdAC17F958D2ee523a2206206994597C13D831ec1",
        pool_address: "0x471557Db259AB97864C521cBb6ecADBD4134f06D",
        name: "Token Two",
        symbol: "TWO",
        description: "Another example token for testing",
        image: "ipfs:QmYi4RecDM2Z4eTNXNaNeriWd4enupBZSnUkCujaFK6qWH",
        website: "https://token2.com",
        telegram: "https://t.me/token2",
        twitter: "https://twitter.com/token2",
        creator: "0x6F0a4E339AD005DE065acb9Dd6BCd66E9499E331",
        created_at: "2023-12-01T12:10:00Z",
    },
    {
        token_address: "0xdAC17F958D2ee523a2206206994597C13D831ec2",
        pool_address: "0x471557Db259AB97864C521cBb6ecADBD4134f06D",
        name: "Token Three",
        symbol: "THREE",
        description: "Third token example",
        image: "ipfs:QmYi4RecDM2Z4eTNXNaNeriWd4enupBZSnUkCujaFK6qWH",
        website: "https://token3.com",
        telegram: "https://t.me/token3",
        twitter: "https://twitter.com/token3",
        creator: "0x6F0a4E339AD005DE065acb9Dd6BCd66E9499E331",
        created_at: "2023-12-01T12:20:00Z",
    },
    {
        token_address: "0xdAC17F958D2ee523a2206206994597C13D831ec3",
        pool_address: "0x471557Db259AB97864C521cBb6ecADBD4134f06D",
        name: "Token Four",
        symbol: "FOUR",
        description: "Another token for the mock API",
        image: "ipfs:QmYi4RecDM2Z4eTNXNaNeriWd4enupBZSnUkCujaFK6qWH",
        website: "https://token4.com",
        telegram: "https://t.me/token4",
        twitter: "https://twitter.com/token4",
        creator: "0x6F0a4E339AD005DE065acb9Dd6BCd66E9499E331",
        created_at: "2023-12-01T12:30:00Z",
    },
    {
        token_address: "0xdAC17F958D2ee523a2206206994597C13D831ec4",
        pool_address: "0x471557Db259AB97864C521cBb6ecADBD4134f06D",
        name: "Token Five",
        symbol: "FIVE",
        description: "Mock token five",
        image: "ipfs:QmYi4RecDM2Z4eTNXNaNeriWd4enupBZSnUkCujaFK6qWH",
        website: "https://token5.com",
        telegram: "https://t.me/token5",
        twitter: "https://twitter.com/token5",
        creator: "0x6F0a4E339AD005DE065acb9Dd6BCd66E9499E331",
        created_at: "2023-12-01T12:40:00Z",
    },
    {
        token_address: "0xdAC17F958D2ee523a2206206994597C13D831ec5",
        pool_address: "0x471557Db259AB97864C521cBb6ecADBD4134f06D",
        name: "Token Six",
        symbol: "SIX",
        description: "Sixth mock token",
        image: "ipfs:QmYi4RecDM2Z4eTNXNaNeriWd4enupBZSnUkCujaFK6qWH",
        website: "https://token6.com",
        telegram: "https://t.me/token6",
        twitter: "https://twitter.com/token6",
        creator: "0x6F0a4E339AD005DE065acb9Dd6BCd66E9499E331",
        created_at: "2023-12-01T12:50:00Z",
    },
    {
        token_address: "0xdAC17F958D2ee523a2206206994597C13D831ec6",
        pool_address: "0x471557Db259AB97864C521cBb6ecADBD4134f06D",
        name: "Token Seven",
        symbol: "SEVEN",
        description: "Seventh mock token",
        image: "ipfs:QmYi4RecDM2Z4eTNXNaNeriWd4enupBZSnUkCujaFK6qWH",
        website: "https://token7.com",
        telegram: "https://t.me/token7",
        twitter: "https://twitter.com/token7",
        creator: "0x6F0a4E339AD005DE065acb9Dd6BCd66E9499E331",
        created_at: "2023-12-01T13:00:00Z",
    },
    {
        token_address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        pool_address: "0x471557Db259AB97864C521cBb6ecADBD4134f06D",
        name: "Token Eight",
        symbol: "EIGTH",
        description: "Eighth mock token",
        image: "ipfs:QmYi4RecDM2Z4eTNXNaNeriWd4enupBZSnUkCujaFK6qWH",
        website: "https://token8.com",
        telegram: "https://t.me/token8",
        twitter: "https://twitter.com/token8",
        creator: "0x6F0a4E339AD005DE065acb9Dd6BCd66E9499E331",
        created_at: "2023-12-01T13:10:00Z",
    },
    {
        token_address: "0xdAC17F958D2ee523a2206206994597C13D831ec8",
        pool_address: "0x471557Db259AB97864C521cBb6ecADBD4134f06D",
        name: "Token Nine",
        symbol: "NINE",
        description: "Ninth mock token",
        image: "ipfs:QmYi4RecDM2Z4eTNXNaNeriWd4enupBZSnUkCujaFK6qWH",
        website: "https://token9.com",
        telegram: "https://t.me/token9",
        twitter: "https://twitter.com/token9",
        creator: "0x6F0a4E339AD005DE065acb9Dd6BCd66E9499E331",
        created_at: "2023-12-01T13:20:00Z",
    },
    {
        token_address: "0xdAC17F958D2ee523a2206206994597C13D831ec9",
        pool_address: "0x471557Db259AB97864C521cBb6ecADBD4134f06D",
        name: "Token Ten",
        symbol: "TEN",
        description: "Tenth mock token",
        image: "ipfs:QmYi4RecDM2Z4eTNXNaNeriWd4enupBZSnUkCujaFK6qWH",
        website: "https://token10.com",
        telegram: "https://t.me/token10",
        twitter: "https://twitter.com/token10",
        creator: "0x6F0a4E339AD005DE065acb9Dd6BCd66E9499E331",
        created_at: "2023-12-01T13:30:00Z",
    },
];


// API handler to fetch a single token by token_address
export async function GET(request) {
    try {
        // Parse the query string from the request URL
        const { searchParams } = new URL(request.url);
        const tokenAddress = searchParams.get("token_address");

        if (!tokenAddress) {
            return NextResponse.json(
                { success: false, message: "token_address query parameter is required" },
                { status: 400 }
            );
        }

        // Search for the token in the mock data
        const token = mockTokens.find(
            (t) => t.token_address.toLowerCase() === tokenAddress.toLowerCase()
        );

        if (!token) {
            return NextResponse.json(
                { success: false, message: "Token not found" },
                { status: 404 }
            );
        }

        // Return the found token
        return NextResponse.json(
            { success: true, data: token },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching token:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        );
    }
}
