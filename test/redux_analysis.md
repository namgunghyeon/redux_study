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

# combineReducers

# applyMiddleware

# compose

# bindActionCreator


***출처: https://haruair.github.io/flux/docs/overview.html,
https://deminoth.github.io/redux/Glossary.html***
