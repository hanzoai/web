import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@hanzo/ui/primitives";

const DashSelect = (props: { placeholder: string; options: string[]; value: string; onChange: (value: string) => void; }) => {
  const { placeholder, options, value, onChange } = props;
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {
          options.map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)
        }
      </SelectContent>
    </Select>
  )
};

export default DashSelect;