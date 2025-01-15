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


