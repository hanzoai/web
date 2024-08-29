import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@hanzo/ui/primitives";

const DashSelect = (props: { placeholder: string; options: any; value: string; onChange: (value: string) => void; }) => {
  const { placeholder, options, value, onChange } = props;
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue className="text-muted-2" placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {
          options && Object.keys(options).map((key) => <SelectItem key={key} value={key}>{options[key]}</SelectItem>)
        }
      </SelectContent>
    </Select>
  )
};

export default DashSelect;