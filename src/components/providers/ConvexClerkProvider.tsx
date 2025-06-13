"use client"

import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
function ConvexClerkProvider({children}:{children:React.ReactNode}) {
    return (
    <ClerkProvider publishableKey="pk_test_d2FybS1tdXN0YW5nLTk2LmNsZXJrLmFjY291bnRzLmRldiQ">
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
            {children}
        </ConvexProviderWithClerk>
    </ClerkProvider>
    );
}
export default ConvexClerkProvider;