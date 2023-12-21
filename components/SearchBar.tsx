import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"

const SearchBar = () => {
    return (
        <div className=" flex items-center mb-4">
            <Input />
            <Button size="default" variant="default">Search</Button>
        </div>
    )
}


export default SearchBar;