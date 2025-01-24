"use client";

import { createContext, useContext, useState } from "react";

interface SelectedTypesContextType {
  selectedTypes: string[];
  setSelectedTypes: (types: string[]) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SelectedTypesContext = createContext<SelectedTypesContextType | undefined>(
  undefined
);

export function SelectedTypesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SelectedTypesContext.Provider
      value={{ selectedTypes, setSelectedTypes, searchQuery, setSearchQuery }}
    >
      {children}
    </SelectedTypesContext.Provider>
  );
}

export function useSelectedTypes() {
  const context = useContext(SelectedTypesContext);
  if (!context) {
    throw new Error("useSelectedTypes must be used within a SelectedTypesProvider");
  }
  return context;
}