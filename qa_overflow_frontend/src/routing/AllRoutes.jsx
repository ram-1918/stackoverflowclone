import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import AskQuestionForm from '../components/body/AskQuestion/AskQuestionForm';
import Main from '../pages/Main';
import Body from '../components/body/Body';
import TagsList from '../pages/TagsList';
import UsersList from '../pages/UsersList';
import QuestionsPage from '../pages/QuestionsPage';
import QuestionDetailPage from '../pages/QuestionDetailPage';

export default function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                <Route path="home" element={<Home />}></Route>
                <Route path="features/" element={<Body />}>
                    <Route index path="questions" element={<QuestionsPage />}></Route>
                    <Route path="questions/:qid" element={<QuestionDetailPage />}></Route>
                    <Route path="questions/post-new-question" element={<AskQuestionForm />}></Route>
                    <Route path="tags" element={<TagsList />}></Route>
                    <Route path="users" element={<UsersList />}></Route>
                </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}