//Monday

//Sprint#1-3week

//1
// const user = {}
// const cat = user
// const student = {}
//
//
// if(XXX === user) {
//     console.log ("Yo!!!")
// }
/*Какую переменную надо указать вместо XXX, кроме user,
что бы в консоль вывелась строка "Yo!!!?*/
// cat

//2
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Button() {
//     return <button
//         // onClick={xxx}
//     >Click</button>
// }
//
//
// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );
// Что надо написать вместо ххх,
// что бы на странице появился пустой alert при клике по кнопке?
//() => alert('')


//3
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Пользователи старше 25 лет:
//     // const olderThen25Users = users.xxx(u => u.age > 25)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {/*{ olderThen25Users.map(u => <User key={u.id} {...u}/>)}*/}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо xxx, чтобы код работал?
// filter

//4
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// type UserPropsType = UserType & {
//     deleteUser: (id: any) => void
// }
//
// function User(props: UserPropsType) {
//     return (
//         <li>
//             <button onClick={()=>props.deleteUser(props.id)}>x</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         setUsers(users.filter(u => u.id !== userID))
//     }
//     return (
//         <main>
//             <h4>Users list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// В типе UserPropsType у функции deleteUser в параметрах указан тип "any".
// Какой тип было бы указать правильнее?
// number


//5
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>Student {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 34},
//         {id: 2, name: "Alex", age: 29},
//         {id: 3, name: "Ann", age: 25},
//         {id: 4, name: "John", age: 36},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {/*{*/}
//                 {/*    users.map(u => <User xxx={u.id}*/}
//                 {/*                         id={u.id}*/}
//                 {/*                         name={u.name}*/}
//                 {/*                         age={u.age}*/}
//                 {/*        />*/}
//                 {/*    )*/}
//                 {/*}*/}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо xxx, чтобы код работал оптимально?
//key

//6
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>Student {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 34},
//         {id: 2, name: "Alex", age: 29},
//         {id: 3, name: "Ann", age: 25},
//         {id: 4, name: "John", age: 36},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {/*{ users.map(u => <User key={u.id} {...xxx} />) }*/}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо xxx, чтобы код работал?
// u

//7
// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Button() {
//     const [tagName, setTagName] = useState<string>()
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         // setTagName(e.xxx.tagName)
//     }
//     return (
//         <>
//             <p>{tagName}</p>
//             <button onClick={onClickHandler} >
//                 <span>Click</span>
//             </button>
//         </>
//     )
// }
//
// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );
// Что надо написать вместо ххх, что бы на странице появился текст BUTTON?
//currentTarget

//8
// import React, {MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Button() {
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         // console.log((typeof e) === ххх)
//     }
//     return <button onClick={onClickHandler} >Click</button>
// }
//
//
// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );
// Какой тип данных представляет аргумент функции-обработчика?
// Что надо написать вместо ххх, что бы в консоль вывело true?
//MouseEvent<HTMLButtonElement>  'object'

//9
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Необходимо отрендерить список пользователей старше 25 лет:
//     // const getOlderThen25Users = (u: xxx) => u.age > 25
//     // const olderThen25Users = users.filter(getOlderThen25Users)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {/*{ olderThen25Users.map(u => <User key={u.id} {...u}/>)}*/}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо xxx, чтобы код работал?
//UserType

//10
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Необходимо отрендерить список ользователей старше 25 лет:
//     const getOlderThen25Users = (u: UserType) => u.age > 25
//     const olderThen25Users = users.filter(getOlderThen25Users)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 { olderThen25Users.map(u => <User key={u.id} {...u}/>)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что вернёт выражение: Array.isArray(olderThen25Users)
//true

//11
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }
//
// function User(props: UserPropsType) {
//     const deleteUser = () => props.deleteUser(props.id)
//     return (
//         <li>
//             <button onClick={deleteUser}>x</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const filteredUsers = users.filter(u => u.id !== userID)
//         // setUsers(xxx)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо xxx, чтобы код работал?
//filteredUsers


//Sprint#1-TOTAL

//1
// type UserWalletType = {
//     title: string
//     amount: number
// }
// type UserWalletPropsType = {
//     wallet: UserWalletType
// }
//
// export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
//     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// }
//
// export const UserMoney = () => {
//     const wallets = [
//         {title: 'bitcoin', amount: 1},
//         {title: '$', amount: 100}
//     ]
//
//     return <div>
//         <UserWallet wallet={xxx} />
//         <UserWallet wallet={yyy} />
//     </div>
// }
// Что нужно написать вместо xxx и yyy, чтобы компонент UserMoney отобразил информацию о двух кошельках (bitcoin и $)?
//     Ответ дайте через пробел, например: props.x wallets

