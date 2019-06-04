# useEffect 

<br>

## useEffect 

> useEffect는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook 이다. <br> 
> 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태 

<br>

### 마운트 될 때만 useEffect를 실행하고 싶을 때 

> 만약 useEffect 에서 설정한 함수가 컴포넌트가 화면에 가장 처음 렌더링 될 때만 실행되고 업데이트 할 경우에는 실행 할 필요가 없는 경우엔 함수의 두번째 파라미터로 비어있는 배열을 넣어주시면 된다. 

```js
useEffect(() => {
    console.log('마운트 될 때만 실행된다.");
}, []);
```

### 특정 값이 업데이트 될 때만 실행하고 싶을 때 

>useEffect 의 두번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어주시면 된다. 
```js
 useEffect(() => {
    console.log(name);
  }, [name]); // name의 값이 바뀔 때만 useEffect가 실행된다. 
```

