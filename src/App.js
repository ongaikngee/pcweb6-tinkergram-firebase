import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostPageHome from './views/PostPageHome';
import LoginPage from './views/LoginPage';
import SignUpPage from './views/SignUpPage';
import PostPageAdd from "./views/PostPageAdd";
import PostPageDetails from "./views/PostPageDetails";
import PostPageUpdate from "./views/PostPageUpdate";
import SpinWheelPage from './views/SpinWheelPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostPageHome />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/add" element={<PostPageAdd />} />
        <Route path="/post/:id" element={<PostPageDetails />} />
        <Route path="/update/:id" element={<PostPageUpdate />} />
        <Route path="/spin" element={<SpinWheelPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
