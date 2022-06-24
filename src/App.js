import React, { useEffect, useRef } from 'react';

// code mirror
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { darcula } from '@uiw/codemirror-theme-darcula';
import { javascript } from '@codemirror/lang-javascript';

// antd
import { Button } from 'antd';


function App() {
  // const codeValue = useRef(null);

  const [code, setCode] = React.useState(
    "console.log(\'hello world!\');\n\n\n"
  );

  const submitCode = (event) => {
    console.log(event.target.codeValue.value)
    // fetch('http://localhost:2358/submissions?wait=true', {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     source_code: code,
    //     language_id: 63
    //   })
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //   });
  }

  return (
    <div>
      <CodeMirror
        // value={code}
        name="codeValue"
        height="200px"
        extensions={[javascript({ jsx: true })]}
      />

      <Button onClick={submitCode}>Submit Code</Button>
    </div>

  );
}

export default App;
