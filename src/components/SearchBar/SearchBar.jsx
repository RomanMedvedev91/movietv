import { useState } from 'react';
import { Input, Form, Button } from 'semantic-ui-react';
import getData from '../../utilities/getData';
// import { useRef } from 'react';

function SearchBar() {
  // const testRef = useRef();

  const [name, setName] = useState('');
  const [error, setError] = useState('');

  async function postRequest() {
    if (name === '') {
      setError('name cannot be blank');
      return;
    }

    setError('');
    // data.prompt = currentApplication + currentPrompt;
    // console.log(data.prompt);
    // console.log('2d', data.prompt);
    const res = await getData();
    console.log(res);
    // setPropmts([currentPrompt, ...prompts]);
    // setResponse([res, ...responses]);
    // empty textarea
    setName('');
  }

  return (
    <div>
      <Form>
        <Form.Field>
          <label htmlFor="find movie">Find movie</label>
          <Input placeholder="Search..." onChange={(e) => setName(e.target.value)} />
        </Form.Field>
        <Button onSubmit={(e) => e.preventDefault()} onClick={() => postRequest()}>
          Search
        </Button>
      </Form>
      {/* <Input ref={testRef} action="Search" placeholder="Search..." /> */}
      {error ? <div>{error}</div> : ''}
      <div>{name}</div>
    </div>
  );
}

export default SearchBar;
