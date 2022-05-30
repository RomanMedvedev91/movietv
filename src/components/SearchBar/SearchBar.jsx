import { Input } from 'semantic-ui-react';
// import { useRef } from 'react';

function SearchBar() {
  // const testRef = useRef();

  return (
    <div>
      <Input action="Search" placeholder="Search..." />
      {/* <Input ref={testRef} action="Search" placeholder="Search..." /> */}
    </div>
  );
}

export default SearchBar;
