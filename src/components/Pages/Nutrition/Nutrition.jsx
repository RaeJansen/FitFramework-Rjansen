import Search from "../../UI/Search/Search";
import TimeInputAndDropdown from "../../UI/Inputs/TimeInputAndDropdown";
import Dropdown from "../../UI/Inputs/Dropdown";
import ProgressBar from "../../UI/ProgressBar";

export default function Nutrition() {
  return (
    <div>
      <h2>Log Food</h2>
      <TimeInputAndDropdown />
      <Search />
      <ProgressBar unit1={1200} unit2={2000} />
    </div>
  );
}
