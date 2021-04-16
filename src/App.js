import { useState, useEffect } from "react";
import axios from "axios";
import RepoDetails from "./RepoDetails";
import ErrorField from "./ErrorField";
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [details, setDetails] = useState({});
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [errorString, setErrorString] = useState("");

  useEffect(() => {
    setRepos([]);
    setDetails({});
    setErrorString("");
  }, [username]);

  function handleSubmit(e) {
    e.preventDefault();
    searchRepos();
  }

  function searchRepos() {
    setLoading(true);
    axios({
      method: "get",
      url: `http://api.github.com/users/${username}/repos`,
    })
    .then(result => {
      // handle success
      setLoading(false);
      setRepos(result.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      setLoading(false);
      setErrorString("Could not find user repos!")
    });
  }

  function renderRepo(repo) {
    return (
      <div className="row list-item" onClick={() => getDetails(repo)} id={repo.id} key={repo.id}>
        <h2 className="repo-name">
          {repo.name}
        </h2>
      </div>
    )
  }

  function getDetails(repo) {
    setDetailsLoading(true);
    axios({
      method: "get",
      url: `http://api.github.com/repos/${username}/${repo.name}`,
    }).then(result => {
      setDetailsLoading(false);
      setDetails(result.data);
    });
  }

  return (
    <div className="main-container">
      <div className="row inline">
        <div className="col-6 left">
          <form className="form">
            <input
              className="input"
              value={username}
              placeholder="Username"
              onChange={e => setUsername(e.target.value)}
            />
            <button className="button" onClick={handleSubmit}>{loading ? "Searching..." : "Enter"}</button>
          </form>
          <ErrorField errorString={errorString} />
          <div className="list">
            {repos.map(renderRepo)}
          </div>
        </div>
        <div className="col-6 right">
          <RepoDetails details={details} loading={detailsLoading} />
        </div>
      </div>
    </div>
  );
}

export default App;
