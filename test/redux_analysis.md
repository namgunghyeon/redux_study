# Redux

### 페이스북에서 발표한 Flux 아키텍처를 기반으로 만들어진 Redux
#### Flux 아키텍쳐


### Action
액션은 상태를 변화시키려는 의도를 표현하는 평범한 객체입니다. 액션은 스토어에 데이터를 넣는 유일한 방법입니다. 어떤 데이터가 UI 이벤트에서 왔건, 네트워크 콜백에서 왔건, 웹소캣과 같은 다른 소스에서 왔건간에 결국은 액션으로써 보내집니다.

### Dispatcher
디스패처(Dispatcher)는 Flux 애플리케이션의 모든 데이터 흐름을 관리하는 허브 역할을 한다. 액션이 발생하면 디스패처로 메시지(또는 액션 객체)가 전달되고 디스패처는 디스패처에 등록된 콜백 함수를 통해 이 메시지를 스토어에 전달한다. 다른 구성요소와 달리 디스패처는 전체 애플리케이션에서 한 개의 인스턴스만 사용한다.

### Store
Store는 어플리케이션의 상태와 로직을 포함하고 있다. store의 역할은 전통적인 MVC의 모델과 비슷하지만 많은 객체의 상태를 관리할 수 있는데 ORM 모델이 하는 것처럼 단일 레코드의 데이터를 표현하는 것도 아니고 Backbone의 컬랙션과도 다르다. store는 단순히 ORM 스타일의 객체 컬랙션을 관리하는 것을 넘어 어플리케이션 내의 개별적인 도메인 에서 어플리케이션의 상태를 관리한다.

### View
화면 View

#### state를 관리하기 위한 event loop
1.Single Source of Truth
2.State is read-only
3.Changes are made with Pure Functions

# createStore
위에서 설명되어 있는 store역활
액션을 통해서 상태가 변경되면 새로운 상태를 반환하고 listener에 등록되어 있는 함수를 호출한다.

외부에 노출하는 함수
- dispatch
- subscribe
- getState
- replaceReducer
- $$observable

# combineReducers
APP에서는 하나의 Reducer만 가지고 모든 상태를 변화시킬 수 없기 때문에 여러개의 reducer를 하나의 형태로 묶어준다.
```
{
  storeKey1: reducer,
  storeKey2: reducer,
}
```

# applyMiddleware
action에서 reducer가 호출되는 사이에 사용자가 원하는 기능을 넣을 수 있다.
ex) logger, Api call ...


# compose
여러개의 함수를 하나의 함수로 묶어 주는 기능
```javascript
function test(a) { return 1 + a}
function test2() { return 1 }
```
test 함수는 test2함수의 return 값을 받아서 처리될 때 compose로 묶어 줄 수 있다.


# bindActionCreator


### Source Analysis
구현 방식이 고차함수(함수를 return 하거나 파라미터로 받아서 사용)로 되어 있다.

***출처: https://haruair.github.io/flux/docs/overview.html,
https://deminoth.github.io/redux/Glossary.html***
