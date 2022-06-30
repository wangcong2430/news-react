import { createStore, combineReducers } from 'redux'//1导入redux模块,解构创建仓库的方法和合并操作外部state的方法

function countReducer(state = { value: 0 }, action) {//2创建外部state操作的方法，形参为外部state初始状态
    switch (action.type) {
        case 'add':
            return { value: state.value + 1 }
        case 'sub':
            return { value: state.value - 1 }
        default:
            return state
    }
}
function userReducer(state = { name: 'wang', age: 28 }, action) {
    switch (action.type) {
        case 'changename':
            return { name: 'yyyyy', age: state.age + 1 }
        case 'changename2':
            return { name: action.name, age:action.age  }
        default:
            return state
    }
}

let reducers = combineReducers({ counter: countReducer, user: userReducer })//3合并外部state操作的方法方法

let store = createStore(reducers)//4创建全局的一个实例

export default store