//2
// type UserPropsType = {
//     name: string
//     description: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>
//         <h1>Имя: {props.name}</h1>
//         //<div>Описание: {ххх}</div>
//     </div>
// }
//Что нужно написать вместо ххх, что бы код работал?
//props.description

//3
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const state = [
//         {id: 1, name: "Bob", age: 34},
//         {id: 2, name: "Alex", age: 25},
//         {id: 3, name: "Ann", age: 30},
//         {id: 4, name: "John", age: 23},
//     ]
//     const users = [
//         {id: 1, userName: "Bob", age: 34},
//         {id: 2, userName: "Alex", age: 25},
//         {id: 3, userName: "Ann", age: 30},
//         {id: 4, userName: "John", age: 23},
//     ]
//
//     const [usersList, setUsersList] = useState<Array<UserType>>(XXX)
//     return (
//         <main>
//             <h5>User list:</h5>
//             <p>Тут будет список пользователей</p>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо XXX, чтобы код работал?
// ❗ Если мы отмапим массив, то должны увидеть данные пользователей
// ❗ Ответ дать минимально возможным объёмом кода

//4
// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function User() {
//     const [userName, setUserName] = useState<string>("")
//     return (
//         <div>
//             <p>{userName}</p>
//             <input
//                 // xxx
//                 onChange={(e) => setUserName(e.currentTarget.value)}
//             />
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );
// Что надо написать вместо ххх, чтобы инпут был контролируемым?
//value={userName}

//5
// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Notes() {
//     const [newNote, setNewNote] = useState<string>("")
//     const [notes, setNotes] = useState<Array<string>>([])
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>
//         setNewNote(e.currentTarget.value)
//     const addNote = () => {
//         setNotes([newNote, ...notes])
//         setNewNote("")
//     }
//     return (
//         <div>
//             <textarea
//                 value={newNote}
//                 onChange={onChangeHandler}
//                 onBlur={addNote}
//             />
//             <div>
//                 <button
//                     // onClick={xxx}
//                 >Clear notes list</button>
//             </div>
//             <h4>Notes:</h4>
//             <div>
//                 {notes.map(n => <p>{n}</p>)}
//             </div>
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <Notes/>, document.getElementById('root')
// );
// Что надо написать вместо ххх,
// чтобы при клике список заметок очищался?

//6
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const results = useState<Array<string>>(["Bob", "Alex", "Ann"])
//
//     const users = results[0]
//     const setUsers = results[1]
//
//     return (
//         <p>Тут будет список пользователей</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Чему равно results.length?

//7
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     return (
//         <p>Тут будет список пользователей</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что вернёт выражение: typeof setUsers?
// function

//8
// import React, {MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Button() {
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         // console.log((typeof e) === ххх)
//     }
//     return <button onClick={onClickHandler} >Click</button>
// }
//
//
// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );
// Какой тип данных представляет аргумент функции-обработчика?
// Что надо написать вместо ххх, что бы в консоль вывело true?

//9
// import ReactDOM from 'react-dom'
//
// const Son = (props: any) => {
//     return <div>
//         I am son. My name is {props.name}
//     </div>
// }
//
//
// const Father = (props: any) => {
//     return <div>
//         I am father. My name is {props.name}
//         <Son name={props.sonName} />
//     </div>
// }
//
// const Granny = (props: any) => {
//     return <div>
//         I am granny. My name is {props.name}
//         <Father name={props.fatherName} sonName={props.sonName} />
//     </div>
// }
//
// export const App = () => {
//     return <div>
//         <Granny XXX={'Бабуля'} YYY={'Батя'} ZZZ={'Сын'}/>
//     </div>
// }
//
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )
// Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел

//10
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Пользователи старше 25 лет:
//     // const olderThen25Users = users.xxx(u => u.age > 25)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {/*{ olderThen25Users.map(u => <User key={u.id} {...u}/>)}*/}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо xxx, чтобы код работал?
//filter

//11
// type PagePropsType = {
//     age: number
//     name: string
//     avatarUrl: string
// }
// const Page: React.FC<PagePropsType> = (props) => {
//     return <User a={xxx} n={yyy} />
// }
// type UserPropsType = {
//     a: number
//     n: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>name: {props.n}, age: {props.a}</div>
// }
// Что нужно написать вместо xxx и yyy?
// Ответ дайте через пробел, например: blabla onClick(props)

//12
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }
//
// function User(props: UserPropsType) {
//     return (
//         <li>
//             {/*<button onClick={() => props.deleteUser(xxx)}>x</button>*/}
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const filteredUsers = users.filter(u => u.id !== userID)
//         setUsers(filteredUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо xxx, чтобы код работал?



















