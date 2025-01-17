1. 我可以在 reducer 中触发一个 Action 吗？
2. 如何在加载时触发 Action？
3. 为什么 Redux 状态函数称为 reducers？
4. Redux DevTools 的功能有哪些？

1. 在 React 中如何定义常量？
2. Redux 中常量的用途是什么？

1. 什么是无状态组件？
2. 什么是有状态组件？
3. React Redux 中展示组件和容器组件之间的区别是什么？
4. 组件和不同类型？

1️⃣View 在 Redux 中会派发一个 Action；
2️⃣Action 通过 Store 的 Dispatch 方法派发给 Store；
3️⃣Store 接收到 Action，并连同之前的 State，一起传递给 Reducer；
4️⃣Reducer 返回一个新的数据给 Store，Store 再去改变自己的 State。
可见，Action 通过 Store 的 Dispatch 方法派发给 Store。即，Action 和 Store 之间就是 Dispatch 这个方法

Redux “中间件”有什么好处呢？
答：
在处理“异步”和“复杂逻辑”时，如果将“异步”（如 AJAX 请求）和“复杂逻辑”代码全部放在“组件”里，“组件”会显得过于臃肿，难以维护！
但有了 Redux “中间件”后，这些“异步”和“复杂逻辑”代码，可以放在 Action 中（Redux-thunk）；也可以拆分出来，单独放在一个文件中管理（Redux-saga）。
这样一来，一方面使代码简洁、直观、好管理，另一方面更有利于“自动化测试”

```js
// 1. 一个中间件接收store作为参数，会返回一个函数
// 2. 返回的这个函数接收老的dispatch函数作为参数(也就是代码中的next)，会返回一个新的函数
// 3. 返回的新函数就是新的dispatch函数，这个函数里面可以拿到外面两层传进来的store和老dispatch函数

function logger(store) {
  return function(next) {
    return function(action) {
      console.group(action.type);
      console.info('dispatching', action);
      let result = next(action);
      console.log('next state', store.getState());
      console.groupEnd();
      return result
    }
  }
}

function thunk(store) {
  return function (next) {
    return function (action) {
      // 先直接返回原始结果
      let result = next(action);
      return result
    }
  }
}

function thunk(store) {
  return function (next) {
    return function (action) {
      // 从store中解构出dispatch, getState
      const { dispatch, getState } = store;

      // 如果action是函数，将它拿出来运行，参数就是dispatch和getState
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      // 否则按照普通action处理
      let result = next(action);
      return result
    }
  }
}

// 外面再包一层函数createThunkMiddleware接收额外的参数
// Redux-Thunk还提供了一个API，就是你在使用applyMiddleware引入的时候，可以使用withExtraArgument注入几个自定义的参数
function createThunkMiddleware(extraArgument) {
  return function thunk(store) {
    return function (next) {
      return function (action) {
        const { dispatch, getState } = store;

        if (typeof action === 'function') {
          // 这里执行函数时，传入extraArgument
          return action(dispatch, getState, extraArgument);  
        }

        let result = next(action);
        return result
      }
    }
  }
}
// thunk中间件其实相当于没传extraArgument：
const thunk = createThunkMiddleware();

// 暴露给外面的withExtraArgument函数就直接是createThunkMiddleware了
thunk.withExtraArgument = createThunkMiddleware;


// redux-Thunk源码
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;

// 如果说Redux是“百行代码，千行文档”，那Redux-Thunk就是“十行代码，百行思想”。
// Redux-Thunk最主要的作用是帮你给异步action传入dispatch，这样你就不用从调用的地方手动传入dispatch，从而实现了调用的地方和使用的地方的解耦。
// Redux和Redux-Thunk让我深深体会到什么叫“编程思想”，编程思想可以很复杂，但是实现可能并不复杂，但是却非常有用。
// 在我们评估是否要引入一个库时最好想清楚我们为什么要引入这个库，是否有更简单的方案

```



