import React, { useState, useRef, useEffect } from "react"
import { Box, TextField } from "@components/commons"
import { Search } from "lucide-react"
import { useFocus } from "@libs/hooks/use-focus"
import SearchDrop from "./search-drop"
// import SearchDrop from './component/dropbox'

const SearchInput = React.memo(() => {
  const inputRef = useRef(null)
  const dropdownRef = useRef(null)
  const [inputvalue, setInputvalue] = useState<string>("")
  const isFocus = useFocus(inputRef)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setInputvalue(e.target.value)
  }

  useEffect(() => {
    if (isFocus) {
      setIsOpen(true)
    }
  }, [isFocus])

  return (
    <Box
      sx={{
        position: "relative",
        ml: [0, 8, 8],
        mr: [0, 6, 6],
        width: "60%",
        color: "black50",
      }}
    >
      <TextField
        ref={inputRef}
        boxProps={{
          variant: "line",
          sx: {
            display: "flex",
            border: "1px solid",
            borderColor: "black90",
            alignItems: "center",
            width: "100%",
            borderRadius: "20px",
            padding: "4px 8px",
            ":hover": {
              boxShadow: "0 1px 6px rgba(32,33,36,.28)",
              borderColor: "rgba(223,225,229,0)",
            },
          },
        }}
        sx={{ border: "none" }}
        prefixIcon={<Search style={{ marginLeft: "12px" }} />}
        placeholder="Search"
        value={inputvalue}
        onChange={handleChange}
      />
      {isOpen && <SearchDrop closeDrop={setIsOpen} />}
    </Box>
  )
})

export default SearchInput
