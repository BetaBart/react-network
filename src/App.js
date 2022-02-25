import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img className="header-img" src='https://upload.wikimedia.org/wikipedia/commons/b/b3/%D0%A1%D0%9A%D0%90%D0%99_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_2016_%D1%80%D1%96%D0%BA.jpg' />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div className="content-img"></div>
        <div>
          logo + description
          <div className="content-logo"></div>
        </div>
        <div>
          My posts
          <div>New Post</div>
          <div>
            <div>post1</div>
            <div>post2</div>
            <div>post3</div>
            <div>post4</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;