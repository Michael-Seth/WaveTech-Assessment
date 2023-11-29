// import { useDisclosure } from "@chakra-ui/react";
import { createContext, PropsWithChildren, useCallback, useState } from "react";

type TLayoutContext = {
  sidebarOpen: boolean;
  toggleSidebar(): void;

  searchTerm: string;
  setSearchTerm(term: string): void;

  showSearchBar: boolean;
  setShowSearchBar(value: boolean): void;
};

export const LayoutContext = createContext<TLayoutContext>({
  sidebarOpen: false,
  toggleSidebar() {},
  searchTerm: "",
  setSearchTerm() {},
  showSearchBar: false,
  setShowSearchBar() {},
});

function LayoutContextProvider({ children }: PropsWithChildren) {
  //   const { isOpen, onToggle } = useDisclosure();
  const [searchBar, setSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const setSearch = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const setShowSearchBar = useCallback((value: boolean) => {
    setSearchBar(value);
  }, []);

  return (
    <LayoutContext.Provider
      value={{
        sidebarOpen: true,
        toggleSidebar: () => {
          console.log("toggle");
        },
        searchTerm,
        setSearchTerm: setSearch,
        showSearchBar: searchBar,
        setShowSearchBar,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export default LayoutContextProvider;
