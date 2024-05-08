import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Questions from '../components/body/questions/Questions';
import SingleQuestion from '../components/body/singlequestion/SingleQuestion';
import AddQuestion from '../components/body/questions/newquestion/AddQuestion';

export default function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="questions" element={<Questions />}></Route>
                    <Route path="questions/:id" element={<SingleQuestion />}></Route>
                    <Route path="questions/post-new-question" element={<AddQuestion />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}