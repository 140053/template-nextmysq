import {
    Command,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandSeparator,
  } from "@/components/ui/command";
  
  const SideBar = () => {
    return (
      <div className=" ">
        {/* Sidebar Content */}
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>             
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandGroup heading="Browse By">
              <CommandItem>Author</CommandItem>              
              <CommandItem>Title</CommandItem>
            </CommandGroup>
            <CommandSeparator /> 
            <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>              
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    );
  };
  
  export default SideBar;
  