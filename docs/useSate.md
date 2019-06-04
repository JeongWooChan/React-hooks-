# useState 

<br>

## useState 

> useState는 가장 기본적인 Hook으로서, 함수형 컴포넌트에서도 가변적인 상태를 지니고 있을 수 있게 해준다. <br>
> → 만약 함수형 컴포넌트에서 상태를 관리해야 되는 일이 발생한다면 useState를 사용하면 된다. 

<br>

### useState를 이용하여 counter 기능 만들기 
```js
import React, {useState} from 'react';

function App() {
  const [count, setCount]=useState(0);
  return (
    <>
      {count}
      <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => setCount(count-1)}>Decrement</button>
    </>
  );
}

export default App;
```

<br>

useState는 다음과 같이 사용한다. 
```js
const [count, setCount]=useState(0);
```
이러한 문법은 [배열 비구조화 할당] 문법이다. 
> useState Hooks가 호출되고 나면 배열을 반환하는데, 그 배열의 첫번째 원소는 상태 값이고, 두번째 원소는 상태를 설정하는 함수이다. 이 함수에 파라미터를 넣어서 호출하게 되면 전달받은 파라미터 값이 바뀌게 되고 컴포넌트는 정상적으로 리렌더링 된다. 


 
[배열 비구조화 할당]:https://yuddomack.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AC%B8%EB%B2%95-%EB%B9%84%EA%B5%AC%EC%A1%B0%ED%99%94-%ED%95%A0%EB%8B%B9