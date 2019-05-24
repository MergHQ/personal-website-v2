
const Some = () => (
  <div className="some">
    <a href="https://github.com/MergHQ">
      <img className="some_icon" src="/static/github.svg" />
    </a>
    <a href="https://www.linkedin.com/in/hugo-holmqvist-aa7ab113a">
      <img className="some_icon" src="/static/linkedin.svg" />
    </a>
  </div>
)

const ProfilePicture = () => (
  <div className="profile_picture_container">
    <div className="profile_picture" />
  </div>
)

function App() {
  return (
    <div className="flex_container">
      <div className="app_container">
        <ProfilePicture />
        <h1 className="title">Hugo Holmqvist</h1>
        <h2 className="subtitle">Human, Developer, CS student</h2>
        <Some />
      </div>
    </div>
  )
}

export default App
