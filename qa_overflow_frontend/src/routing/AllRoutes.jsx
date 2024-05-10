import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Questions from '../components/body/questions/Questions';
import SingleQuestion from '../components/body/singlequestion/SingleQuestion';
import AddQuestion from '../components/body/questions/newquestion/AddQuestion';
import Main from '../pages/Main';
import Body from '../components/body/Body';
import TagsList from '../pages/TagsList';
import UsersList from '../pages/UsersList';

export default function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                <Route path="home" element={<Home />}></Route>
                <Route path="features/" element={<Body />}>
                    <Route index path="questions" element={<Questions />}></Route>
                    <Route path="questions/:qid" element={<SingleQuestion />}></Route>
                    <Route path="questions/post-new-question" element={<AddQuestion />}></Route>
                    <Route path="tags" element={<TagsList />}></Route>
                    <Route path="users" element={<UsersList />}></Route>
                </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}