"use client";

import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <CacheProvider>
        <ChakraProvider>
          <Suspense>{children}</Suspense>
        </ChakraProvider>
      </CacheProvider>
    )
  );
}
